/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{
         
          hostname: 'sdk.bitmoji.com',
         
        },
        {
          hostname: 'pbs.twimg.com',
        }
      
      ]
      },
};

export default nextConfig;
