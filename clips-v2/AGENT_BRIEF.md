# Agent brief: make one clip show what makes ITS paper special (v2)

Repo root: the repository root (Windows; use Git Bash).

## Why v2 exists
A promo video for an IIUM workshop teaching lecturers to animate their research with AI, cut from
3-second clips, one per paper. The v1 clips (in `clips/<CODE>/`, which you must NOT modify) look good
but show the paper's general topic, not what the paper contributed. The user said: "it's showing a
concept, but it doesn't really show what makes the paper special." Swap test: if the clip would still
work for a different paper on the same topic, it's generic, and generic fails.

## THIS RUN: FULL RUN, UNATTENDED (overnight)
The user is asleep and has approved the whole pipeline. Do all steps 1-5 without asking anyone. Budget:
the first build plus at most 2 feedback rounds (3 Astra runs in total). If it's still weak after that,
stop and say so honestly in your report; don't loop. If codex fails (rate limit, crash), wait a few
minutes and retry the same command once; if it fails again, report it.

Lessons from the pilot (Architecture), apply them:
- Don't put ambiguous notation on screen. E.g. space syntax uses "R" for both the analysis radius and
  the correlation, so write "city-wide correlation −0.205", not "R = −0.205 (R=n)".
- Weak or null results are shown as what they are ("weak", "no significant difference"), never dressed
  up as strong.
- Don't dress an illustration up as a real measurement the paper didn't make: no stain/channel
  legends (DAPI, actin...), scale bars, instrument readouts or axis labels for imaging or tests the
  paper didn't do. If the technique imitates an imaging method, label it as an illustration and say
  how the value was actually measured (e.g. "Illustration · red = TP53 level (measured by qPCR)").
- Every number and label on screen must match the paper exactly; crop and zoom the rendered frames to
  check the text, as Astra can misspell or clip text.

