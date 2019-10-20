var webpack = require("webpack");

module.exports = {
  // eslint-disable-next-line no-unused-vars
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      return {
        plugins: [
          new webpack.DefinePlugin({
            apiRoot: "'http://localhost:8080/api'"
          })
        ]
      };
    } else {
      // 为开发环境修改配置...
      return {
        plugins: [
          new webpack.DefinePlugin({
            apiRoot: "'http://service:8080/api'"
          })
        ]
      };
    }
  },
  productionSourceMap: false,
  devServer: {
    port: 8081
  },
  outputDir: "../web"
};
