
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: ['github.com'],
//   },
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['github.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slash to URLs
  distDir: 'out', // Output directory for static files
}

module.exports = nextConfig
