// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Replace `site` with the live domain once registered (used for canonical
// URLs and the generated sitemap).
// https://astro.build/config
export default defineConfig({
	site: 'https://devraclinicranchi.com',
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: 0.8,
			lastmod: new Date(),
			serialize(item) {
				if (item.url === 'https://devraclinicranchi.com/') {
					item.priority = 1.0;
				}
				return item;
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
