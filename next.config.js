/** @type {import('next').NextConfig} */
const nextConfig = {
   
    env: {
        MONGO_URI: process.env.MONGO_URI
    }
}

module.exports = nextConfig
