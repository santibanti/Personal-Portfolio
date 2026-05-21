// Custom element that fetches the live USD -> EUR exchange rate
// from the Frankfurter API (https://www.frankfurter.app/) and
// renders it with a loading state and error handling.

import { template } from "./currency-card-template.js";
import { styles }   from "./currency-card-styles.js";

const ENDPOINT = "https://api.frankfurter.dev/v2/rates?base=USD&quotes=EUR";

class CurrencyCard extends HTMLElement {

  connectedCallback() {
    // Inject scoped styles + markup
    this.innerHTML = styles + template();

    // Cache element references
    this.rateEl   = this.querySelector("[data-rate]");
    this.baseEl   = this.querySelector("[data-base]");
    this.quoteEl  = this.querySelector("[data-quote]");
    this.dateEl   = this.querySelector("[data-date]");
    this.statusEl = this.querySelector("[data-status]");
    this.button   = this.querySelector("button");

    // Wire up the refresh button
    this.button.addEventListener("click", () => this.fetchRate());

    // Initial fetch
    this.fetchRate();
  }

  // ── Fetch ───────────────────────────────────────────────

  async fetchRate() {
    this._setLoading(true);

    try {
      const response = await fetch(ENDPOINT, {
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const data = await response.json();
      this._render(data);

    } catch (error) {
      console.error("[currency-card]", error);
      this._renderError();
    } finally {
      this._setLoading(false);
    }
  }

  // ── Render helpers ───────────────────────────────────────

  _render(data) {
    // data.rates is an object like { "EUR": 0.9234 }
    const rate = data.rates?.EUR;

    if (rate === undefined) {
      this._renderError();
      return;
    }

    // Format the rate to 4 decimal places
    this.rateEl.textContent = rate.toFixed(4);
    this.rateEl.removeAttribute("data-loading");

    this.baseEl.textContent  = data.base  ?? "USD";
    this.quoteEl.textContent = "EUR";
    this.dateEl.textContent = data.meta?.last_updated_at
        ? new Date(data.meta.last_updated_at).toLocaleDateString("en-US", {
          year:  "numeric",
          month: "long",
          day:   "numeric"
        })
      : "Unknown";

    this.statusEl.textContent = "Rate loaded successfully.";
    this.statusEl.removeAttribute("data-error");
  }

  _renderError() {
    this.rateEl.textContent = "—";
    this.rateEl.removeAttribute("data-loading");
    this.statusEl.textContent = "Could not load rate. Try refreshing.";
    this.statusEl.setAttribute("data-error", "true");
  }

  _setLoading(isLoading) {
    this.button.disabled = isLoading;
    this.button.setAttribute("aria-busy", String(isLoading));
    this.button.textContent = isLoading ? "Loading…" : "Refresh";

    if (isLoading) {
      this.rateEl.textContent = "Loading…";
      this.rateEl.setAttribute("data-loading", "true");
      this.statusEl.textContent = "Fetching latest rate…";
      this.statusEl.removeAttribute("data-error");
    }
  }
}

customElements.define("currency-card", CurrencyCard);