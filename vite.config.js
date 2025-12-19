
import { defineConfig } from 'vite'

export default defineConfig({
    // Base path relative for maximum compatibility
    base: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
})
