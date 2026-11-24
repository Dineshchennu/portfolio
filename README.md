# Dinesh Chennu: Portfolio

A single-page application built with React, Vite and React Router, hosted on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```
portfolio/
├── index.html                  Page shell, fonts, no-flash theme script
├── vite.config.js              base: "./" so it works on any GitHub Pages URL
├── .github/workflows/
│   └── deploy.yml              Auto-deploy to GitHub Pages on every push to main
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                Entry point: mounts <App /> into #root
    ├── App.jsx                 Router: all routes, lazy-loaded pages, theme provider
    ├── index.css               Design tokens (light/dark) and all styles
    ├── data/
    │   └── resume.js           ALL your content. Edit text here, not in JSX
    ├── context/
    │   └── ThemeContext.jsx    Dark/light theme shared with the whole app
    ├── hooks/
    │   └── useLocalStorage.js  Custom hook: state that survives a refresh
    ├── utils/
    │   └── splitHighlight.js   Splits "Label: sentence" résumé bullets
    ├── components/             Reusable pieces
    │   ├── Layout.jsx          Navbar + <Outlet /> + Footer
    │   ├── Navbar.jsx          NavLink, mobile menu, theme button
    │   ├── Footer.jsx
    │   ├── Receipt.jsx         The skills "receipt" in the hero
    │   ├── ProjectRow.jsx      One row in a project list
    │   ├── PageHeader.jsx
    │   └── ScrollToTop.jsx     Scrolls to top on route change
    └── pages/                  One file per route
        ├── Home.jsx            /
        ├── About.jsx           /about        (skills, experience, education)
        ├── Projects.jsx        /projects     (filter by technology)
        ├── ProjectDetail.jsx   /projects/:id (e.g. /projects/payrexx)
        ├── Contact.jsx         /contact      (validated form)
        └── NotFound.jsx        any other address
```

## React concepts, and where to find them

| Concept | Where |
|---|---|
| Components and props | `components/`, `PageHeader.jsx` |
| Rendering lists with `map` and `key` | `About.jsx` (nested lists), `Projects.jsx` |
| Conditional rendering | `PageHeader.jsx`, `ProjectDetail.jsx`, `Contact.jsx` |
| `useState` | `Navbar.jsx` (menu), `Projects.jsx` (filter), `Contact.jsx` (form) |
| Controlled forms and validation | `Contact.jsx` |
| `useRef` | `Contact.jsx` (focus first invalid field) |
| `useEffect` | `ThemeContext.jsx`, `ScrollToTop.jsx`, `useLocalStorage.js` |
| `useMemo` | `Projects.jsx` |
| Custom hook | `useLocalStorage.js` |
| Context | `ThemeContext.jsx`, used in `Navbar.jsx` |
| React Router: routes, layout, `Outlet`, `NavLink`, `useParams`, 404 | `App.jsx`, `Layout.jsx`, `Navbar.jsx`, `ProjectDetail.jsx` |
| `React.lazy` and `Suspense` | `App.jsx`, `Layout.jsx` |

## Connect to GitHub and deploy

1. Create an empty repository on GitHub (for example `portfolio`). Don't add a README there.
2. In this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

3. Choose **one** way to deploy.

   **Option A: GitHub Actions (recommended, automatic).**
   In the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. Every push to `main` now rebuilds and publishes the site. Watch progress in the **Actions** tab.

   **Option B: manual, with the `gh-pages` package.**
   ```bash
   npm run deploy
   ```
   Then go to **Settings → Pages**, set the source to **Deploy from a branch**, and pick the `gh-pages` branch and `/ (root)`.

4. Your site will be at `https://<your-username>.github.io/portfolio/`.

### Why `HashRouter`?

GitHub Pages only serves files and cannot route `/projects/payrexx` to your app, so a refresh on that address would show a 404. `HashRouter` puts the route after a `#` (`/#/projects/payrexx`), which the browser never sends to the server, so refreshes and shared links always work.

If you later add a custom domain and want clean URLs, switch to `BrowserRouter` and add a `404.html` fallback that redirects to `index.html`.

## Editing your content

Everything on the site comes from `src/data/resume.js`: profile, skills, experience, projects, education. Change the text there and the pages update.

The About page and the footer show your phone number and email publicly. If you don't want that, remove those lines from `About.jsx`, `Contact.jsx` and `resume.js`.
