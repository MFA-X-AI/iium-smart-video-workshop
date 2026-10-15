#!/usr/bin/env bash
# Frame-exact capture of an asset page (?t= stepping, 1/30 s) with 6 parallel headless Chromes,
# then encode public/<name>.mp4. Usage: scripts/capture-html.sh <assetdir> <seconds> <name>
set -uo pipefail
cd "$(dirname "$0")/.."
root=$(pwd -W); dir=$1; secs=$2; name=$3
frames="$root/_scratch/frames/$name"; mkdir -p "$frames"
n=$(awk "BEGIN{print int($secs*30)}")
export root dir frames
seq 0 $((n - 1)) | xargs -P 6 -I{} bash -c '
  i={}; f=$(printf "%s/f%04d.png" "$frames" "$i"); [ -s "$f" ] && exit 0
  t=$(awk "BEGIN{printf \"%.4f\", $i/30}")
  "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --user-data-dir="$root/_scratch/chrome-w$((i % 6))" \
    --window-size=1920,1080 --hide-scrollbars --enable-unsafe-swiftshader --virtual-time-budget=15000 \
    --screenshot="$f" "file:///$root/$dir/index.html?t=$t" >/dev/null 2>&1'
got=$(ls "$frames"/f*.png | wc -l); echo "$name: $got/$n frames"
ffmpeg -y -loglevel error -framerate 30 -i "$frames/f%04d.png" -c:v libx264 -crf 14 -pix_fmt yuv420p "public/$name.mp4"
