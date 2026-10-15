#!/usr/bin/env bash
# Render the ad at 1080p, master audio to -14 LUFS / -1 dBTP (two-pass loudnorm), make a 720p share copy.
# Never overwrites: out/iium-ad-<date>-v<N>.mp4. Usage: scripts/render.sh
set -euo pipefail
cd "$(dirname "$0")/.."
d=$(date +%Y-%m-%d); n=1
while [ -e "out/iium-ad-$d-v$n.mp4" ]; do n=$((n + 1)); done
raw="_scratch/raw-$d-v$n.mp4"; dst="out/iium-ad-$d-v$n.mp4"
npx remotion render src/index.ts Ad "$raw" --log=error --concurrency=8 --crf=16
m=$(ffmpeg -hide_banner -i "$raw" -af loudnorm=I=-14:TP=-1.0:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
g() { echo "$m" | grep "\"$1\"" | sed 's/.*: "\(.*\)".*/\1/'; }
ffmpeg -loglevel error -i "$raw" -c:v copy \
  -af "loudnorm=I=-14:TP=-1.0:LRA=11:measured_I=$(g input_i):measured_TP=$(g input_tp):measured_LRA=$(g input_lra):measured_thresh=$(g input_thresh):offset=$(g target_offset):linear=true,aresample=48000" \
  -c:a aac -b:a 256k -movflags +faststart "$dst"
ffmpeg -loglevel error -i "$dst" -vf scale=-2:720 -c:v libx264 -crf 21 -c:a aac -b:a 160k -movflags +faststart "${dst%.mp4}-share720p.mp4"
ffmpeg -hide_banner -i "$dst" -af ebur128=peak=true -f null - 2>&1 | grep -E "^\s+(I|Peak):" 
echo "$dst"
