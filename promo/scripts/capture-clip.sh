#!/usr/bin/env bash
# Frame-exact capture of one clip: steps ?t= by 1/30 s in headless Chrome at 1920x1080,
# then encodes promo/public/clips/research/<CODE>.mp4 (H.264, 30 fps). Skips frames already captured.
# Usage: promo/scripts/capture-clip.sh <CODE> [seconds=3]
set -uo pipefail
cd "$(dirname "$0")/../.."
root=$(pwd -W)
code=$1; secs=${2:-3}
base=${CLIPS_DIR:-clips}; dest=${OUT_DIR:-promo/public/clips/research}   # v2: CLIPS_DIR=clips-v2 OUT_DIR=promo/public/clips/research-v2
frames="$root/promo/_scratch/frames-$base/$code"; mkdir -p "$frames"
prof="$root/promo/_scratch/chrome-cap-$code"
chrome="/c/Program Files/Google/Chrome/Application/chrome.exe"
n=$(awk "BEGIN{print int($secs*30)}")
for i in $(seq 0 $((n - 1))); do
  f=$(printf "%s/f%04d.png" "$frames" "$i")
  [ -s "$f" ] && continue
  t=$(awk "BEGIN{printf \"%.4f\", $i/30}")
  "$chrome" --headless=new --user-data-dir="$prof" --window-size=1920,1080 --hide-scrollbars \
    --enable-unsafe-swiftshader --virtual-time-budget=5000 --screenshot="$f" \
    "file:///$root/$base/$code/index.html?t=$t" >/dev/null 2>&1
done
got=$(ls "$frames"/f*.png 2>/dev/null | wc -l)
mkdir -p "$dest"
ffmpeg -y -loglevel error -framerate 30 -i "$frames/f%04d.png" -c:v libx264 -crf 14 -pix_fmt yuv420p \
  "$dest/$code.mp4"
echo "$code: $got/$n frames -> $dest/$code.mp4"
