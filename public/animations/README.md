# Animation Assets

This directory contains Lottie animation files used throughout the application. These animations are loaded using `@lottiefiles/react-lottie-player`.

## Required Animation Files

1. `web-dev.json` - Animation for Web Development service
2. `design.json` - Animation for UI/UX Design service
3. `mobile.json` - Animation for Mobile Apps service
4. `ecommerce.json` - Animation for E-commerce service
5. `seo.json` - Animation for SEO service
6. `support.json` - Animation for Maintenance service

## Adding New Animations

1. Create or download a Lottie JSON file
2. Place it in this directory
3. Update the `services` array in `Services.tsx` to include the new animation

## Animation Guidelines

- Keep file sizes under 100KB for optimal performance
- Use colors that match the site's color scheme (amber/orange palette)
- Prefer simple, clean animations that don't distract from content
- Ensure animations are accessible and don't cause motion sickness
