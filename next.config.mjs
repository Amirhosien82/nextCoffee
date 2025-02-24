/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    domains: ['https://next-coffee-shokri.vercel.app/'],
    
    remotePatterns: [
      {
        hostname: "ntdohxdqsywenwtnhkjj.supabase.co",
        pathname: "/storage/v1/object/public/images-products/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
