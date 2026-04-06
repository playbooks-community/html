# html-tailwind-starter

A minimal HTML starter with Tailwind CSS v4 and Vite v6. No PostCSS config, no `tailwind.config.js` — Tailwind v4 integrates directly via the Vite plugin.

## Setup

```bash
npm install
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server at `http://localhost:5173` |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
html-tailwind-starter/
├── index.html          # Entry point with Tailwind utility classes
├── vite.config.js      # Vite config with @tailwindcss/vite plugin
├── src/
│   ├── main.js         # JS entry — imports style.css
│   └── style.css       # @import "tailwindcss" — that's it
├── package.json
└── .gitignore
```

## How it works

Tailwind v4 uses a CSS-first approach. The entire configuration lives in CSS using `@theme` directives. The `@tailwindcss/vite` plugin handles everything — no PostCSS, no separate config file needed.

To customize the theme, add a `@theme` block to `src/style.css`:

```css
@import "tailwindcss";

@theme {
  --color-brand: #4f46e5;
  --font-display: "Inter", sans-serif;
}
```

## Dark mode

Tailwind v4 uses the `dark:` variant with the CSS `prefers-color-scheme` media query by default. The `index.html` is already set up with dark mode variants on all elements.
