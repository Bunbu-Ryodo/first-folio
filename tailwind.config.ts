import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'monokaiGreen': '#A9DC76',
        'monokaiBlack': '#2C292D',
        'monokaiPink': '#FF6188',
        'monokaiOrange': '#FC9867',
        'monokaiBlue': '#78DCE8',
        'monokaiPurple': '#AB9DF2',
        'monokaiYellow': '#FFD866'
      },
      fontSize: {
        'display': '48px',
        'header': '36px',
        'input': '16px',
        'informational': '14px',
        'button': '14px'
      },
      height: {
        'button': '40px'
      }
    },
  },
  plugins: [],
}
export default config
