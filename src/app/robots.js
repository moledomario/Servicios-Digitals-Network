export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/api/',
            },
        ],
        sitemap: 'https://servicios-digitales-network.com/sitemap.xml',
    }
}
