import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleImport from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    react(),
    styleImport({
      libs: [{
        libraryName: 'axios',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          return `axios/${name}/style`;
        },
      }],
    }),
  ],
});
