/**
 * app.js — Entry point for the Vanilla JS SPA
 *
 * Defines views (as functions that return HTML strings) and wires
 * up the router. State is kept in plain module-level variables and
 * the view re-renders on every navigation or user action.
 */
import { Router } from './router.js';

// ── State ──────────────────────────────────────────────────────
let count = 0;

// ── Views ──────────────────────────────────────────────────────
function HomeView() {
  return `
    <h1 class="view-title">Welcome Home</h1>
    <p class="view-body">
      This is a single-page application built with vanilla JavaScript and the
      History API — no framework, no bundler, no compile step.
    </p>
    <p class="view-body">
      Use the nav links above to switch views. Notice that the URL updates and
      the browser back/forward buttons work as expected.
    </p>
    <a href="#/counter" class="btn btn--primary">Try the Counter &rarr;</a>
  `;
}

function AboutView() {
  return `
    <h1 class="view-title">About</h1>
    <p class="view-body">
      This starter demonstrates that routing, view rendering, and state
      management are all achievable in plain JavaScript without a framework.
    </p>
    <ul style="list-style: disc; padding-left: 1.5rem; color: var(--color-muted);">
      <li style="margin-bottom: 0.5rem;"><strong>router.js</strong> — hash-based router, maps paths to render functions</li>
      <li style="margin-bottom: 0.5rem;"><strong>app.js</strong> — defines views as functions that return HTML strings</li>
      <li style="margin-bottom: 0.5rem;"><strong>State</strong> — plain module-level variables, no store library needed</li>
    </ul>
  `;
}

function CounterView() {
  // Attach event listeners after rendering via a small helper
  requestAnimationFrame(() => {
    document.getElementById('btn-increment')?.addEventListener('click', () => {
      count++;
      updateCounter();
    });
    document.getElementById('btn-decrement')?.addEventListener('click', () => {
      count--;
      updateCounter();
    });
    document.getElementById('btn-reset')?.addEventListener('click', () => {
      count = 0;
      updateCounter();
    });
  });

  return `
    <h1 class="view-title">Counter</h1>
    <p class="view-body">State lives in a plain module variable. Buttons update it and re-render only the display — no virtual DOM required.</p>
    <div class="counter">
      <div class="counter__display" id="counter-display">${count}</div>
      <div class="counter__controls">
        <button id="btn-decrement" class="btn btn--outline">&minus;</button>
        <button id="btn-increment" class="btn btn--primary">+</button>
        <button id="btn-reset" class="btn btn--secondary">Reset</button>
      </div>
    </div>
  `;
}

/** Update just the counter display without a full re-render */
function updateCounter() {
  const display = document.getElementById('counter-display');
  if (display) display.textContent = count;
}

// ── Router setup ───────────────────────────────────────────────
const app = document.getElementById('app');

new Router(app, {
  '/':        HomeView,
  '/about':   AboutView,
  '/counter': CounterView,
});
