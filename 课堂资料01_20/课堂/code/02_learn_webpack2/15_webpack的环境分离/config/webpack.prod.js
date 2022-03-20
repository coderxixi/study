const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isProduction = true;

module.exports = {
  mode: "production",
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
  ]
}