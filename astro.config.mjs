// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "starlight-theme-catppuccin";

// https://astro.build/config
export default defineConfig({
  site: 'https://carch-org.io',
  base: '/wiki',
	integrations: [
		starlight({
			title: 'Carch',
      logo: {
        light: '/src/assets/carch.png',
        dark: '/src/assets/carch.png',
        replacesTitle: false,
      },
      plugins: [catppuccin({ dark: 'mocha-mauve', light: 'latte-mauve' })],
      expressiveCode: {
				themes: ['catppuccin-mocha', 'catppuccin-latte'],
			},
			customCss: [
        "@fontsource/inter/400.css",
        "@fontsource/inter/600.css",
				"./src/styles/custom.css",
			],
			social: {
        discord: 'https://discord.com/invite/8NJWstnUHd',
        reddit: 'https://www.reddit.com/r/carch/',
        telegram: 'https://t.me/carchx',
        matrix: 'https://matrix.to/#/#carch:matrix.org'
			},
      editLink: {
          baseUrl: 'https://github.com/carch-org/wiki/tree/main',
      },
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 2, },
      favicon: './carch.png',
      lastUpdated: true,
			sidebar: [
				{ label: 'Introduction', slug: 'getting-started/introduction' },
				{ 
          label: 'Installation', 
          slug: 'getting-started/installation', 
          badge: { text: 'Fedora Support', variant: 'success' } 
        },
				{ label: 'Commands', slug: 'reference/commands' },
				{ 
          label: 'Overview Scripts', 
          slug: 'reference/overview-scripts', 
          badge: { text: 'Updated', variant: 'note' } 
        },
				{ label: 'Roadmap', slug: 'project/roadmap' },
				{ 
          label: 'Contributing', 
          slug: 'project/contributing', 
          badge: { text: 'Caution', variant: 'caution' } 
        },
				{ label: 'Code of Conduct', slug: 'project/code-of-conduct' },
				{ label: 'Inspiration', slug: 'project/inspiration' },
				{ label: 'Contributions', slug: 'project/contributions' },
			],
		}),
	],
});

