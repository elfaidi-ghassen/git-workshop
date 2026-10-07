// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Git & GitHub',
			  logo: {
				light: './public/git-small.png',
				dark: './public/git-small.png',
				// replacesTitle: true,

				},

				customCss: ['./src/styles/custom.css'],

			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/elfaidi-ghassen' }, 
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ghassen-faidi/' }
			],
			sidebar: [
				{
					label: 'Course Notes',
					items: [
						{ label: 'Before you start', slug: 'notes/setup' },
						{ label: 'Lecture 1', slug: 'notes/lecture-1' },
						{ label: 'Lecture 2', slug: 'notes/lecture-2', badge: 'upcoming' },
						{ label: 'Lecture 3', slug: 'notes/lecture-3', badge: 'upcoming' },
						{ label: 'Lecture 4', slug: 'notes/lecture-4', badge: 'upcoming' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
