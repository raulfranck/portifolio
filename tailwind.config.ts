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
        // Base colors
        'bg-primary': '#0E0E10',
        'bg-secondary': '#1C1C1F',
        'bg-tertiary': '#2E2E33',
        
        // Text colors
        'text-primary': '#E4E4E7',
        'text-secondary': '#A1A1AA',
        'text-accent': '#F4F4F5',
        
        // Accent colors
        'accent-green': '#00FFC6',
        'accent-purple': '#7F5AF0',
        'accent-yellow': '#FFD600',
      },
      fontFamily: {
        'heading': ['General Sans', 'Satoshi', 'Clash Display', 'sans-serif'],
        'body': ['Inter', 'Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config 