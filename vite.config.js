import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/extension-manager-ui/',
  plugins: [react()],
});