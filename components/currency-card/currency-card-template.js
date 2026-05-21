// Returns the initial HTML scaffold for the currency-card component.
// Data slots are filled in by currency-card.js after the fetch resolves.

export const template = () => `
  <article aria-labelledby="currency-title" aria-live="polite">

    <header>
      <h3 id="currency-title">USD &rarr; EUR</h3>
      <span class="currency-card__badge">Live Rate</span>
    </header>

    <p class="currency-card__rate" data-rate aria-label="Exchange rate">
      Loading&hellip;
    </p>

    <dl class="currency-card__meta">
      <dt>Base</dt>
      <dd data-base>&mdash;</dd>

      <dt>Quote</dt>
      <dd data-quote>&mdash;</dd>

      <dt>Last updated</dt>
      <dd data-date>&mdash;</dd>
    </dl>

    <footer>
      <button type="button" class="btn">Refresh</button>
      <p class="currency-card__status" role="status" data-status>Ready.</p>
    </footer>

  </article>
`;