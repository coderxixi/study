const { CleanWebpackPlugin } = require('../../19_webpack的DLL引入/config/node_modules/clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = true;

module.exports = {
  mode: "production",
  externals: {
    lodash: "_",
    dayjs: "dayjs"
  },
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css"
    })
  ]
}