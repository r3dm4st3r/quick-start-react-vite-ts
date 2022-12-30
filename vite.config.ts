import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import viteSvgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment -- Svgr
  plugins: [react(), viteTsconfigPaths(), viteSvgr(), eslint()],
  build: {
    outDir: 'build'
  },
  server: {
    open: true,
    port: 3000
  }
});
