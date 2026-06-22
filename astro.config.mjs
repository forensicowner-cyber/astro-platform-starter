import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    // Used for canonical URLs, Open Graph tags and the sitemap.
    // Replace with your real deploy URL.
    site: 'https://megnum-demo.netlify.app',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify()
});
