/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  env: {
    BASE_DIRECTORY: 'gokreasi',
  },
  basePath: '/gokreasi',
  // reactStrictMode: true,
};

module.exports = nextConfig;
