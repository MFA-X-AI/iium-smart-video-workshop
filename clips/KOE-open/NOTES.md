# KOE — The missing support

A low, slow camera move across a concrete frame as its left exterior ground-floor column is lost. A localized fall of fragments and dust reveals the unsupported end. The first beam flexes, warm material highlights reveal the adjacent load path, and the frame sways most strongly through its first storey. A small cutaway reveals reinforcing steel inside the concrete.

This moment connects the paper's most vulnerable seismic case (exterior column loss) with its first-span flexural demand. Physical concrete, restrained light, shadows and suspended dust make a single structural plane feel tangible without turning it into a dashboard or a fictitious three-dimensional building collapse.

The scene uses four storeys and seven symmetric bays. Member sections and storey heights follow the paper; bay proportions follow Figure 5. Deformation, timing, reinforcement detailing, cutaway, debris and amber illumination are artistic interpretation, not numerical results. The frame remains standing. The paper's wording about collapse limits is internally inconsistent; this shot follows the reported drift response and does not assert total collapse.

- **Capture:** the main action is at `0.35–3.35` seconds; the column loss begins at `0.48` seconds. Autoplay repeats the shot every `6.4` seconds with an editorial cut.
- **Stills:** `index.html?t=0` for the intact frame, `?t=1.2` for the loss and sway, `?t=2.4` for the exposed load path. Time is in seconds and wraps at the shot duration. Frozen scenes draw once and redraw only when resized.
- **Runtime:** one HTML file, procedural assets, Three.js `0.180.0` and addons from jsDelivr. Serve over HTTP with internet access for those module imports. No build step.
- **Verification:** module syntax checked with `node --check`; no browser was launched, as requested. Visual appearance and actual GPU frame rate have not been browser-tested.

Source: Md Kassim et al. (2026), *IIUM Engineering Journal*, “Progressive Collapse Analysis of 2D RC Frames Under the Impact of Single Interior and Exterior Columns,” especially Figure 5, Sections 3.1–3.2, and the conclusions. Attribution text comes from the KOE Top pick row in `papers.json`.
