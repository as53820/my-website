/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#020205', // Deep Black
          darker: '#000000',
          neon: {
            cyan: '#22d3ee',
            pink: '#f472b6',
            yellow: '#fde047',
            blue: '#3b82f6',
            green: '#4ade80',
          },
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s infinite linear alternate-reverse',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        glow: {
          'from': { boxShadow: '0 0 5px #22d3ee, 0 0 10px #22d3ee' },
          'to': { boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee' },
        }
      }
    },
  },
  plugins: [],
}
