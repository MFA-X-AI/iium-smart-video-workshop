#!/usr/bin/env bash
# All 14 research clips back to back, each with its full citation (promo/_scratch/cite/<CODE>.png,
# from citation-cards.mjs) fading in at 0.5 s. Never overwrites: out/research-reel-<date>-v<N>.mp4.
# Usage: promo/scripts/build-reel.sh
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=${SRC:-public/clips/research}; NAME=${NAME:-research-reel}; CITE=${CITE:-_scratch/cite}   # v2: SRC=public/clips/research-v2 NAME=research-reel-v2
ORDER="KOS KOP KOE KOM KOD KON KAHS KICT KAED KENMS AIKOL KIRKHS KOED KSTCL"
args=(); filt=""; cat=""; i=0
for k in $ORDER; do
  args+=(-i "$SRC/$k.mp4" -framerate 30 -loop 1 -t 3 -i "$CITE/$k.png")
  v=$((2 * i)); c=$((2 * i + 1))
  filt+="[$c:v]format=rgba,fade=t=in:st=0.5:d=0.3:alpha=1[c$i];[$v:v]fps=30,setsar=1[b$i];"
  filt+="[b$i][c$i]overlay=shortest=1,format=yuv420p[v$i];"
  cat+="[v$i]"; i=$((i + 1))
done
filt+="${cat}concat=n=$i:v=1:a=0[out]"
d=$(date +%Y-%m-%d); n=1
while [ -e "out/$NAME-$d-v$n.mp4" ]; do n=$((n + 1)); done
dst="out/$NAME-$d-v$n.mp4"
ffmpeg -loglevel error "${args[@]}" -filter_complex "$filt" -map "[out]" -c:v libx264 -crf 16 -pix_fmt yuv420p -movflags +faststart "$dst"
ffmpeg -loglevel error -i "$dst" -vf scale=-2:720 -c:v libx264 -crf 22 -movflags +faststart "${dst%.mp4}-share720p.mp4"
echo "$dst"
