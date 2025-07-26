import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  console.log("Vite mode:", mode); 

  return {
    plugins: [react()],
    base: mode === 'development' ? '/' : '/calendarComponent/',
  };
});
