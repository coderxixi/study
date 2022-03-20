const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = true;

module.exports = {
  mode: "production",
  externals: {
    // window._
    lodash: "_",
    // window.dayjs
    dayjs: "dayjs"
  },
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css"
    })
  ]
}