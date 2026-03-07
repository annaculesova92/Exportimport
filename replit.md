# Export & Import Business Consulting Website

## Overview
A React + Vite single-page website for Anna's solo export/import business consulting firm in Verona, Italy. Specializing in wine, olive oil, food products, jewelry, and luxury goods from Italy. Built with TypeScript, Tailwind CSS v4, and various UI libraries (Radix UI, MUI, Recharts).

## Project Architecture
- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` plugin
- **UI Libraries**: Radix UI primitives, MUI components, Lucide icons
- **Language**: TypeScript
- **Entry**: `src/main.tsx` → `src/app/App.tsx`
- **Components**: `src/app/components/`
- **Styles**: `src/styles/`
- **Static Assets**: `public/`
- **Translations**: `src/app/contexts/LanguageContext.tsx` (RU, EN, FR, IT)

## Key Files
- `vite.config.ts` - Vite config (dev server on 0.0.0.0:5000, allowedHosts enabled)
- `package.json` - Dependencies and scripts
- `index.html` - HTML entry point

## Site Structure (sections in order)
1. **HeroSection** - Main hero with title, subtitle, product-specific description (wine, olive oil, tomatoes, jewelry)
2. **SpecializationSection** - "Niches I specialize in" — 4 product cards: Wine & Oil, Food, Jewelry, Luxury Goods
3. **WhoWeWorkWithSection** - 3 audience cards with product-specific descriptions (Distributors, Small Business, Investors)
4. **ValueSection** - "Why choose us" — 4 cards: Direct contacts with producers, Certification & excise knowledge, EU customs experience, Personal support
5. **ServicesSection** - Expert Consultation highlighted as key service, plus 6 regular service cards
6. **ProcessSection** - 4 steps: Expert Audit & Brief, Supplier Selection & Verification, Contract & Compliance, Delivery & Support
7. **TeamSection** - "About me" — Anna's profile with photo, bio, experience, social links
8. **ContactSection** - Contact form and info
9. **Footer** - Anna tagline "Expert in foreign trade. Export of food and wine"

## Contact Info (Anna)
- WhatsApp: +393245436954
- Email: anna.culesova@gmail.com
- LinkedIn: https://www.linkedin.com/in/anna-culesova-7955ab26a/
- Instagram business: @boutiquebusiness.consulting
- Instagram personal: @anny_in_italy

## Development
- Dev server: `npm run dev` (port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Deployment
- Static deployment, build with `npm run build`, serve `dist/` directory

## User Preferences
- Premium, business-focused design aesthetic with breathing room
- Language switcher as dropdown on navbar (flag + current lang + chevron, click to expand)
- Hero section spacious with floating thematic icons (Globe, Ship, TrendingUp)
- Contact section: compact with form + social icons (Instagram, LinkedIn, Email)
- Animated interactions preferred (counters, hover effects, floating elements)
- White/teal-emerald/gold color palette
- Solo business (Anna only, no team references)

## Gallery Images
- `public/gallery-wine.jpg` - Italian wine/vineyard
- `public/gallery-oil.jpg` - Italian olive oil
- `public/gallery-food.jpg` - Italian food/tomatoes
- `public/gallery-jewelry.jpg` - Italian jewelry
- `public/gallery-luxury.jpg` - Italian luxury goods

## Recent Changes
- 2026-03-07: Smooth section transitions and gallery:
  - Hero restored to spacious layout (min-h-88vh), gradient fade to dark specialization section
  - SpecializationSection: added photo gallery (5 stock images) with auto-rotation, thumbnail strip, side-by-side layout with cards
  - All sections now use gradient backgrounds that blend into each other (no sharp edges)
  - Gradient overlays: hero → dark specialization (teal-900 gradient), specialization → white (bottom gradient), sections use from/to slate-50 blending
- 2026-03-07: Major content overhaul across all 4 languages:
  - Hero description: now lists specific products (wine, olive oil, tomatoes, jewelry)
  - SpecializationSection: renamed to "Niches I specialize in" with 4 product cards (Wine & Oil, Food, Jewelry, Luxury Goods)
  - WhoWeWorkWithSection: descriptions updated with product specifics (wineries, olive oil, food)
  - WhyThisWorksSection: removed entirely
  - ValueSection: replaced with 4 specific advantages (direct contacts, certification knowledge, EU customs, personal support)
  - ServicesSection: Expert Consultation added as highlighted key service
  - ProcessSection: 4 steps rewritten with product-specific details (audit, supplier verification, compliance/excise, delivery)
  - Footer: Anna tagline added ("Expert in foreign trade. Export of food and wine"), "Business Developer" removed
  - index.html meta description updated
