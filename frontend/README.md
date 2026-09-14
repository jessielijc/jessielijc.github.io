# About page React component

The site remains Jekyll. Its existing components are Liquid files in `_includes/`,
and its global styles are in `_sass/` (entry: `assets/css/main.scss`).
The About page uses a React island bundled with Vite; other pages do not load it.

## Setup and development

React, TypeScript, Tailwind CSS 3.4, and the shadcn-compatible structure have been
configured manually for this existing Jekyll site. Run:

```sh
npm ci
npm run build
docker compose up --build
```

Open http://localhost:8080. Use `npm run build:watch` while editing components.
GitHub Actions runs `npm ci` and `npm run build` before the Jekyll build.
Generated assets in `assets/react/` are intentionally ignored by Git.

## File locations

- `components/ui/`: SplineScene (`splite.tsx`), Spotlight, Card, and adapted demo.
- `components/ui/text-loop.tsx`: reusable animated heading; the About copy is in `text-loop-demo.tsx`.
- `frontend/about.tsx`: mounts the component only when #about-spline exists.
- `frontend/styles.css`: component styles, using existing site's color variables.
- `lib/utils.ts`: shadcn class merging utility.
- `components.json`: shadcn aliases; `@/` resolves to the repository root.

Creating `components/ui/` keeps React components separate from Liquid templates
and makes the supplied imports and future shadcn CLI additions resolve consistently.
Tailwind preflight is disabled and utilities are scoped to #about-spline, protecting
the existing Bootstrap layout. Do not run a fresh shadcn init over this configuration.
For future additions, use `npx shadcn@latest add <component>`, review the diff, and
retain the scoped Tailwind settings. Manual setup reference:
https://ui.shadcn.com/docs/installation/manual
Tailwind configuration reference: https://v3.tailwindcss.com/docs/configuration

## Behavior

Scene URL is in `components/ui/demo.tsx`; SplineScene accepts `scene` and optional
`className`. No context provider or global store is required. The original Spline
asset is used; no stock image is needed. Icons are from lucide-react.
The two-column layout stacks below 768px. Loading is deferred until near the viewport.
Reduced-motion users load the scene explicitly; Pause unloads it. Scene errors have
a retry action. Spotlight listeners are removed correctly and need no fill prop.

Check desktop/mobile, light/dark, pause/reload, failed scene loading, and reduced
motion before publishing. The 3D asset needs access to prod.spline.design and WebGL.
