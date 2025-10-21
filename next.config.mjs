/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.gstatic.com', // The domain of your image URL
        port: '',
        pathname: '/weather/v1/**', // This is a glob to match the specific path
      },
    ],
  },
}

export default nextConfig
