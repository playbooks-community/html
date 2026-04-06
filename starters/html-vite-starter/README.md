# html-vite-starter

A minimal HTML + Vite starter. No framework, no TypeScript — just fast native ES modules with Vite's dev server and build pipeline.

## Setup

```bash
npm install
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server at `http://localhost:5173` with HMR |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
html-vite-starter/
├── index.html        # Entry point (Vite reads this directly)
├── src/
│   ├── main.js       # JS entry — imports CSS and sets up interactivity
│   └── style.css     # All styles
├── package.json
└── .gitignore
```

## Notes

- `index.html` is the Vite entry point — the `<script type="module">` tag is how Vite discovers your JS.
- CSS is imported directly in `main.js` — Vite handles it natively.
- Production builds are output to `dist/` and are fully self-contained.
