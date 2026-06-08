# Achal Jain - Portfolio

A modern, responsive developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. The site presents projects, technical skills, certifications, writing, experience, and contact options through a polished dark interface with smooth animations and optimized performance.

[![Live Site](https://img.shields.io/badge/Portfolio-Live%20Site-8b5cf6?style=flat&logo=netlify&logoColor=white&labelColor=111827)](https://achal-jain-portfolio.netlify.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat&logo=next.js&logoColor=white&labelColor=111827)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6?style=flat&logo=typescript&logoColor=white&labelColor=111827)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-06b6d4?style=flat&logo=tailwindcss&logoColor=white&labelColor=111827)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10-ff4d8d?style=flat&logo=framer&logoColor=white&labelColor=111827)](https://www.framer.com/motion/)

## Features

- **Portfolio Sections** - Hero, Skills, Certifications, Projects, Blogs, Experience, and Contact.
- **Interactive Animations** - Mouse-tracking gradient effects, floating particles, and staggered section reveals.
- **Blog Integration** - Automated Medium posts from RSS plus curated Hashnode entries with image-backed cards.
- **Live Tools Dropdown** - Quick links to side projects such as UI Design Patterns and JSON to Sheet.
- **Toast Notifications** - Custom toast system for user feedback instead of native alerts.
- **Accessibility** - Skip-to-content support, focus-visible styles, reduced-motion handling, and ARIA labels.
- **SEO** - JSON-LD structured data, Open Graph and Twitter images, canonical URLs, robots.txt, and sitemap support.
- **Performance** - Self-hosted fonts through `next/font`, optimized particles, and motion values for cursor tracking.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 with App Router and static export |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Typography | Inter, Poppins, Space Grotesk via `next/font` |
| Forms | Formspree |
| Analytics | Google Analytics |
| Hosting | Netlify |
| Images | Cloudinary |

## Project Structure

```text
.
|-- app/
|   |-- globals.css              # Global styles, accessibility, toast, reduced-motion
|   |-- layout.tsx               # Root layout, SEO metadata, JSON-LD, OG image
|   `-- page.tsx                 # Main page assembly
|-- components/
|   |-- Navigation.tsx           # Sticky nav, active section indicator, live tools dropdown
|   |-- HeroSection.tsx          # Animated hero with particles and gradient effect
|   |-- SkillsSection.tsx        # Skill grid
|   |-- SkillCard.tsx            # Individual skill card
|   |-- CertificationsSection.tsx # Certification badges
|   |-- ProjectsSection.tsx      # Project grid
|   |-- ProjectCard.tsx          # Individual project card
|   |-- BlogsSection.tsx         # Blog grid
|   |-- BlogCard.tsx             # Featured and regular blog card variants
|   |-- ExperienceSection.tsx    # Timeline experience and education
|   |-- ContactSection.tsx       # Contact form and social links
|   |-- ScrollProgress.tsx       # Top scroll progress bar
|   |-- ScrollToTop.tsx          # Floating scroll-to-top button
|   |-- Toast.tsx                # Toast notification provider and context
|   `-- TypewriterText.tsx       # Animated typewriter text
|-- data/
|   |-- generated-medium-blogs.ts # Generated Medium RSS blog data
|   `-- portfolio-data.ts        # Portfolio content: projects, skills, links, contact data
|-- scripts/
|   `-- fetch-medium-blogs.mjs   # Fetches Medium RSS posts and updates generated blog data
|-- public/
|   |-- og-image.png             # Open Graph and Twitter Card image
|   |-- robots.txt               # Search engine crawling rules
|   |-- sitemap.xml              # Sitemap for SEO
|   `-- site.webmanifest         # PWA manifest
|-- tailwind.config.js           # Custom colors and theme extensions
|-- tsconfig.json                # TypeScript configuration
|-- next.config.js               # Static export and image configuration
`-- package.json
```

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
git clone https://github.com/Achal13jain/Portfolio.git
cd Portfolio
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for the contact form |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |

## Customization

All portfolio content is centralized in [data/portfolio-data.ts](data/portfolio-data.ts):

- `projects` - Project cards with title, description, tech stack, and links.
- `skillCategories` - Skill grid content with icon and category data.
- `generated-medium-blogs.ts` - Generated Medium posts from the RSS fetch script.
- `hashnodeBlogs` - Curated Hashnode posts maintained manually.
- `certifications` - Certification badges and credential links.
- `experience` and `education` - Timeline entries.
- `socialLinks` - GitHub, LinkedIn, X, Medium, and Hashnode links.
- `contactInfo` - Email and location contact options.

Theme colors can be adjusted in [tailwind.config.js](tailwind.config.js):

```js
colors: {
  navy: { 900: '#0f172a', 950: '#020617' },
  purple: { /* custom shades */ },
  teal: { /* custom shades */ },
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production static export in `out/` |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run blogs:fetch` | Fetch the latest Medium posts and update generated blog data |

## Blog Automation

Medium posts are generated from `https://medium.com/feed/@jainachal38` by [scripts/fetch-medium-blogs.mjs](scripts/fetch-medium-blogs.mjs). The workflow in [.github/workflows/update-medium-blogs.yml](.github/workflows/update-medium-blogs.yml) runs daily and can also be triggered manually from GitHub Actions. It commits changes only when [data/generated-medium-blogs.ts](data/generated-medium-blogs.ts) changes.

## Deployment

The site uses `output: 'export'` in [next.config.js](next.config.js) for static HTML export. Deploy the generated `out/` folder to any static host:

- **Netlify**: Connect the GitHub repository for automatic deploys on push.
- **Vercel**: Connect the GitHub repository for zero-configuration deployment.
- **GitHub Pages**: Publish the generated export to a `gh-pages` branch.

## License

This project is open source under the [MIT License](LICENSE).

---

Built by [Achal Jain](https://achal-jain-portfolio.netlify.app).
