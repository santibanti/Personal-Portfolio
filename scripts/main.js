// scripts/main.js
// Entry point. Imports custom elements so the browser registers them
// before the parser finishes reading the rest of the page.
// Both components self-register via customElements.define() in their
// own files — this module just ensures they are loaded.

import "../components/theme-picker/theme-picker.js";
import "../components/currency-card/currency-card.js";