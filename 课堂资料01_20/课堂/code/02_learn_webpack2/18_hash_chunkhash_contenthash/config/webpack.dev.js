const resolveApp = require('./paths');
const ReactRefreshWebpackPlugin = require('../../19_webpack的DLL引入/config/node_modules/@pmmmwh/react-refresh-webpack-plugin');

const isProduction = false;

console.log("加载devConfig配置文件");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    hotOnly: true,
    compress: true,
    contentBase: resolveApp("./why"),
    watchContentBase: true,
    proxy: {
      "/why": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/why": ""
        },
        secure: false,
        changeOrigin: true
      }
    },
    historyApiFallback: {
      rewrites: [
        {from: /abc/, to: "/index.html"}
      ]
    }
  },
  plugins: [
    // 开发环境
    new ReactRefreshWebpackPlugin(),
  ]
}