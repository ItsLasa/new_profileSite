/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{
         
          hostname: 'sdk.bitmoji.com',
         
        },
        {
          hostname: 'pbs.twimg.com',
         
        },
        {
          hostname: 'img.icons8.com',
          
        }
      
      ]
      },
};

export default nextConfig;
