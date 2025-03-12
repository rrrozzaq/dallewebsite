import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ['./src/**/*.{js,jsx}'],
    theme: {
      extend: {
        screens: {
          xs: '480px',
        },
        fontFamily: {
          inter: ['Inter var', 'sans-serif'],
        },
        boxShadow: {
          card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
          cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
        },
      },
    },
  plugins: [react(), tailwindcss(),]
})
