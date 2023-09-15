/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ['cdn.sanity.io'], // Add the 'cdn.sanity.io' domain here
    },
  };
  
  module.exports = nextConfig;
  