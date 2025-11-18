const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: [
      "images.ctfassets.net",
      "img.youtube.com",
      "silverstatesmiles-cms.com",
      "silverstatesmiles.s3.us-east-1.amazonaws.com",
      "localhost",
      "d2g1v73fjo3fyg.cloudfront.net",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2g1v73fjo3fyg.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
    minimumCacheTTL: 86400,
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
}

module.exports = nextConfig
