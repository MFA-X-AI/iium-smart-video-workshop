#!/usr/bin/env bash
# Start one clip's first Astra build from clips/BRIEF_OPEN.md.
# Usage: promo/scripts/launch-clip.sh <CODE> <papers.json index> <pdf path> [effort]
# Writes clips/<CODE>/ and logs to clips/.runs/<CODE>-r1.{log,md}; the session id is in the log.
set -euo pipefail
cd "$(dirname "$0")/../.."
code=$1; idx=$2; pdf=$3; effort=${4:-high}
mkdir -p clips/.runs
codex exec --skip-git-repo-check -m gpt-6-astra -c model_reasoning_effort="$effort" -s workspace-write \
  -C "$PWD" -o "clips/.runs/$code-r1.md" \
  "Read clips/BRIEF_OPEN.md and do what it says. Your clip is $code: use the visual style and title position for $code in the brief's table. Paper: $pdf (its row is index $idx in papers.json, a zero-based JSON array index). Output folder: clips/$code/. Write only inside clips/." \
  < /dev/null > "clips/.runs/$code-r1.log" 2>&1
echo "$code done: $(grep -m1 'session id' "clips/.runs/$code-r1.log")"
