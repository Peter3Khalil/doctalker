/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: process.env.IGNORE_ESLINT === 'true',
  },
  typescript: {
    ignoreBuildErrors: process.env.IGNORE_TYPE_CHECKING === 'true',
  },
};

export default nextConfig;
