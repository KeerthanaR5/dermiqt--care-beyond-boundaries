# DERMIQT — Care Beyond Boundaries

An interactive, multi-archetype digital brand experience and e-commerce showcase engineered with React 19, TypeScript, Tailwind CSS v4, and Vite.

The project demonstrates four distinct design systems applied to the same core botanical skincare catalog, featuring live cart state, interactive dot grid cursor tracking, swipeable product galleries, clinical protocol sheets, and an interactive hydration monitor.

---

## Live Deployment (GitHub Pages)

This project includes a production-ready GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and publishes the site to GitHub Pages on every push to the `main` branch.

### How to Deploy to Your GitHub Account

1. **Create a new repository on GitHub**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Set the repository name to `dermiqt--care-beyond-boundaries` (or your preferred name).
   - Keep it **Public** (required for free GitHub Pages).
   - Do **not** initialize with README, .gitignore, or license (these are already included).

2. **Push your local repository**:
   Open a terminal in the project folder and run:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/dermiqt--care-beyond-boundaries.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - On GitHub, navigate to **Settings** > **Pages** in your repository.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - The deployment workflow will trigger automatically on your push. Within 1-2 minutes, your live site will be accessible at:
     ```
     https://<YOUR-USERNAME>.github.io/dermiqt--care-beyond-boundaries/
     ```

---

## Design System Archetypes

The application lets users switch seamlessly between four distinct design archetypes via the bottom floating switcher or side-by-side comparator modal:

- **Editorial**: Warm earthy palette (`#291A14` / `#FAF6F0`), classic serif typography (*Instrument Serif*), organic curves, and magazine-style bento layouts.
- **Cyber (Futuristic)**: Deep cosmic space palette (`#070913` / `#00F0FF`), monospace data streams, live telemetry readouts, and holographic neon accents.
- **Minimal**: Swiss typographic discipline, stark monochromatic contrast (`#111827` / `#FFFFFF`), clean geometric grids, and refined hairline rules.
- **Creative**: Neo-brutalist styling with bold borders, bright sunflower and cobalt accent fills, high-contrast badges, and tactile drop shadows.

---

## Interactive Features

- **Draggable "Shop Now" Badge**: Smooth pointer-drag floating badge that can be positioned anywhere across the viewport without restricting user interactions.
- **Interactive Dot Grid**: Responsive cursor spotlight with dynamic particle density that responds to pointer movement.
- **Cart & Bag Drawer**: Starts empty for new visitors. Supports real-time quantity adjustments, promotional coupon codes (`SPRING29`, `ORGANIC15`), free shipping threshold calculation, and order checkout simulation.
- **Touch-Friendly Product Cards**: Multi-image product carousels with smooth swipe and thumbnail previews.
- **Clinical Hydration Simulator**: Switchable 7, 14, and 30-day trans-epidermal water loss (TEWL) and barrier recovery metrics.
- **Protocol Sheet Modal**: Deep-dive active ingredient profiles and clinical methodology sheets for each formulation.

---

## Quick Launch Options

### Option 1: 1-Click Launch (Direct Offline Execution)
No terminal or development environment required:
- **Windows**: Double-click **`open.bat`** or simply double-click **`index.html`** in this folder.
- **macOS / Linux**: Open **`index.html`** in any modern web browser.

The page automatically resolves the bundled single-file build (`dist/index.html`) with inlined assets and styles.

---

### Option 2: Running the Vite Development Server
For local development with Hot Module Replacement (HMR):

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local server**:
   - On Windows: Double-click **`start.bat`**, or run:
     ```bash
     npm run dev -- --open
     ```
   - The dev server runs at `http://localhost:5173`.

3. **Type Checking & Linting**:
   ```bash
   npm run lint
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```
   Generates optimized static output in the `dist/` directory.

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## Project Architecture

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   └── assets/
│       └── images/             # High-resolution botanical product imagery
├── src/
│   ├── assets/images/          # Bundled photography assets
│   ├── components/
│   │   ├── views/              # The 4 Archetype Views (Editorial, Futuristic, Minimal, Creative)
│   │   ├── ArchetypeComparatorModal.tsx  # Side-by-side design system comparison modal
│   │   ├── CartDrawer.tsx      # Shopping bag drawer with coupon & quantity state
│   │   ├── DraggableShopNow.tsx# Viewport-draggable floating shop trigger
│   │   ├── FloatingViewSwitcher.tsx      # Bottom docked archetype switcher
│   │   ├── Header.tsx          # Responsive multi-archetype navigation header
│   │   ├── InteractiveDotGrid.tsx        # Cursor-following canvas dot grid
│   │   ├── ProtocolModal.tsx   # Clinical sheet modal for active formulations
│   │   ├── SwipeableCarousel.tsx         # Touch and arrow product carousel
│   │   └── SwipeableProductCard.tsx      # Individual product showcase card
│   ├── data/
│   │   └── mockData.ts         # Products, clinical datasets, and formulations
│   ├── App.tsx                 # Root application controller and global state
│   ├── index.css               # Tailwind CSS v4 tokens and animation utilities
│   ├── main.tsx                # React 19 entry point
│   └── types.ts                # TypeScript interfaces and domain models
├── dist/                       # Production bundle (single-file offline distribution)
├── index.html                  # Root HTML entry point with offline redirection
├── package.json                # Project dependencies and npm scripts
├── open.bat                    # Windows 1-click runner
├── start.bat                   # Windows 1-click dev server runner
├── preview.bat                 # Windows 1-click production preview
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite configuration with relative base and singlefile plugin
```

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Vite 8**
- **Lucide React**
- **Motion**
- **Canvas Confetti**

---

## License

MIT © DERMIQT Studio
