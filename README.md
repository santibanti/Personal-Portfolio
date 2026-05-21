# Santiago Guerrero — Personal Site

A personal website built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. The site serves as a professional landing page and a demonstration of modern web platform fundamentals.

**Live site:** [your-deployed-url.pages.dev](https://your-deployed-url.pages.dev)

---

## Pages

| Route | Description |
|---|---|
| `/` | Home and about page |
| `/resume.html` | Résumé as a routed page, with PDF download |
| `/projects.html` | Project cards and live currency widget |
| `/contact.html` | Working contact form via Formspree |

---

## Project Structure

```
my-site/
│
├── index.html               # Home / about
├── resume.html              # Résumé page
├── projects.html            # Projects + currency widget
├── contact.html             # Contact form
│
├── style.css                # Single stylesheet — base styles + all 5 themes
│
├── scripts/
│   └── main.js              # Entry point — imports and registers custom elements
│
├── components/
│   ├── theme-picker/        # Theme switcher custom element
│   │   ├── theme-picker.js
│   │   ├── theme-picker-styles.js
│   │   └── theme-picker-template.js
│   └── currency-card/       # Live USD → EUR rate custom element
│       ├── currency-card.js
│       ├── currency-card-styles.js
│       └── currency-card-template.js
│
├── assets/
│   └── santiago-guerrero-resume.pdf
│
└── README.md
```

---

## Features

**Five color themes** — Default, Goenka, Rose, Grimoire, and Ocean. Selected via the theme picker in the navigation bar. The choice persists across pages and sessions via `localStorage`. Themes are implemented entirely in CSS using custom properties on the `[data-theme]` attribute — JavaScript only switches the attribute.

**Live currency widget** — The projects page includes a `<currency-card>` custom element that fetches the current USD → EUR exchange rate from the [Frankfurter API](https://www.frankfurter.app/) (European Central Bank data). It handles loading state, error state, and includes a manual refresh button. The page remains fully usable with JavaScript disabled — a `<noscript>` fallback links to the data source directly.

**Working contact form** — Powered by [Formspree](https://formspree.io). The form submits without JavaScript via a standard POST request. Native HTML5 validation (`required`, `type="email"`) runs before any scripting. A honeypot field provides basic bot protection.

**Progressive enhancement throughout** — every page is fully readable and navigable with JavaScript disabled. Custom elements degrade silently to nothing; the theme defaults to `default`; the form still submits.

**Semantic HTML5** — every page uses elements for what they mean: `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`, `<dl>`, `<time>`, `<abbr>`. No `<div>` or `<span>` used where a meaningful element exists.

**Accessible** — keyboard navigable throughout, ARIA attributes on interactive elements, `aria-live` regions for dynamic content, `aria-current="page"` on active nav links, color contrast meeting WCAG AA across all themes.

---

## How to Run Locally

No build step required. The site is plain HTML, CSS, and ES modules.

Because ES modules require a server context (browsers block `import` statements on `file://` URLs), you need a local HTTP server. The simplest options:

**Using the VS Code Live Server extension:**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → `Open with Live Server`

**Using Python (any machine with Python 3):**
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Using Node.js:**
```bash
npx serve .
```

---

## Deployment

The site is deployed on **GitHub Pages** direct from this repository.

To deploy your own copy:

1. Push the repository to GitHub as a public repo
2. Go to **Settings → Pages**
3. Under **Source** select **Deploy from a branch**
4. Set branch to `main`, folder to `/ (root)`
5. Click **Save**

GitHub Pages will deploy automatically on every push to `main`.

---

## Technologies

| Concern | Approach |
|---|---|
| Markup | Semantic HTML5, validated |
| Styling | Vanilla CSS — custom properties, grid, flexbox, `clamp()` |
| Scripting | Vanilla ES modules, Web Components API |
| API | [Frankfurter](https://www.frankfurter.app/) — no key required |
| Forms | [Formspree](https://formspree.io) — works without JavaScript |
| Hosting | Github Pages |
| Version control | Git / GitHub |

---

## License

MIT — feel free to use this as a template for your own personal site.