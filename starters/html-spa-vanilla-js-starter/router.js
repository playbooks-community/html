/**
 * router.js — Simple hash-based router
 *
 * Maps hash fragments (e.g. #/about) to render functions.
 * Listens for hashchange events and initial load.
 */
export class Router {
  /**
   * @param {HTMLElement} outlet - The element where views are rendered
   * @param {Record<string, () => string>} routes - Map of path to render function
   * @param {() => string} [notFound] - Render function for unknown routes
   */
  constructor(outlet, routes, notFound) {
    this.outlet = outlet;
    this.routes = routes;
    this.notFound = notFound || (() => '<h1>404 — Page not found</h1>');

    window.addEventListener('hashchange', () => this._render());
    window.addEventListener('load', () => this._render());
  }

  /** Return the current path from the hash (e.g. "#/about" → "/about") */
  _currentPath() {
    const hash = window.location.hash;
    return hash ? hash.slice(1) : '/';
  }

  /** Render the matching route into the outlet */
  _render() {
    const path = this._currentPath();
    const renderFn = this.routes[path] || this.notFound;
    this.outlet.innerHTML = renderFn();
    this._updateActiveLinks(path);
  }

  /** Mark nav links whose href matches the current path as active */
  _updateActiveLinks(path) {
    document.querySelectorAll('[data-link]').forEach(link => {
      const href = link.getAttribute('href');
      const linkPath = href ? href.slice(1) : '/';
      link.classList.toggle('active', linkPath === path);
    });
  }
}
