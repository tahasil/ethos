/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "styled-components",
  ],
  //pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

export default nextConfig;
