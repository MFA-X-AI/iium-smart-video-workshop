#!/usr/bin/env bash
# Render stills of an asset page at given times: scripts/check-html.sh <dir> <tag> t1 t2 ...
set -uo pipefail
cd "$(dirname "$0")/.."
root=$(pwd -W); dir=$1; tag=$2; shift 2
out="$root/_scratch/qa"; mkdir -p "$out"
chrome="/c/Program Files/Google/Chrome/Application/chrome.exe"
for t in "$@"; do
  "$chrome" --headless=new --user-data-dir="$root/_scratch/chrome-$(basename $dir)" --window-size=1920,1080 --hide-scrollbars \
    --enable-unsafe-swiftshader --enable-logging=stderr --v=0 --virtual-time-budget=15000 \
    --screenshot="$out/$(basename $dir)-$tag-$t.png" "file:///$root/$dir/index.html?t=$t" 2>&1 \
    | grep -E "Uncaught|Shader Error|ERROR: 0|Failed to load" | head -5
done
