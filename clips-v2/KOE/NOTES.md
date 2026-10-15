# KOE — SMA wrist exoskeleton

The result: the four-spring prototype exceeds the model's torque requirement for flexion (0.332 versus 0.26 Nm) and extension (0.328 versus 0.27 Nm), but falls short of the 0.32 Nm requirement for sideways movement.

Built as a self-contained 1920 × 1080 canvas drawing: Prussian-blue engineering sheet, sequentially traced outlines, scanning conversion to shaded materials, then antagonistic spring contraction and wrist rotation. Every arrow uses **300 degrees per Nm (0.1 Nm = 30 degrees)**. The side-view extension and flexion arcs sweep 98.4 and 99.6 degrees, at separate radii, with a visible gap at their hand-side origins. Dashed ghost arcs end at bold white radial target bars (81 and 78 degrees); the solid arrows pass these bars, which flash once and gain a check mark. Result labels sit near the arrow tips; requirement labels sit beside the target bars.

The top view is enlarged 20%. Its ghost arcs extend to 96 degrees, while the amber arrows stop at approximately 24 and 21 degrees with small drawn X marks. The lower arrow points toward the thumb and the upper toward the little finger. All key content on the right stays above y=760; the bottom-right 980 × 300 area contains only sheet graphics. Both sideways results are complete by 2.2 s.

## Intended frames

- **0.5 s:** clean arm/hand outlines and four-spring arrangements are traced, without the duplicate thumb contour. Both views show dashed requirement arcs ending at bold white target bars; side-view requirement labels sit beside their bars. The dimension is 6 cm.
- **1.5 s:** the satin splint and textile glove are filled; both dorsal coils glow and contract, raising the hand toward the extension target. The extension arrow has passed its 0.27 Nm tick and its 0.328 Nm result is visible.
- **2.5 s:** both separate side-view arrows extend beyond their targets and retain check marks and exact labels. The hand is flexed and both bottom coils remain red, fading slowly after 2.3 s. The enlarged top view shows the second small stalled yaw, with diagonal activation and two short amber arrows far short of their bold targets; the combined shortfall label is visible. The hand returns to neutral by 3 s.

## Evidence and interpretation

Table 2 (p.459) supplies required torques and target ROM; p.459 supplies the 6 cm moment arm and the four-spring configuration. The measured flexion/extension values are from p.460 and Fig.11. The two sideways sweeps use approximate plot readings of 0.08/0.07 Nm, never printed as measured values. The paper's Fig.9 mode names disagree with its p.459 prose and Fig.11 caption; this clip uses the requested combined radial/ulnar label and shows both diagonal combinations without assigning a name to either individual pulse.

Geometry, surface finish, heat luminosity, coil contraction and timing are illustrative. The top view exposes the palm-side coils through the glove, offset within the silhouette for legibility; it is a technical cutaway, not an additional set of actuators. Spring colors identify activation, not literal visible incandescence. Wrist angles illustrate the model's targets, not a claim that torque tests measured those poses. The slow real cycle is disclosed on the sheet, following p.461 / Table 4.

Title: “Heated springs bend the wrist, but not sideways”. This cannot swap to a generic SMA paper: the two precise successful torques, their requirements, and the diagonal-pair shortfall are the subject of the drawing.

## Revision and verification

The supplied Chrome r1 frames exposed the merged-circle problem and weak target marks. This revision replaces those annotations, removes the stray old target dashes and duplicate thumb contour, and adjusts diagonal actuation timing and retained flexion heat. No on-screen wording was added; checks and X marks are drawn symbols.

- `node --check clips-v2/KOE/qa-r2/clip.mjs` passed on the extracted module.
- Browser-free `@napi-rs/canvas` checks cover eight timestamps, the exact text allowlist, text bounds above the right-side y=760 boundary, all seven torque-to-angle mappings, both target crossings, the full verdict by 2.2 s, persistent flexion heat, both yaw directions and return, and deterministic frozen output.
- Inspected the revised 0.5 / 1.5 / 2.5 s contact sheet and the 2.2 s verdict frame. Outputs and the repeatable harness are in `qa-r2/`, inside the permitted KOE folder.
- No browser was launched. The new native canvas snapshots validate drawing logic and composition; revised browser playback and browser-specific font/raster differences remain unverified. Autoplay runs once and holds the final verdict; `?t=<seconds>` renders without requesting an animation frame.


## r3 (manual fix by reviewing agent)
Top-view diagonal pairs cross-faded so all four coils glowed ~2.1 s. Retimed: pair A cools 2.06-2.14 s, pair B heats 2.15-2.28 s, ulnar arrow 2.14-2.30 s. Never more than two coils hot at once.
