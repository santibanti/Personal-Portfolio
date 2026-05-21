// Scoped styles injected into the theme-picker component.
// Uses the same custom properties defined in style.css so it
// automatically respects whichever theme is currently active.

export const styles = `
  <style>
    theme-picker {
      position: relative;
      display: inline-flex;
      align-items: center;
    }

    .theme-picker__toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.75rem;
      background-color: var(--bg-alt);
      color: var(--text);
      border: 1.5px solid var(--border);
      border-radius: 8px;
      font: inherit;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.15s ease, border-color 0.15s ease;
      white-space: nowrap;
    }

    .theme-picker__toggle:hover {
      background-color: var(--border);
    }

    .theme-picker__toggle:focus-visible {
      outline: 0.2rem solid var(--accent);
      outline-offset: 0.2rem;
    }

    .theme-picker__toggle[aria-expanded="true"] {
      border-color: var(--accent);
    }

    /* Small color swatch dot showing the active theme accent */
    .theme-picker__swatch {
      display: inline-block;
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
      background-color: var(--accent);
      flex-shrink: 0;
    }

    .theme-picker__chevron {
      font-size: 0.65rem;
      color: var(--text-muted);
      transition: transform 0.15s ease;
    }

    .theme-picker__toggle[aria-expanded="true"] .theme-picker__chevron {
      transform: rotate(180deg);
    }

    /* Dropdown menu */
    .theme-picker__menu {
      position: absolute;
      top: calc(100% + 0.4rem);
      right: 0;
      z-index: 200;
      list-style: none;
      padding: 0.35rem;
      margin: 0;
      background-color: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 10px;
      box-shadow: var(--shadow);
      min-width: 9rem;
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }

    .theme-picker__menu[hidden] {
      display: none;
    }

    .theme-picker__menu > li {
      padding: 0.45rem 0.85rem;
      border-radius: 6px;
      font-size: 0.875rem;
      cursor: pointer;
      color: var(--text-muted);
      transition: background-color 0.1s ease, color 0.1s ease;
      margin: 0;
    }

    .theme-picker__menu > li:hover {
      background-color: var(--bg-alt);
      color: var(--text);
    }

    .theme-picker__menu > li[aria-selected="true"] {
      color: var(--accent);
      font-weight: 700;
      background-color: var(--tag-bg);
    }

    .theme-picker__menu > li:focus-visible {
      outline: 0.2rem solid var(--accent);
      outline-offset: -0.1rem;
      border-radius: 6px;
    }
  </style>
`;