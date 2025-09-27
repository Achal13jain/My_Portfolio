
import type { Metadata } from 'next'
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'

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
  title: 'Achal Jain - Software Engineer & AI-ML Enthusiast',
  description: 'Portfolio of Achal Jain - B.Tech Computer Science graduate specializing in AI-ML, building production-ready backend systems and ML applications.',
  keywords: 'Achal Jain, Software Engineer, AI ML, Machine Learning, Backend Developer, Computer Science, Portfolio',
  authors: [{ name: 'Achal Jain' }],
  openGraph: {
    title: 'Achal Jain - Software Engineer & AI-ML Enthusiast',
    description: 'Building production-ready backend systems and ML apps',
    url: 'https://achal-jain-portfolio.netlify.app/',
    siteName: 'Achal Jain Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achal Jain - Software Engineer & AI-ML Enthusiast',
    description: 'Building production-ready backend systems and ML apps',
  },
  robots: {
    index: true,
    follow: true,
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
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-inter antialiased bg-navy-950 text-slate-100 overflow-x-hidden`}>
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
      </body>
    </html>
  )
}
