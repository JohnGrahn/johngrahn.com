/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/theming/themes")["corporate"],
        },
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "base-100": "#1a1a2e", // Darker background
          "base-200": "#262640", // Darker card background
          "base-300": "#333356", // Darker hover state
          "base-content": "#ffffff", // Brighter text
        },
      },
    ],
  }
}
