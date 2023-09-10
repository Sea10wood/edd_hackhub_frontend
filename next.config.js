/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['github.com'],
  },
  env: {
    API_BASE_URL: 'https://eddbotbackend.azurewebsites.net/api',
    Category_BASE_URL: 'https://eddbotbackend.azurewebsites.net/api/category',
    Threads_BASE_URL: 'https://eddbotbackend.azurewebsites.net/api/Treads',
  },
};

