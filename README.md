# Achal Jain — Portfolio

A modern, responsive portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features a dark navy theme with purple-teal gradient accents, smooth animations, and optimized performance.

[![Live Demo](https://img.shields.io/badge/Live-Demo-a855f7?style=for-the-badge&logo=netlify&logoColor=white)](https://achal-jain-portfolio.netlify.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-000?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

## ✨ Features

- **7 Sections** — Hero, Skills, Certifications, Projects, Blogs, Experience, Contact
- **Interactive Animations** — Mouse-tracking gradient orb, floating particles, staggered reveals
- **Blog Integration** — Dynamic cards for Medium and Hashnode posts with Cloudinary-hosted images
- **Live Tools Dropdown** — Quick links to side projects (UI Design Patterns, JSON to Sheet)
- **Toast Notifications** — Custom toast system replacing native alerts
- **Accessibility** — Skip-to-content, focus-visible styles, `prefers-reduced-motion`, ARIA labels
- **SEO** — JSON-LD structured data, OG/Twitter images, canonical URLs, robots.txt, sitemap
- **Performance** — Self-hosted fonts via `next/font`, optimized particles, `useMotionValue` mouse tracking

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router, Static Export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Typography | Inter, Poppins, Space Grotesk (via `next/font`) |
| Forms | Formspree |
| Analytics | Google Analytics |
| Hosting | Netlify |
| Images | Cloudinary |

## 📁 Project Structure

```
├── app/
│   ├── globals.css              # Global styles, focus/a11y, toast, reduced-motion
│   ├── layout.tsx               # Root layout, SEO metadata, JSON-LD, OG image
│   └── page.tsx                 # Main page — assembles all sections
├── components/
│   ├── Navigation.tsx           # Sticky nav, active section indicator, Live Tools dropdown
│   ├── HeroSection.tsx          # Animated hero with particles + gradient orb
│   ├── SkillsSection.tsx        # Skill grid (delegates to SkillCard)
│   ├── SkillCard.tsx            # Individual skill card with spotlight hover
│   ├── CertificationsSection.tsx # Certification badges
│   ├── ProjectsSection.tsx      # Project grid (delegates to ProjectCard)
│   ├── ProjectCard.tsx          # Individual project card with spotlight hover
│   ├── BlogsSection.tsx         # Blog grid (delegates to BlogCard)
│   ├── BlogCard.tsx             # Featured + Regular blog card variants
│   ├── ExperienceSection.tsx    # Timeline experience + education
│   ├── ContactSection.tsx       # Contact form (Formspree) + social links
│   ├── ScrollProgress.tsx       # Top scroll progress bar
│   ├── ScrollToTop.tsx          # Floating scroll-to-top button
│   ├── Toast.tsx                # Toast notification provider + context
│   └── TypewriterText.tsx       # Animated typewriter text
├── data/
│   └── portfolio-data.ts        # All content: projects, skills, social links, etc.
├── public/
│   ├── og-image.png             # Open Graph / Twitter Card image
│   ├── robots.txt               # Search engine crawling rules
│   ├── sitemap.xml              # Sitemap for SEO
│   └── site.webmanifest         # PWA manifest
├── tailwind.config.js           # Custom colors (navy, purple, teal)
├── tsconfig.json                # TypeScript (es2017, esnext)
├── next.config.js               # Static export, Cloudinary image domain
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/Achal13jain/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your Formspree ID and GA tracking ID

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for contact form |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |

## 🎨 Customization

### Content

All portfolio content is centralized in [`data/portfolio-data.ts`](data/portfolio-data.ts):

- `projects` — Project cards with title, description, tech stack, links
- `skillCategories` — Skill grid with icon and category
- `blogs` — Blog posts from Medium/Hashnode
- `certifications` — Certification badges
- `experience` / `education` — Timeline entries
- `socialLinks` — GitHub, LinkedIn, Twitter, Medium, Hashnode
- `contactInfo` — Email, phone, location

### Colors

Edit `tailwind.config.js` to change the theme:
```js
colors: {
  navy: { 900: '#0f172a', 950: '#020617' },
  purple: { /* your shades */ },
  teal: { /* your shades */ },
}
```

## 📦 Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build (static export to `out/`) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🚀 Deployment

The site uses `output: 'export'` in `next.config.js` for static HTML export. Deploy the `out/` folder to any static host:

- **Netlify**: Connect GitHub repo → auto-deploys on push
- **Vercel**: Connect GitHub repo → zero-config deployment
- **GitHub Pages**: Push `out/` to `gh-pages` branch

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

Built with ❤️ by [Achal Jain](https://achal-jain-portfolio.netlify.app)
