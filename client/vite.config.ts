import { defineConfig } from 'vite';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@app': path.resolve(__dirname, 'src/app'),
			'@pages': path.resolve(__dirname, 'src/pages'),
		},
	},
	build:{
		outDir: 'dist'
	}
});
