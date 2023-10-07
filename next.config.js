/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me', "images.unsplash.com", "picsum.photos", "s3-alpha-sig.figma.com"],
  },
  // experimental: {
  //   appDir: true,
  //   fontLoaders: [
  //     {loader: "next/font/google", options: {subset: ["latin"]}},
  //   ],
  // },
};

module.exports = nextConfig;
