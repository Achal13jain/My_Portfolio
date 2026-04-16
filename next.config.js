/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slash to URLs
}

module.exports = nextConfig
