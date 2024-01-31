// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       'randomuser.me',
//       'images.unsplash.com',
//       'picsum.photos',
//       's3-alpha-sig.figma.com',
//     ],
//   },
//   skipTrailingSlashRedirect: true,
//   // experimental: {
//   //   appDir: true,
//   //   fontLoaders: [
//   //     {loader: "next/font/google", options: {subset: ["latin"]}},
//   //   ],
//   // },
// };

// module.exports = nextConfig;

// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  // transpilePackages: ["@plaiceholder/ui"],
  images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/**',
              },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                pathname: '/**',
              },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
              },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
              },
            {
                protocol: 'https',
                hostname: 's3-alpha-sig.figma.com',
                port: '',
                pathname: '/**',
              },
            {
                protocol: 'https',
                hostname: 'swiperjs.com',
                port: '',
                pathname: '/**',
              },
        ]
  },
};

export default withPlaiceholder(config);