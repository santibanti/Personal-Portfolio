// Custom element that renders a theme switcher dropdown.
// Switches themes by setting data-theme on <html>.
// Persists the user's choice in localStorage.

import { template } from "./theme-picker-template.js";
import { styles }   from "./theme-picker-styles.js";

const STORAGE_KEY = "sg-theme";
const DEFAULT_THEME = "default";

class ThemePicker extends HTMLElement {

  connectedCallback() {
    // Inject scoped styles + markup
    this.innerHTML = styles + template();

    // Cache references
    this.toggle = this.querySelector(".theme-picker__toggle");
    this.menu   = this.querySelector(".theme-picker__menu");
    this.options = this.querySelectorAll("[data-theme-value]");

    // Apply the stored theme (or default) on load
    const saved = localStorage.getItem(STORAGE_KEY) ?? DEFAULT_THEME;
    this._applyTheme(saved, false);

    // Wire up events
    this.toggle.addEventListener("click", () => this._toggleMenu());

    this.options.forEach(option => {
      option.setAttribute("tabindex", "0");
      option.addEventListener("click",   () => this._selectTheme(option));
      option.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this._selectTheme(option);
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) this._closeMenu();
    });

    // Close menu on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this._closeMenu();
    });
  }

  // ── Private helpers ─────────────────────────────────────

  _toggleMenu() {
    const isOpen = this.menu.hidden === false;
    isOpen ? this._closeMenu() : this._openMenu();
  }

  _openMenu() {
    this.menu.hidden = false;
    this.toggle.setAttribute("aria-expanded", "true");
    // Focus the currently selected option
    const selected = this.menu.querySelector("[aria-selected='true']");
    (selected ?? this.menu.querySelector("li")).focus();
  }

  _closeMenu() {
    this.menu.hidden = true;
    this.toggle.setAttribute("aria-expanded", "false");
  }

  _selectTheme(option) {
    const theme = option.dataset.themeValue;
    this._applyTheme(theme, true);
    this._closeMenu();
    this.toggle.focus();
  }

  _applyTheme(theme, save) {
    // Briefly add a class that enables transitions across all elements
    document.body.classList.add("theme-transitioning");
    setTimeout(() => document.body.classList.remove("theme-transitioning"), 300);

    // Set the data-theme attribute on <html>
    document.documentElement.setAttribute("data-theme", theme);

    // Update aria-selected on all options
    this.options.forEach(opt => {
      opt.setAttribute(
        "aria-selected",
        String(opt.dataset.themeValue === theme)
      );
    });

    // Persist
    if (save) localStorage.setItem(STORAGE_KEY, theme);
  }
}

customElements.define("theme-picker", ThemePicker);