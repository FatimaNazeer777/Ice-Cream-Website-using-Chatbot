/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image3.jdomni.in',
          },
          {
            protocol: 'https',
            hostname: 'image2.jdomni.in',
          },
        ],
      },
};

export default nextConfig;