## Your job, in order
1. **Read the paper yourself, fully** (you're the only one who looks closely at it). Extract text with
   `uv run --no-project --python 3.12 --with pypdf python` (there is no system Python; always use uv).
   If the PDF is image-only, render pages to PNG with pypdfium2 via uv and read them. Look at the key
   figures and tables, not just the abstract.
2. **Present the paper's RESULTS.** Think like the lead author presenting their results slide: the
   clip IS their headline result, animated. Not the topic, not the mechanism in general, not the method
   for its own sake. Go to the Results/Findings section and its key table or figure. Write
   `clips-v2/<CODE>/PROPOSAL.md` containing:
   - **Headline result:** the single most important finding, stated with its actual values (e.g. "A beat
     B: X vs Y", "rose from X to Y", "Z% of cases", "strongest in region R"), with page/table/figure refs.
     Negative or null results count too; present them honestly, but pick the result the authors lead with.
   - **The data on screen:** the real values, comparison, ranking, trend or map, animated so the result
     builds up in front of the viewer (bars grow to their true values, groups separate, a map fills
     with the paper's own data, before becomes after). Show the key numbers on screen, exactly as
     printed, with units. Never invent, round misleadingly or extrapolate data, and don't imply
     precision the paper doesn't have. If the paper is qualitative, its results are its findings: show
     its actual themes, categories, cases or framework, with their real labels and counts if given.
   - **Show the result happening IN THE SUBJECT, not as a chart.** Don't default to bar charts, line
     graphs, scatter plots or axes: that turns the clip into a slide. Stage the finding physically, and
     put the numbers on the scene as annotations. Examples: two glass beads side by side, the one
     touching the fibre ringing bright while the one 10 µm away rings dim, labelled "0 µm vs 10 µm";
     two teeth under load, one snapping repairably while the other splits; clay lungs blowing a
     visibly stronger breath after the exercise week, with the peak-flow values beside each breath.
     A chart or map is right only when the result IS a distribution or a geography (e.g. provincial
     values across Indonesia), and even then it's drawn in the clip's technique. If you propose a chart,
     say why the subject itself can't carry the result.
   - **Second-by-second storyboard (0-3 s):** what the viewer sees at 0.5, 1.5 and 2.5 s. The finding
     must land by about 2 s and be readable by a non-expert lecturer.
   - **Title** (at most ~8 words): the result in plain language (e.g. "Touching the fibre beats a 10 µm
     gap"), not the topic. The visual carries the numbers.
   - **Swap test:** one sentence on why this could not be another paper's clip.
   - **Visual style and medium:** use YOUR clip's technique from the table below and commit to it fully
     (materials, lighting, line quality, typography, and motion language, e.g. claymation moves in
     stepped frames, a sketch draws itself stroke by stroke). The user wants every clip to look
     completely different from the others: a different technique, not just a different palette. Say
     how the technique serves this paper's data.

     | Clip | Technique |
     |---|---|
     | KOS | Photoreal macro cinematography: glass, caustics, shallow focus, bokeh |
     | KOP | Pristine journal-cover illustration on white: soft studio light, crisp cutaways |
     | KOE | Engineering blueprint that becomes a CAD render |
     | KOM | Fluorescence/confocal microscopy: black field, glowing stain channels (blue nuclei, green/red markers) |
     | KOD | Greyscale micro-CT / radiograph: density shading, scan slices |
     | KON | Stop-motion claymation: visible fingerprints, soft clay, stepped ~12 fps motion |
     | KAHS | Layered cut-paper diorama: paper textures, depth by layers, soft shadows |
     | KICT | Neon point cloud and wireframe on black |
     | KAED | Architect's presentation sketch: ink linework drawing itself, then marker/watercolour colour |
     | KENMS | Swiss-style flat data art: bold grid, flat colour, strong typography, 2D |
     | AIKOL | Woodcut/linocut print: carved black lines, one spot colour, paper grain |
     | KIRKHS | Kinetic typography: words are the only visual element |
     | KOED | Illuminated manuscript: gold leaf, pigment, parchment |
     | KSTCL | Antique cartography: hand-inked coastlines, watercolour washes, hand lettering |
     2D or 3D follows from the technique (e.g. KENMS, KIRKHS and KSTCL are naturally 2D).
     Devices like "the paper's own figure lifts off the page" may be used where they fit, but not as
     a formula for every clip.
3. **Instruct Astra (Codex CLI) to build it.** Write `clips-v2/<CODE>/BRIEF.md`: the proposal, plus the
   hard constraints below, plus: "Read clips/BRIEF_OPEN.md for the general rules (no UI chrome, title
   position, no attribution in the clip, bottom-right 980x300 px kept clear, ?t= freeze), except where
   this brief overrides them." Then run, from the repo root:
   ```
   codex exec --skip-git-repo-check -m gpt-6-astra -c model_reasoning_effort=high -s workspace-write \
     -C "." -o clips-v2/.runs/<CODE>-r1.md \
     "Read clips-v2/<CODE>/BRIEF.md and build it. Output: clips-v2/<CODE>/index.html and NOTES.md. Write only inside clips-v2/<CODE>/ and clips-v2/.qa/. Never launch a browser." \
     < /dev/null > clips-v2/.runs/<CODE>-r1.log 2>&1
   ```
   (create `clips-v2/.runs/` first). The session id is in the log (`session id: ...`). It takes a while;
   use a long timeout or run it in the background and wait.
4. **Verify with your own eyes.** Render stills (you can run Chrome; Astra can't):
   `CLIPS_DIR=clips-v2 bash promo/scripts/render-check.sh <CODE> r1`
   gives `clips-v2/.qa/review/<CODE>-r1-{0.5,1.5,2.5}.png`, a sheet, and an error-line count. READ the
   PNGs. Also check: the scene isn't blank; numbers and labels on screen match the paper exactly (zoom in
   by cropping with ffmpeg if text is small); geometry and data are faithful; the finding reads in 3 s.
5. **Feedback rounds (up to 2):** send the frames back to the same session with a specific critique:
   ```
   codex exec resume <session-id> --skip-git-repo-check -m gpt-6-astra -c model_reasoning_effort=high \
     -o clips-v2/.runs/<CODE>-r2.md -i <png1> -i <png2> -i <png3> "<critique>. Update in place, don't launch a browser, write only inside clips-v2/<CODE>/." \
     < /dev/null > clips-v2/.runs/<CODE>-r2.log 2>&1
   ```
   then re-render (tag r2, r3). Small mechanical fixes (a wrong label, a clipped word) you may make
   yourself directly in the HTML, then re-render.

## Hard constraints for the clip
- One self-contained `clips-v2/<CODE>/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (it will be captured frame by frame at 30 fps for 3 s).
- 3D: three.js from jsDelivr via an import map, pinned version. 2D: canvas/SVG; small pinned jsDelivr
  libs (e.g. d3, topojson) are OK. No other CDNs, no build step.
- No citation/attribution in the clip (added in the edit). Keep the bottom-right 980x300 px free of the
  title and key action.
- Scientifically honest; an expert author will watch. HTML comment at the top: what comes from the paper
  (with page refs) vs artistic licence.

## Rules
- Never modify anything in `clips/`, `promo/public/`, `promo/out/`, or another agent's `clips-v2/<X>/`.
- Never kill processes by name; only a PID you started. No git commits.
- Python only via uv. No `/tmp`; scratch goes in `clips-v2/.qa/<CODE>/`.

## Report back (short)
1. Headline result, in one line with its values. 2. What's on screen at 0.5 / 1.5 / 2.5 s and which
paper data it uses. 3. Title. 4. Swap test, one line. 5. Rounds run, and your honest verdict: is it
good enough for the promo, and does every on-screen number match the paper? 6. The final render tag
(e.g. r3) and the frame paths. 7. Anything uncertain or unverified (a value you couldn't confirm, a
figure you couldn't read, a missing PDF).
