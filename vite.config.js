/**
 * @type {import('vite').UserConfig}
 */
// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rick: resolve(__dirname, 'rick/index.html')
      }
    }
  }
})
