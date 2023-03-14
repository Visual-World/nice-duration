// vite.config.ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'format-duration',
      fileName: 'format-duration',
    },
    sourcemap: true,
    minify: false,
  },
  plugins: [dts()],
})