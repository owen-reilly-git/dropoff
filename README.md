# Drop Off Service

Static site for Drop Off Service, a bar at 14th St & Avenue A. Plain HTML, CSS, and JS: no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Find placeholders

Every placeholder is marked `TODO`:

```sh
grep -rn TODO --include='*.html' --include='*.js' .
```

## Swap photos

Placeholders live in `images/` as SVGs (1200 × 900, 4:3). The home page hero, `images/hero-bar.svg`, is wide (2400 × 1350) and is cropped to fill the screen, so use a dim photo with the interesting part near the middle. Add your photos there, then update each `<img>` `src` and `alt` (and the gallery captions). Photos are cropped to 4:3 automatically.

## Hook up the event form

The inquiry form in `events.html` posts with `fetch` to its `action` URL. Create a form at Formspree (or similar) and replace `https://formspree.io/f/TODO_FORM_ID` with your endpoint. Until then, submitting shows a "not connected yet" message and sends nothing.

## Shared header and footer

The header and footer are copied into each page. If you change them, change all six HTML files.
