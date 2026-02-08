# Export & Import Business Consulting Website

## Overview
A React + Vite single-page website for an export/import business consulting firm operating in Italy and Europe. Built with TypeScript, Tailwind CSS v4, and various UI libraries (Radix UI, MUI, Recharts).

## Project Architecture
- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` plugin
- **UI Libraries**: Radix UI primitives, MUI components, Lucide icons
- **Language**: TypeScript
- **Entry**: `src/main.tsx` → `src/app/App.tsx`
- **Components**: `src/app/components/`
- **Styles**: `src/styles/`
- **Static Assets**: `public/`

## Key Files
- `vite.config.ts` - Vite config (dev server on 0.0.0.0:5000, allowedHosts enabled)
- `package.json` - Dependencies and scripts
- `index.html` - HTML entry point

## Development
- Dev server: `npm run dev` (port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Deployment
- Static deployment, build with `npm run build`, serve `dist/` directory

## User Preferences
- Compact, premium, business-focused design aesthetic
- Language flags directly visible on navbar (no dropdowns)
- Stats should be small, interactive, and elegant (not large card layouts)
- Reduced padding and spacing throughout for a tighter, cleaner look
- Animated interactions preferred (counters, hover effects)

## Recent Changes
- 2026-02-08: Initial Replit setup - configured Vite for port 5000, installed react/react-dom as direct dependencies, added .gitignore
- 2026-02-08: UI redesign - language switcher to inline flags, stats section with animated counters, tightened all section layouts, polished Value/Services/Hero/Contact/TrustBadges/Footer for premium business look
