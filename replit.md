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
- Premium, business-focused design aesthetic with breathing room
- Language switcher as dropdown on navbar (flag + current lang + chevron, click to expand)
- Hero section spacious with floating thematic icons (Globe, Ship, TrendingUp)
- Stats should be small, interactive, and elegant (not large card layouts)
- Contact section: compact with form + social icons (Instagram, LinkedIn, Email)
- Animated interactions preferred (counters, hover effects, floating elements)

## Recent Changes
- 2026-02-08: Initial Replit setup - configured Vite for port 5000, installed react/react-dom as direct dependencies, added .gitignore
- 2026-02-08: UI redesign - language switcher to inline flags, stats section with animated counters, tightened all section layouts, polished Value/Services/Hero/Contact/TrustBadges/Footer for premium business look
- 2026-02-08: Language switcher changed to dropdown, Hero redesigned with spacious layout and floating thematic icons, Contact section completely redesigned with form + Instagram/LinkedIn/Email links
- 2026-02-08: Major UI enhancement pass:
  - ValueSection: hover changes card bg to dark teal gradient, icon turns yellow with spring animation
  - TrustBadges: completely redesigned with dark gradient background, centered card layout, yellow hover icons, subtle dot pattern
  - ContactSection: modern two-column layout - clean white form left, dark teal card with social links right, location/hours cards below
  - ServicesSection: improved hover effects with color-changing icon containers (teal bg to gradient)
  - AppContent: cleaned up floating buttons (removed redundant mobile CTA)
  - Navigation: language switcher always visible next to hamburger on mobile
- 2026-02-08: Added two new sections after SpecializationSection:
  - WhoWeWorkWithSection: 3 audience cards (Distributors, Small Business, Investors) with gradient hover effects, floating animations, numbered cards
  - WhyThisWorksSection: dark-themed tab interface showing value propositions for each audience type with bullet points
  - Full translations in all 4 languages (RU, EN, FR, IT)
  - Location updated to Verona across all translations
