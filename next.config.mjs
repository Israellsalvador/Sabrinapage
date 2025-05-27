/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['blob.v0.dev'],
    unoptimized: true,
  },
  allowedDevOrigins: ['http://192.168.13.9:3000'], // ou ajuste conforme sua rede/local
};

export default nextConfig;