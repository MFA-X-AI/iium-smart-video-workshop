#!/usr/bin/env bash
# Sound effects for the opening (v4 cut, 9.4 s): places each cut sound at its frame, over a
# synthesized room tone, and muxes onto the picture. Makes take A and take B for an ear check.
# Never overwrites: out/opening-sfx<TAKE>-<date>-v<N>.mp4 (+ -share720p).
# Usage: promo/scripts/mix-opening-sfx.sh [A|B]
set -euo pipefail
cd "$(dirname "$0")/.."
take=${1:-A}
VIDEO=out/opening-rough-2026-09-30-v4.mp4
C=public/sfx/cut
DUR=9.4

# Timeline (cut time = shot start + screen t - segment in-point; see cut-opening-v4.sh and
# promo/screen timing: select 1.15, press 1.62, release 2.26, Ctrl+Z 4.45):
#   shot 1 0.0-2.2 | screen seg 1 (in 0.4) 2.2-5.1 | screen seg 2 (in 4.3) 5.1-7.4 | shot 3 7.4-9.4
#  sound                    at (s)  gain (dB)  note
# No typing in shot 1: his hand rests on the mouse and never moves (user caught the mismatch).
CUES=(
  "$C/click-$take.wav        2.95    -14"      # select Fig. 1
  "$C/click-$take.wav        3.42    -20"      # press to drag (softer)
  "$C/drag-A.wav             3.45    -26"      # tiny slide on the desk (drag-B is too loud: it has a click in it)
  "$C/click-$take.wav        4.06    -16"      # release: the layout breaks, then silence
  "$C/ctrlz-$take.wav        5.25    -12"      # Ctrl+Z
  "$C/chair-$take.wav        7.45    -20"      # chair creak as he leans back
  "$C/sigh-$take.wav         7.70    -10"      # tired exhale through his hands
)

# Room tone, synthesized (the generated takes measured tonal and eventful, not a steady hum):
# brown noise low-passed like air handling, plus a faint 50 Hz mains hum and its harmonic.
room="anoisesrc=color=brown:amplitude=0.5:duration=$DUR:seed=7,lowpass=f=700,highpass=f=40,volume=-38dB[room];\
sine=f=50:duration=$DUR,volume=-60dB[h1];sine=f=100:duration=$DUR,volume=-64dB[h2];\
[room][h1][h2]amix=inputs=3:normalize=0[bed]"

args=(); filt="$room;"; mixin="[bed]"; i=1
for c in "${CUES[@]}"; do
  read -r file at gain <<<"$c"
  args+=(-i "$file")
  ms=$(awk "BEGIN{print int($at*1000)}")
  filt+="[$i:a]aformat=sample_rates=48000:channel_layouts=mono,volume=${gain}dB,adelay=${ms},apad=whole_dur=$DUR[s$i];"
  mixin+="[s$i]"; i=$((i+1))
done
filt+="${mixin}amix=inputs=$i:normalize=0:duration=first,atrim=0:$DUR,pan=stereo|c0=c0|c1=c0,volume=8dB,alimiter=limit=0.9[a]"   # +8 dB so the sparse mix is audible on a phone

d=$(date +%Y-%m-%d); n=1
while [ -e "out/opening-sfx$take-$d-v$n.mp4" ]; do n=$((n+1)); done
dst="out/opening-sfx$take-$d-v$n.mp4"
ffmpeg -loglevel error -i "$VIDEO" "${args[@]}" -f lavfi -i "anullsrc=r=48000" \
  -filter_complex "$filt" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest "$dst"
ffmpeg -loglevel error -i "$dst" -vf scale=-2:720 -c:v libx264 -crf 22 -c:a copy -movflags +faststart "${dst%.mp4}-share720p.mp4"
echo "$dst"
