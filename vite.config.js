import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLTopath} from 'node:url'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls}
    }),
     // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: fileURLTopath(
        new URL('./src/quasar-variables.sass', import.meta.url)
      )
    })
  ]
})
