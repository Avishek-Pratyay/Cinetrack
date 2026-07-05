# 🎬 CineTrack

A minimalist, production-ready Movie Watchlist & Review dashboard built with **React**,
**Vite**, and **Tailwind CSS**. Users can manage a dynamic movie collection, toggle
watched status, rate movies, filter and search in real time, and persist everything
locally in the browser.


**Live Demo:** https://cine-track-two-rho.vercel.app/

**Repository:** https://github.com/Avishek-Pratyay/CineTrack

---

## 📋 Assignment Requirements Checklist

Every requirement from the assignment brief is implemented and mapped to source files below.

| # | Requirement | Status | Implementation |
|---|---|---|---|
| 1 | Responsive dashboard grid | ✅ | `MovieGrid.jsx` — 1 / 2 / 3 / 4 column responsive layout |
| 2 | Card shows Title, Genre, Year, Poster | ✅ | `MovieCard.jsx` |
| 3 | "Mark as Watched" toggle | ✅ | `MovieCard.jsx` + `toggleWatched()` in `useMovies.js` |
| 4 | "Delete" action | ✅ | `MovieCard.jsx` + `deleteMovie()` in `useMovies.js` |
| 5 | Add Movie form | ✅ | `AddMovieForm.jsx` |
| 6 | Client-side validation (empty / invalid input) | ✅ | `validate()` in `AddMovieForm.jsx` — required fields, year-range check, poster URL format check |
| 7 | Status filter (Watched / Unwatched) | ✅ | `Controls.jsx` tab control + filter logic in `App.jsx` |
| 8 | Real-time search by title | ✅ | `Controls.jsx` search input + filter logic in `App.jsx` |
| 9 | Simulated async experience with loading spinner/skeleton | ✅ | `useMovies.js` (900ms artificial delay while parsing state) + `SkeletonCard.jsx` |
| 10 | Local/hardcoded data with state persistence | ✅ | `initialMovies.js` (seed data) + full `localStorage` read/write in `useMovies.js` |
| 11 | Minimalist, production-ready UI | ✅ | Custom Tailwind CSS v4 design system |

---

## ✨ Beyond the Brief

A few additions on top of the core spec, to reflect real product/UI thinking rather than
a literal checklist implementation:

- **5-star ratings** on every card (click to set, click again to clear) — extends the
  "Review" half of the assignment's own interface name.
- **Toast notifications** on add / watch-toggle / delete, for immediate visual feedback.
- **Icon system** via `lucide-react` throughout — search, filters, watched state, delete,
  form actions — replacing plain text buttons.
- **Poster hover interaction** — subtle zoom + gradient overlay on hover.
- **Custom visual identity** — a cinema "ticket stub" motif (perforated card edges, dashed
  dividers, marquee-style header) instead of a generic Bootstrap-like layout.

---

## 🧱 Tech Stack

| Layer | Choice |
|---|---|
| Framework | React  |
| Build tool | Vite  |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Icons | lucide-react |
| State management | React `useState` / custom hooks — no external library |
| Persistence | Browser `localStorage` (no backend, per assignment scope) |

---

## 📁 Project Structure

```
cinetrack/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Marquee.jsx          # Header banner with live collection stats
│   │   ├── Controls.jsx         # Search input, status filter tabs, add-movie toggle
│   │   ├── AddMovieForm.jsx     # Validated form for creating new entries
│   │   ├── MovieGrid.jsx        # Responsive grid, loading state, empty state
│   │   ├── MovieCard.jsx        # Individual "ticket stub" movie card
│   │   ├── SkeletonCard.jsx     # Loading placeholder matching card layout
│   │   ├── StarRating.jsx       # Interactive 5-star rating control
│   │   └── ToastStack.jsx       # Toast notification UI
│   ├── hooks/
│   │   ├── useMovies.js         # Movie state, localStorage sync, simulated async load
│   │   └── useToasts.js         # Toast queue management
│   ├── data/
│   │   └── initialMovies.js     # Hardcoded seed data (first-run only)
│   ├── App.jsx                  # Top-level composition and state wiring
│   ├── main.jsx                 # React entry point
│   └── index.css                # Design tokens + global styles
├── index.html
├── package.json
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Avishek-Pratyay/cinetrack.git
cd cinetrack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Vite will start a local server (typically **http://localhost:5173**) — open the printed
URL in your browser. The dev server supports hot module reload, so edits reflect instantly.

### 4. Build for production

```bash
npm run build
```

Generates an optimized build in `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## ☁️ Deployment (Vercel)

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the GitHub repo.
3. Vercel auto-detects the Vite preset:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Vercel provides a live public URL once the build finishes.

---

## 🗃️ Data & State Notes

- On first run, `useMovies` seeds `localStorage` with sample movies from
  `src/data/initialMovies.js`.
- Every add, toggle, rate, or delete action updates React state and is synced back to
  `localStorage` under the key `cinetrack:movies` — so the collection survives page
  refreshes and browser restarts.
- The entire application is client-side only, with no backend, API, or database, in
  line with the assignment's stated scope ("Frontend Only").

---

## 🎨 Design

CineTrack uses a custom cinema-inspired design system rather than default component
library styling:

- **Palette:** charcoal background, cream text, marquee gold accent, teal for
  "watched" states, crimson for destructive actions.
- **Typography:** Bebas Neue (display/headings), Inter (body), JetBrains Mono
  (labels/stats) — evoking marquee signage and ticket stub typography.
- **Signature motif:** movie cards are styled as torn ticket stubs, with perforated
  edge notches and a dashed divider between the poster and the details section.

---

## 👤 Author

**Avishek Chanda Pratyay**
B.Sc. in Computer Science & Engineering, American International University-Bangladesh (AIUB)
