# HTML SPA with Vanilla JS Starter

A client-side single-page application using hash-based routing and ES modules. No framework, no bundler. Demonstrates that routing, view rendering, and state management are achievable in plain JavaScript.

## Files

- `index.html` — Shell HTML with nav and `<main id="app">` outlet
- `router.js` — Hash-based Router class that maps paths to render functions
- `app.js` — View functions (Home, About, Counter) and router setup
- `styles.css` — Minimal layout styles

## How It Works

1. `router.js` exports a `Router` class. It listens for `hashchange` events and calls the matching render function.
2. `app.js` defines views as functions that return HTML strings, keeps state in module-level variables, and creates a `Router` instance.
3. Navigation updates `window.location.hash`, triggering the router to swap the view.

## Getting Started

Because this starter uses ES modules (`type="module"`), it must be served over HTTP — you cannot open `index.html` directly as a `file://` URL.

```bash
# Python
python3 -m http.server

# Node (npx)
npx serve .
```

Then open `http://localhost:8000` (or whatever port is shown).
