import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Custom plugin to copy public files excluding problematic ones
const copyPublicPlugin = () => ({
  name: 'copy-public-filtered',
  closeBundle() {
    const publicDir = 'public';
    const outDir = 'dist';

    const copyRecursive = (src: string, dest: string) => {
      const files = readdirSync(src);

      files.forEach(file => {
        // Skip problematic file
        if (file.includes('copy.png')) return;

        const srcPath = join(src, file);
        const destPath = join(dest, file);

        try {
          const stat = statSync(srcPath);

          if (stat.isDirectory()) {
            if (!existsSync(destPath)) {
              mkdirSync(destPath, { recursive: true });
            }
            copyRecursive(srcPath, destPath);
          } else {
            copyFileSync(srcPath, destPath);
          }
        } catch (error) {
          console.log(`Skipping ${file}: ${error}`);
        }
      });
    };

    try {
      copyRecursive(publicDir, outDir);
    } catch (error) {
      console.error('Error copying public files:', error);
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyPublicPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: false, // Disable default public copy
});
