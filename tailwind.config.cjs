import { join } from 'path';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				Satoshi: [
					'Satoshi-Regular',
					'Satoshi-Bold',
					'Satoshi-Italic',
					'Satoshi-Light',
					'Satoshi-BoldItalic',
					'Satoshi-Black',
					'Satoshi-Variable'
				],
				AlNevrada: ['AlNevrada']
			}
		}
	},
	plugins: [forms, typography, ...skeleton()]
};
