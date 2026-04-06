# html-basic-starter

A clean, minimal HTML5 starter with no build step, no framework, and no dependencies.

## What's included

- **`index.html`** — semantic HTML5 with a sticky nav, hero section, feature cards, and footer
- **`styles.css`** — modern CSS reset, custom properties for theming, responsive layout with Grid/Flexbox
- **`main.js`** — vanilla JS for mobile menu toggle and dark mode (persisted to `localStorage`)

## Usage

Just open `index.html` in your browser — no install, no build step.

```
open index.html
```

Or serve it locally:

```bash
npx serve .
# or
python3 -m http.server
```

## Dark mode

Click the moon icon in the nav to toggle dark mode. The preference is saved to `localStorage` and respects the OS `prefers-color-scheme` setting on first visit.

## Mobile menu

On screens under 640px, the nav links collapse into a hamburger menu. Click to toggle.

## Customization

- Edit CSS custom properties in `:root` inside `styles.css` to change colors, spacing, and fonts.
- Replace the logo text, nav links, and section content in `index.html`.
