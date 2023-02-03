const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "v1": {
        target: "https://openapi.naver.com/",
        changeOrigin: true
      },
      // "1352000": {
      //   target: "http://apis.data.go.kr/1352000",
      //   changeOrigin: true
      // }
    }
  }
})
