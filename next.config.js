/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: '**',
                port: '',
                pathname: '**',
            },
            {
                protocol: "http",
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
    experimental: {
        serverActions: true,
        serverActions: {
            // edit: updated to new key. Was previously `allowedForwardedHosts`
            allowedOrigins: ['**', "localhost:**", "**.netlify.app", "**.onrender.com", "**.aayushgarg.net"],
        },
    },
}

module.exports = nextConfig
