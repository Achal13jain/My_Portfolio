import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://achal-jain-portfolio.netlify.app'

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // If you add individual blog pages or other routes later, you can map them here.
  ]
}
