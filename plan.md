# Guru Driving School — V2 Award-Winning Redesign Plan

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS (dark cinematic theme)
- Framer Motion (scroll-linked, magnetic, canvas transitions)
- Font: Syne (display) + Inter (body) via Google Fonts

## Color Palette (Dark Cinematic)
- Background: #080808 (near-black)
- Surface: #0f0f0f / #141414
- Border: rgba(255,255,255,0.06)
- Accent: #0055e9 (electric blue)
- Yellow: #ffd500 (high-contrast CTA)
- Text Primary: #f0f0ee
- Text Muted: rgba(255,255,255,0.4)

## Typography Scale
- Hero: Syne, 900 weight, clamp(4rem, 10vw, 9rem), -0.04em tracking
- Section Title: Syne, 800, clamp(2.5rem, 5vw, 5rem)
- Body: Inter, 400/500, 1rem

## Component Architecture
```
src/
  app/
    layout.tsx          — Syne + Inter fonts, dark bg, metadata
    page.tsx            — Orchestrates sections
    globals.css         — Tailwind base, custom utilities
  components/
    Preloader.tsx       — Cinematic counter + shutter (refine existing)
    SiteHeader.tsx      — Floating frosted nav, magnetic CTA
    HeroSection.tsx     — Split text reveal, 3D car, floating stats
    MarqueeTicker.tsx   — Infinite scrolling banner
    CinematicShowroom.tsx — Expanding panel layout (NEW)
    WhyChoose.tsx       — Bento grid with animated stats
    InstructorSection.tsx — Parallax photo + text reveal (refactored)
    PricingPlans.tsx    — Dark card grid, animated on scroll
    ReviewsAndFaq.tsx   — Testimonials + FAQ
    CtaSection.tsx      — Elastic lead form
    SiteFooter.tsx      — Magnetic links, animated grid
```

## Section Build Order
1. globals.css + layout.tsx (design tokens, fonts)
2. SiteHeader (floating, frosted, magnetic buttons, active observer)
3. HeroSection (split text, 3D car, stats)
4. MarqueeTicker (dark variant)
5. CinematicShowroom (expanding columns — NEW section)
6. WhyChoose (bento grid, dark)
7. InstructorSection (parallax dark)
8. PricingPlans (dark cards)
9. ReviewsAndFaq (dark accordion)
10. CtaSection (lead form, dark)
11. SiteFooter (magnetic, dark)
12. Preloader (polish)

## Key Animations
- HeroSection: staggered word reveal (clipPath top→0), y offset
- CinematicShowroom: flex width expand on hover (0.25fr → 1fr)
- Bento cards: 3D tilt on hover (rotateX/Y), scale 1.02
- Magnetic: offset cursor pull on buttons (20px max)
- Scroll-linked: section headers fade+slide via useScroll/useTransform
- Footer links: magnetic hover with elastic return

## Performance Rules
- All images: next/image with priority + WebP
- 3D: lazy loaded via dynamic import
- Fonts: preconnect + display=swap
- Animations: will-change:transform, GPU-composited only
