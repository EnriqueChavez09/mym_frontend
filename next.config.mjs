/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_URL_API: process.env.URL_API,
  },
}

export default nextConfig
