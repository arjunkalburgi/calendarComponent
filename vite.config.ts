import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [react()],
  base: !isDev ? '/calendarComponent/' : '/',
})
