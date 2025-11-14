# LOTEL — Modern Hotel Listing & Reservation UI

A responsive hotel discovery and reservation front‑end built with React, TypeScript, and Vite. It features a polished UI, newsletter signup, contact page, reusable components, and a Tailwind-powered design system.

<p align="center">
  <a href="https://react.dev"><img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white"></a>
  <a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white"></a>
  <a href="https://vitejs.dev"><img alt="Vite" src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white"></a>
  <a href="https://tailwindcss.com"><img alt="Tailwind" src="https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white"></a>
  <a href="https://lucide.dev"><img alt="Lucide" src="https://img.shields.io/badge/lucide--react-Icons-000000?logo=lucide&logoColor=white"></a>
</p>

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Scripts](#development-scripts)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Development Workflow](#development-workflow)
- [Accessibility & Performance](#accessibility--performance)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)

---

## Features
- Responsive UI with modern layout and theming.
- Reusable components (navigation, hero, footer, inputs, buttons).
- Newsletter CTA with email capture UI.
- Contact page with form and toast feedback.
- Basic pages: Home, About, Support, Contact, Not Found.
- Clean, utility-first styling via Tailwind CSS.

## Tech Stack
- `React` + `TypeScript`
- `Vite` for dev/build tooling
- `Tailwind CSS` for styling
- `lucide-react` for icons
- Local component library under `src/components/ui`

## Getting Started

### Prerequisites
- `Node.js` LTS (18.x or 20.x recommended)
- `npm` (>= 8) or `yarn`
- Git

### Installation
```bash
# Clone and enter the project
git clone <repo-url>
cd lotel_app

# Install dependencies
npm install
# or
yarn
```

### Development Scripts
```bash
# Start dev server (Vite) — http://localhost:5173
npm run dev

# Build production assets into /dist
npm run build

# Preview the production build locally
npm run preview

# Lint source files
npm run lint

# Format code (if configured)
npm run format

# Run unit tests (if configured)
npm test
```

## Environment Variables
Create a `.env` file in the project root (copy from `.env.example` if available). Values exposed to the client must be prefixed with `VITE_`.

```env
# Example
VITE_API_URL=https://api.example.com
PORT=5173
AUTH_SECRET=your_jwt_secret
DATABASE_URL=postgres://user:pass@host:port/db
```

> Note: Only variables prefixed with `VITE_` are accessible in the browser when using Vite.

## Project Structure
```text
f:/lotel_app
├── public/
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── SearchForm.tsx
│   │   └── ui/            # Reusable UI primitives (input, button, etc.)
│   ├── hooks/
│   ├── pages/             # Page-level components (Home, About, Contact, ...)
│   ├── index.css          # Global styles / Tailwind layers
│   ├── main.tsx           # App entry
│   └── lib/utils.ts
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig*.json
└── vite.config.ts
```

## Routes
```text
/                Home
/about           About
/contact         Contact form & info
/support         Support/FAQs
/get-app         Get the App (CTA)
/404             Not-found page
```

## Development Workflow
- Use feature branches for new work; keep PRs focused and small.
- Lint and format before committing: `npm run lint` and `npm run format`.
- Prefer typed props and clear component interfaces.
- Keep UI consistent with Tailwind utility classes and existing patterns.

## Accessibility & Performance
- Use semantic HTML; include ARIA attributes when appropriate.
- Optimize images and prefer next-gen formats.
- Validate with Lighthouse and fix accessibility/performance issues.

## Deployment
- Static hosting (Netlify, Vercel, GitHub Pages): build with `npm run build`, deploy the `dist/` folder.
- Server deployments: serve the built assets via a Node server or your platform of choice.

## Contributing
- Fork → branch → PR with a clear description.
- Add tests for new features or bug fixes where applicable.
- Run `npm run lint` and `npm run format` before submitting.

## Troubleshooting
- Port in use: change `PORT` env or stop the existing process.
- Missing env: ensure `.env` exists and required values are set.
- Build errors: verify Node version and dependency compatibility.

---

This README is optimized for GitHub: clear sections, table of contents, formatted code blocks, and links to major technologies. Adjust to match organization standards or CI/CD setup as needed.
