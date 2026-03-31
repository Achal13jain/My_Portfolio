import type { Metadata } from 'next'
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'
import { ToastProvider } from '@/components/Toast'

const SITE_URL = 'https://achal-jain-portfolio.netlify.app'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Achal Jain - Software Engineer & AI-ML Enthusiast',
  description: 'Portfolio of Achal Jain - B.Tech Computer Science graduate specializing in AI-ML, building production-ready backend systems and ML applications.',
  keywords: 'Achal Jain, Software Engineer, AI ML, Machine Learning, Backend Developer, Computer Science, Portfolio',
  authors: [{ name: 'Achal Jain' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Achal Jain - Software Engineer & AI-ML Enthusiast',
    description: 'Building production-ready backend systems and ML apps',
    url: SITE_URL,
    siteName: 'Achal Jain Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Achal Jain - Software Engineer & AI-ML Enthusiast',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achal Jain - Software Engineer & AI-ML Enthusiast',
    description: 'Building production-ready backend systems and ML apps',
    creator: '@jainachal13',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-inter antialiased bg-navy-950 text-slate-100 overflow-x-hidden`}>
        {/* Skip to content link for keyboard accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Achal Jain',
              url: SITE_URL,
              jobTitle: 'Software Engineer',
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Medicaps University',
              },
              knowsAbout: ['Python', 'Java', 'Machine Learning', 'FastAPI', 'React', 'PostgreSQL'],
              sameAs: [
                'https://github.com/Achal13jain',
                'https://linkedin.com/in/achal-jain13',
                'https://x.com/jainachal13',
                'https://medium.com/@jainachal38',
                'https://achal-jain.hashnode.dev/',
              ],
            }),
          }}
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <ToastProvider>
          <ScrollProgress />
          <div className="relative min-h-screen">
            {/* Background Gradient Mesh */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"></div>
              <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
              <div className="absolute top-60 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-20 left-60 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            {children}
          </div>
          <ScrollToTop />
        </ToastProvider>
      </body>
    </html>
  )
}
