export default function sitemap() {
    const baseUrl = 'https://servicios-digitales-network.com';

    // Se podrían obtener dinámicamente si hubiera una base de datos de productos/blog
    const routes = [
        '',
        '/servicios',
        '/productos',
        '/blog',
        '/contacto',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
