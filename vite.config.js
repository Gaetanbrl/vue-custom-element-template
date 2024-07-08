import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tagName) => tagName.includes('-')
        }
      }
    })
  ],
  define: {
    'process.env': {},
    __VUE_OPTIONS_API__: 'false',
    __VUE_PROD_DEVTOOLS__: 'false',
  },
  build: {
    lib: {
      entry: 'src/webcomponents.js',
      name: 'WebComponentsTemplate',
      fileName: (format) => `webcomponentstemplate.${format}.js`,
      input: ['index.html', 'vue.html', 'embed.html'],
      sourcemap: true,
    },
    rollupOptions: {
      // Assurez-vous d'exclure les dépendances que vous ne voulez pas inclure dans votre bundle final
      external: [],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
