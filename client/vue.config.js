const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000', // Your Express server's URL
        changeOrigin: true,
        logLevel: 'debug'
      },
      '^/uploads': {
        target: 'http://localhost:5000', // Also proxy image uploads
        changeOrigin: true
      }
    }
  }
})