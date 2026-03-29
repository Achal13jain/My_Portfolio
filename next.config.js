/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slash to URLs
}

module.exports = nextConfig
