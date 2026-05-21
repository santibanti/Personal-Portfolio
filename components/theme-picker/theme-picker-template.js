// Returns the inner HTML string for the theme-picker component.

export const template = () => `
  <button
    class="theme-picker__toggle"
    aria-haspopup="listbox"
    aria-expanded="false"
    aria-label="Change color theme"
    type="button"
  >
    <span class="theme-picker__swatch" aria-hidden="true"></span>
    <span class="theme-picker__label">Theme</span>
    <span class="theme-picker__chevron" aria-hidden="true">&#9660;</span>
  </button>

  <ul
    class="theme-picker__menu"
    role="listbox"
    aria-label="Color themes"
    hidden
  >
    <li role="option" data-theme-value="default"  aria-selected="false">Default</li>
    <li role="option" data-theme-value="goenka"   aria-selected="false">Goenka</li>
    <li role="option" data-theme-value="rose"     aria-selected="false">Rose</li>
    <li role="option" data-theme-value="grimoire" aria-selected="false">Grimoire</li>
    <li role="option" data-theme-value="ocean"    aria-selected="false">Ocean</li>
  </ul>
`;