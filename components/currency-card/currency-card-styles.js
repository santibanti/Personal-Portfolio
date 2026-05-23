// Scoped styles for the currency-card component.
// Inherits all custom properties from the active theme in style.css.

export const styles = `
  <style>
    currency-card {
      display: block;
    }

    currency-card article {
      background-color: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 12px;
      padding: clamp(1.25rem, 4vw, 2rem);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      box-shadow: var(--shadow);
    }

    currency-card header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    currency-card h3 {
      margin: 0;
      font-size: clamp(1.1rem, 3vw, 1.4rem);
    }

    .currency-card__badge {
      flex-shrink: 0;
      padding: 0.25rem 0.65rem;
      background-color: var(--tag-bg);
      color: var(--tag-text);
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      font-family: "Courier New", monospace;
      letter-spacing: 0.03em;
    }

    /* The big rate display */
    .currency-card__rate {
      font-size: clamp(2.5rem, 8vw, 3.75rem);
      font-weight: 700;
      letter-spacing: -0.04em;
      color: var(--accent);
      line-height: 1;
      margin: 0;
      max-width: unset;
    }

    .currency-card__rate[data-loading="true"] {
      opacity: 0.5;
      font-size: 1.25rem;
      letter-spacing: 0;
    }

    /* Meta definition list */
    .currency-card__meta {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 0.3rem 1.5rem;
      font-size: 0.875rem;
    }

    .currency-card__meta > dt {
      color: var(--text-muted);
      font-weight: 600;
      margin: 0;
    }

    .currency-card__meta > dd {
      color: var(--text);
      padding: 0;
    }

    currency-card footer {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-block-start: 0.75rem;
      border-block-start: 1px solid var(--border);
    }

    currency-card footer .btn {
      font-size: 0.875rem;
      padding: 0.45rem 1rem;
    }

    currency-card footer .btn[aria-busy="true"] {
      opacity: 0.65;
      cursor: wait;
    }

    .currency-card__status {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin: 0;
      max-width: unset;
    }

    .currency-card__status[data-error="true"] {
      color: #dc2626;
    }
  </style>
`;