import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isDev = import.meta.env.MODE === 'development';

export default defineConfig({
  plugins: [react()],
  base: !isDev ? '/calendarComponent/' : '/',
})
