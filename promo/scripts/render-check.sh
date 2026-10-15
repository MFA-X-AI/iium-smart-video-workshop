#!/usr/bin/env bash
# Render a clip at t = 0.5, 1.5, 2.5 s in headless Chrome (1920x1080), report console/shader errors,
# and make a contact sheet. Usage: promo/scripts/render-check.sh <CODE> [tag]
# Output: clips/.qa/review/<CODE>-<tag>-{0.5,1.5,2.5}.png and <CODE>-<tag>-sheet.jpg
set -uo pipefail
cd "$(dirname "$0")/../.."
root=$(pwd -W)   # D:/... form; Chrome cannot use /d/... paths
code=$1; tag=${2:-r1}
base=${CLIPS_DIR:-clips}   # CLIPS_DIR=clips-v2 checks the v2 builds
out="$root/$base/.qa/review"; mkdir -p "$out"
prof="$root/promo/_scratch/chrome-$code"   # one profile per clip so parallel checks don't collide
chrome="/c/Program Files/Google/Chrome/Application/chrome.exe"
errs=0
for t in 0.5 1.5 2.5; do
  n=$("$chrome" --headless=new --user-data-dir="$prof" --window-size=1920,1080 --hide-scrollbars \
      --enable-unsafe-swiftshader --enable-logging=stderr --v=0 --virtual-time-budget=8000 \
      --screenshot="$out/$code-$tag-$t.png" "file:///$root/$base/$code/index.html?t=$t" 2>&1 \
      | grep -E "Shader Error|Uncaught|ERROR: 0|useProgram: program not valid" | tee -a "$out/$code-$tag-errors.txt" | wc -l)
  errs=$((errs + n))
done
ffmpeg -y -loglevel error -i "$out/$code-$tag-0.5.png" -i "$out/$code-$tag-1.5.png" -i "$out/$code-$tag-2.5.png" \
  -filter_complex "[0]scale=640:-2[a];[1]scale=640:-2[b];[2]scale=640:-2[c];[a][b][c]hstack=inputs=3" "$out/$code-$tag-sheet.jpg"
echo "$code $tag: $errs error lines; sheet $out/$code-$tag-sheet.jpg"
