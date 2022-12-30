import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), eslint()],
  build: {
    outDir: 'build'
  },
  server: {
    open: true,
    port: 3000
  }
});
