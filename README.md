# LOTEL — Project README

Short description
- LOTEL: responsive hotel listing/reservation website built with React, TypeScript and Vite. Contains public pages, contact and newsletter UI, and a small component library.

Technologies
- React + TypeScript
- Vite
- Tailwind CSS (utility classes visible in code)
- lucide-react for icons
- Local component library under src/components
- Recommended tooling: Node.js (LTS), npm or yarn, Git

Quick links (routes / pages)
- /                — Home (hero, featured hotels)
- /about           — About
- /features        — Features (optional)
- /pricing         — Pricing (optional)
- /blog            — Blog list
- /blog/:slug      — Blog post
- /docs            — Documentation (optional)
- /contact         — Contact form & info
- /login, /signup  — Auth pages
- /account         — User dashboard
- /admin           — Admin dashboard (optional)
- 404              — Not-found page

Repository layout (important files/folders)
- public/ or static/  — static assets (images, icons, favicon)
- src/
  - components/       — reusable UI components (Header, Footer, Inputs, Buttons)
  - pages/ or routes/  — page-level components
  - styles/           — global styles, tailwind config
  - App.tsx, main.tsx  — application entry
- package.json
- tsconfig.json
- vite.config.ts
- .env.example
- README.md

Prerequisites
- Node.js (LTS recommended — e.g. 18.x or 20.x)
- npm (>= 8) or yarn
- Git

Install locally
1. Clone
   - git clone https://github.com/your-org/your-repo.git
   - cd your-repo
2. Install dependencies
   - npm: npm install
   - yarn: yarn
3. Create env file
   - Copy .env.example to .env and set values:
     - VITE_API_URL=https://api.example.com
     - PORT=5173
     - AUTH_SECRET=your_jwt_secret
     - DATABASE_URL=postgres://user:pass@host:port/db
   - Note: Vite requires client-side env keys to start with VITE_ (e.g. VITE_API_URL)

Common scripts
- npm run dev        — start dev server (Vite). Defaults to http://localhost:5173
- npm run build      — build production files into /dist
- npm run preview    — preview production build locally
- npm run lint       — run ESLint
- npm run format     — run Prettier/formatter
- npm test           — run unit tests

(Example package.json scripts)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 5173",
    "lint": "eslint \"src/**/*.{ts,tsx,js,jsx}\"",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,md}\"",
    "test": "vitest"
  }
}
```

Running on Windows (PowerShell)
- Install: npm install
- Dev: npm run dev
- Build: npm run build
- Preview: npm run preview

Environment variables and secrets
- Keep secrets out of version control. Use .env.local or secret storage for CI.
- Prefix frontend-exposed keys with VITE_ (Vite requirement).
- Example .env.example in repo.

Testing & linting
- Unit tests: Vitest / Jest (project dependent). Run npm test.
- Linting: ESLint (configure with TypeScript support). Run npm run lint.
- Formatting: Prettier. Run npm run format or integrate with CI/pre-commit.

Accessibility & Performance
- Use semantic HTML and ARIA attributes where needed.
- Optimize images (next-gen formats / responsive srcsets).
- Audit with Lighthouse and fix accessibility/performance issues.

Build & deployment
- Static: Netlify, Vercel, GitHub Pages, S3 + CloudFront — build then deploy /dist.
- Server: Deploy Node server or serverless functions to Vercel/Heroku/AWS.
- CI: On push to main, run lint → tests → build → deploy.

CI example (GitHub Actions)
- Lint and test on PR
- Build and deploy on push to main
- Use secrets for production env vars

Database & backend (if applicable)
- Run migrations and seeds (framework-specific)
- Set DATABASE_URL in .env
- Keep backups and use migrations for schema changes

Security & best practices
- Do not commit .env or secrets.
- Use HTTPS in production.
- Run npm audit and keep deps updated.
- Validate & sanitize inputs on server side.

Contributing
- Fork -> branch -> PR with clear description.
- Add tests for new features or bugfixes.
- Follow code style (run format and lint before PR).
- Update changelog or releases.

Troubleshooting (common)
- Port in use: change PORT or kill process
- Missing env: ensure .env exists and required values are present
- Build errors: check Node version and dependency compatibility

License
- Add a LICENSE file (e.g. MIT). Update package.json license field.

Contact & support
- Create GitHub issues for bugs or feature requests.
- For urgent support: supply contact email in repo metadata or organization settings.

Changelog
- Maintain CHANGELOG.md or use GitHub releases to summarize notable changes.

Notes specific to this repo
- Footer component: src/components/Footer.tsx — contains newsletter CTA, contact list, social icons.
- Tailwind utility classes are used extensively; adjust tailwind.config.js for themes and colors.
- Env variables used by client must be prefixed with VITE_.

This README is a curated template. Edit sections to match project-specific scripts, tools, CI settings and deployment targets.
