import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0e27',
        'dark-secondary': '#111b35',
        accent: '#e8f0f5',
        'accent-muted': '#8fa3b8',
        'accent-light': '#a8b8cc',
        'primary': '#00d966',
        'primary-dark': '#00b854',
        'primary-light': '#33ff99',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Orbitron', 'system-ui', 'monospace'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
}
export default config
