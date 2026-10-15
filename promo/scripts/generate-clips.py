"""Generate the AI b-roll for the workshop promo on Hugging Face ZeroGPU Spaces.
(Adapted from the KERICE studio's generate-clips.py; adds "still_from" to reuse a still.)

Two stages per shot, both seeded:
  still  Z-Image-Turbo text-to-image, 16:9      -> _scratch/gen/stills/<id>-s<seed>.png
  motion image-to-video on Wan 2.2 and/or LTX-2.3 -> public/clips/gen/<id>-<engine>-s<seed>-v<N>.mp4

Never overwrites: an existing still is reused, and each video take gets the next free -vN.
Usage:
  uv run generate-clips.py --shot q1-bus                  # still + both engines
  uv run generate-clips.py --shot q1-bus --engine wan
  uv run generate-clips.py --all
"""
import argparse
import json
import shutil
from pathlib import Path

import httpx
from gradio_client import Client, handle_file
from huggingface_hub import get_token

HERE = Path(__file__).resolve().parent
STUDIO = HERE.parent
STILLS = STUDIO / "_scratch" / "gen" / "stills"
CLIPS = STUDIO / "public" / "clips" / "gen"

T2I = "Tongyi-MAI/Z-Image-Turbo"
ENGINES = {"wan": "zerogpu-aoti/wan2-2-fp8da-aoti-faster", "ltx": "Lightricks/LTX-2-3"}

_clients: dict[str, Client] = {}


def client(space: str) -> Client:
    if space not in _clients:
        # ZeroGPU queues can hold a request for minutes; httpx's 5 s default drops it.
        _clients[space] = Client(space, token=get_token(), verbose=False,
                                 httpx_kwargs={"timeout": httpx.Timeout(900, connect=60)})
    return _clients[space]


def still(shot: dict, style: str, by_id: dict) -> Path:
    # Several shots can animate one still, so the same person stays the same across cuts.
    if "still_from" in shot:
        return still(by_id[shot["still_from"]], style, by_id)
    # A real photograph (already sized to the engine's 3:2 input) is used as the still.
    if "photo" in shot:
        photo = STUDIO / shot["photo"]
        if not photo.exists():
            raise FileNotFoundError(photo)
        return photo
    out = STILLS / f"{shot['id']}-s{shot['seed']}.png"
    if out.exists():
        return out
    images, _, _ = client(T2I).predict(
        prompt=f"{shot['image']}. {style}",
        resolution="1536x864 ( 16:9 )",
        seed=shot["seed"],
        steps=8,
        shift=3.0,
        random_seed=False,
        api_name="/generate",
    )
    src = Path(images[0]["image"])
    STILLS.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(src, out)
    return out


def next_take(shot: dict, engine: str) -> Path:
    n = 1
    while (p := CLIPS / f"{shot['id']}-{engine}-s{shot['seed']}-v{n}.mp4").exists():
        n += 1
    return p


def motion(shot: dict, engine: str, image: Path, negative: str) -> Path:
    prompt = f"{shot['motion']}, cinematic, realistic"
    if engine == "wan":
        video, _ = client(ENGINES["wan"]).predict(
            input_image=handle_file(str(image)),
            prompt=prompt,
            steps=6,
            negative_prompt=negative,
            duration_seconds=4.0,
            guidance_scale=1,
            guidance_scale_2=1,
            seed=shot["seed"],
            randomize_seed=False,
            api_name="/generate_video",
        )
    else:
        video, _ = client(ENGINES["ltx"]).predict(
            input_image=handle_file(str(image)),
            prompt=prompt,
            duration=4.0,
            enhance_prompt=False,
            seed=shot["seed"],
            randomize_seed=False,
            # The Space returns no video for 1536x864; its own suggestion is 3:2.
            # Remotion crops to 16:9 with objectFit cover.
            height=1024,
            width=1536,
            api_name="/generate_video",
        )
    if video is None:
        raise RuntimeError(f"{engine} returned no video for {shot['id']}")
    src = Path(video["video"] if isinstance(video, dict) else video)
    out = next_take(shot, engine)
    CLIPS.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(src, out)
    return out


def main() -> None:
    ap = argparse.ArgumentParser()
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument("--shot", action="append", help="shot id (repeatable)")
    g.add_argument("--all", action="store_true")
    ap.add_argument("--engine", choices=[*ENGINES, "both"], default="both")
    ap.add_argument("--still-only", action="store_true")
    args = ap.parse_args()

    spec = json.loads((HERE / "genshots.json").read_text(encoding="utf-8"))
    by_id = {s["id"]: s for s in spec["shots"]}
    ids = list(by_id) if args.all else args.shot
    unknown = [i for i in ids if i not in by_id]
    if unknown:
        raise SystemExit(f"unknown shot id(s): {unknown}")
    engines = list(ENGINES) if args.engine == "both" else [args.engine]

    failed = []
    for sid in ids:
        shot = by_id[sid]
        img = still(shot, spec["style"], by_id)
        print(f"[still] {sid}: {img.relative_to(STUDIO)}", flush=True)
        if args.still_only:
            continue
        for eng in engines:
            # One failed take must not cost the rest of the batch; failures are listed
            # at the end and the exit code is non-zero.
            try:
                out = motion(shot, eng, img, spec["negative"])
            except Exception as e:
                failed.append(f"{sid}/{eng}: {type(e).__name__}: {e}")
                print(f"[{eng}] {sid}: FAILED {type(e).__name__}: {e}", flush=True)
                continue
            print(f"[{eng}] {sid}: {out.relative_to(STUDIO)}", flush=True)
    if failed:
        raise SystemExit("failed takes:\n  " + "\n  ".join(failed))


if __name__ == "__main__":
    main()
