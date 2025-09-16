# Achal Jain Portfolio

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features a unique dark navy theme with purple-teal gradient accents, smooth animations, and innovative layouts.

## 🚀 Features

- **Modern Design**: Dark navy background with purple-teal gradient theme
- **Unique Layouts**: Circular skill arrangement, asymmetric project cards, timeline experience
- **Advanced Animations**: Mouse tracking, particle effects, smooth transitions using Framer Motion
- **Responsive**: Mobile-first design with perfect scaling across all devices
- **Performance**: Optimized Next.js 14 with fast loading and smooth interactions
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **SEO Optimized**: Meta tags, structured data, and social media optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter, Poppins, Space Grotesk fonts
- **Language**: TypeScript

## 📁 Project Structure

```
achal-portfolio/
├── app/
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.tsx           # Root layout with SEO optimization
│   └── page.tsx            # Main page component
├── components/
│   ├── Navigation.tsx       # Sticky navigation with smooth scroll
│   ├── HeroSection.tsx     # Interactive hero with particle animations
│   ├── SkillsSection.tsx   # Circular skill grid with hover effects
│   ├── ProjectsSection.tsx # Asymmetric project cards
│   ├── ExperienceSection.tsx # Timeline-based experience
│   └── ContactSection.tsx  # Contact form with validation
├── public/
│   └── Achal_Jain_Resume.pdf # Resume file for download
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Custom Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── postcss.config.js      # PostCSS configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- VS Code (recommended)

### Installation

1. **Extract the project files**
   ```bash
   # Extract the zip file to your desired location
   # Navigate to the project directory
   cd achal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your resume**
   - Place your resume PDF file in the `public/` folder
   - Name it `Achal_Jain_Resume.pdf` (or update the filename in components)

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   - Visit `http://localhost:3000`
   - Your portfolio should load with full animations and styling

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  // Custom your colors here
  purple: { /* your purple shades */ },
  teal: { /* your teal shades */ },
  navy: { /* your navy shades */ },
}
```

### Content
Update the following files with your information:
- `components/HeroSection.tsx` - Name, title, tagline
- `components/SkillsSection.tsx` - Skills and technologies
- `components/ProjectsSection.tsx` - Project details and links
- `components/ExperienceSection.tsx` - Work experience and education
- `components/ContactSection.tsx` - Contact information and social links

### Fonts
Change fonts in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Export static files:
   ```bash
   npm run start
   ```

## 🎭 Animations

The portfolio includes several custom animations:
- **Hero**: Mouse-tracking gradient orb and floating particles
- **Skills**: Staggered reveal with hover scaling
- **Projects**: Card hover effects with glow and lift
- **Experience**: Timeline progression animation
- **Contact**: Form validation with smooth transitions

## 🔧 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📞 Support

If you need help setting up or customizing this portfolio:
- Check the documentation above
- Review the code comments in each component
- Open an issue on GitHub

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
