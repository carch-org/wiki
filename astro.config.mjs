// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://carch-org.io',
  base: '/wiki',
	integrations: [
		starlight({
			title: 'Carch',
			social: {
        discord: 'https://discord.com/invite/8NJWstnUHd',
        reddit: 'https://www.reddit.com/r/carch/',
        telegram: 'https://t.me/carchx'
			},
      editLink: {
          baseUrl: 'https://github.com/carch-org/wiki/tree/main',
      },
      customCss: ['./src/styles/custom.css'],
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 2, },
      favicon: './carch.png',
      lastUpdated: true,
			sidebar: [
				{ label: 'Introduction', slug: 'getting-started/introduction' },
				{ label: 'Installation', slug: 'getting-started/installation' },
        { label: 'Installation', slug: 'getting-started/installation', badge: { text: 'New', variant: 'success' } },
				{ label: 'Commands', slug: 'reference/commands' },
				{ label: 'Overview Scripts', slug: 'reference/overview-scripts' },
				{ label: 'Roadmap', slug: 'project/roadmap' },
				{ label: 'Contributing', slug: 'project/contributing' },
				{ label: 'Code of Conduct', slug: 'project/code-of-conduct' },
				{ label: 'Inspiration', slug: 'project/inspiration' },
				{ label: 'Contributions', slug: 'project/contributions' },
			],
		}),
	],
});

