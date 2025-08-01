/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/marketing',
  assetPrefix: '/marketing',
  trailingSlash: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
