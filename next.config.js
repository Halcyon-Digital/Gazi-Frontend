/** @type {import('next').NextConfig} */
const nextConfig = {
  /*  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  }, */
  images: {
    domains: ['i.ibb.co'],
  },
};

module.exports = nextConfig;
