#!/usr/bin/env bash
# Opening v4: shot 1 with the poster composited on the laptop, shot 2 = realistic editor (screen-v2). Silent, hard cuts.
# Never overwrites: writes promo/out/opening-rough-<date>-v<N>.mp4 plus a 720p share copy.
set -euo pipefail
cd "$(dirname "$0")/.."

G=public/clips/gen
SCREEN=_scratch/screen-v2.mp4
# AI takes are 1536x1024 (3:2): fill 1920 wide, centre-crop to 16:9, 30 fps.
AI="scale=1920:-2,crop=1920:1080,fps=30,setsar=1,format=yuv420p"
# Screen: tighten on the poster (keeps the text box spilling past the page) so it reads on a phone.
SC="crop=1680:945:120:90,scale=1920:1080,fps=30,setsar=1,format=yuv420p"   # slight push-in on the poster

#   input                              start  dur   filter   beat
SEG=(
  "$G/m1-shoulder-comp-v1.mp4          1.6    2.2   AI"    # over his shoulder; the poster is on his screen
  "$SCREEN                             0.4    2.9   SC"    # select Fig. 1, nudge, the wreck (to 3.3 s)
  "$SCREEN                             4.3    2.3   SC"    # Ctrl+Z makes it worse
  "$G/m2-slump-ltx-s2202-v1.mp4        0.0    2.0   AI"    # palms drag down his face
)

args=(); filt=""; i=0
for s in "${SEG[@]}"; do
  read -r file start dur kind <<<"$s"
  args+=(-ss "$start" -t "$dur" -i "$file")
  f=$([ "$kind" = AI ] && echo "$AI" || echo "$SC")
  filt+="[$i:v]$f,trim=duration=$dur,setpts=PTS-STARTPTS[v$i];"
  i=$((i+1))
done
for j in $(seq 0 $((i-1))); do filt+="[v$j]"; done
filt+="concat=n=$i:v=1:a=0[out]"

mkdir -p out
d=$(date +%Y-%m-%d); n=1
while [ -e "out/opening-rough-$d-v$n.mp4" ]; do n=$((n+1)); done
dst="out/opening-rough-$d-v$n.mp4"
ffmpeg -loglevel error "${args[@]}" -filter_complex "$filt" -map "[out]" \
  -c:v libx264 -crf 16 -preset slow -pix_fmt yuv420p -movflags +faststart "$dst"
ffmpeg -loglevel error -i "$dst" -vf scale=-2:720 -c:v libx264 -crf 22 -movflags +faststart \
  "${dst%.mp4}-share720p.mp4"
echo "$dst"
