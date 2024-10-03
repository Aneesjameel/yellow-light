import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // Allows access from other devices on the network
    port: 3000,      // You can specify the port number you want
  },
});