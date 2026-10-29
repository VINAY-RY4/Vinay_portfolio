# Vinay R Y — Portfolio Website

A modern, animated, fully responsive developer portfolio built with React + Vite.

## Tech stack

- React 18 + Vite
- Plain CSS (CSS variables, Grid & Flexbox) — no Tailwind
- Framer Motion for animations
- React Icons

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Customize

- **Resume**: replace `public/resume.pdf` with your real resume (same filename, or update the
  links in `src/components/Navbar/Navbar.jsx` and `src/components/Hero/Hero.jsx`).
- **Contact info**: edit `src/components/Contact/Contact.jsx` (phone / email / location / socials).
- **Social links**: GitHub / LinkedIn URLs live in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`.
- **Projects**: edit the `PROJECTS` array in `src/components/Projects/Projects.jsx`. Each project has a gradient + emoji cover; replace the `demo` and `code` links with your real repos.
- **Profile picture**: drop your photo in `public/` (e.g. `profile.jpg`) and change the path in `src/data/profile.js`. It shows in the Hero card and the About section.
- **Colors / theme**: all design tokens (colors, fonts, radii) live in `src/index.css` under `:root`
  and `[data-theme='dark']`.
- **Dark mode**: the selected theme is persisted to `localStorage` under the key `portfolio-theme`.

## Folder structure

```
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Experience/
│   ├── Projects/
│   ├── Services/
│   ├── Education/
│   ├── Certifications/
│   ├── Contact/
│   ├── Footer/
│   ├── AnimatedCounter/
│   ├── Loader/
│   ├── ScrollProgress/
│   └── ScrollToTop/
├── context/ThemeContext.jsx
├── hooks/useTypewriter.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Notes

- The contact form validates client-side and simulates a send (no backend attached). Wire it up to
  a service like Formspree, EmailJS, or your own API by replacing the `handleSubmit` logic in
  `Contact.jsx`.
- Icons render via `react-icons` (Feather, Font Awesome, and Simple Icons sets) — no image assets
  required for the tech icons.
