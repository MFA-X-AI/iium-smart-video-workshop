#!/usr/bin/env bash
# Canva pack: the ad without its editable text (brand card title, instructor and details), cut into
# sections, plus audio as a full mix and as two stems (voiceover, music + effects) that sum to the mix.
# All three audio files get the same gain, so the mix lands at -14 LUFS like scripts/render.sh.
# Usage: scripts/canva-export.sh   →   out/canva/
set -euo pipefail
cd "$(dirname "$0")/.."
o=out/canva; t=_scratch/canva; mkdir -p "$o" "$t"

npx remotion render src/index.ts Ad "$t/video.mp4" --log=error --concurrency=8 --crf=16 --muted --props='{"canva":true}'
for a in mix vo bed; do
  npx remotion render src/index.ts Ad "$t/$a.wav" --log=error --codec=wav --props="{\"audio\":\"$a\"}"
done

# one gain for all three, measured on the mix
i=$(ffmpeg -hide_banner -i "$t/mix.wav" -af ebur128 -f null - 2>&1 | grep -E "^\s+I:" | tail -1 | awk '{print $2}')
gain=$(awk -v i="$i" 'BEGIN { printf "%.2f", -14 - i }')
echo "mix ${i} LUFS -> gain ${gain} dB"
for a in mix vo bed; do
  ffmpeg -loglevel error -y -i "$t/$a.wav" -af "volume=${gain}dB,aresample=48000" -c:a pcm_s16le "$t/$a-g.wav"
done
cp "$t/mix-g.wav" "$o/audio-full-mix.wav"
cp "$t/vo-g.wav" "$o/audio-voiceover.wav"
cp "$t/bed-g.wav" "$o/audio-music-and-effects.wav"

# whole video, and sections at the frames the timeline already uses (30 fps)
ffmpeg -loglevel error -y -i "$t/video.mp4" -c copy -movflags +faststart "$o/00-full-video-no-text.mp4"
cut() { # name start end (frames)
  ffmpeg -loglevel error -y -i "$t/video.mp4" -vf "trim=start_frame=$2:end_frame=$3,setpts=PTS-STARTPTS" \
    -an -c:v libx264 -crf 16 -preset slow -pix_fmt yuv420p -movflags +faststart "$o/$1.mp4"
}
cut 01-brand-card-background 0 149
cut 02-story-opening-to-wall 149 1698
cut 03-particle-title 1698 1878
cut 04-instructor-background 1878 1990
cut 05-details-background 1990 2208
cut 06-closing-shot 2208 2538

ffmpeg -hide_banner -i "$o/audio-full-mix.wav" -af ebur128=peak=true -f null - 2>&1 | grep -E "^\s+(I|Peak):"
ls -la "$o"
