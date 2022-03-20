const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  module: {
    rules: [
      // Rule对象
      // {
      //   test: /\.js$/i,
      //   use: {
      //     loader: "hy-loader01",
      //     options: {
      //       name: "why",
      //       age: "18"
      //     }
      //   }
      // },
      // {
      //   test: /\.js$/i,
      //   use: "hy-loader02",
      //   enforce: "pre"
      // },
      // {
      //   test: /\.js$/i,
      //   use: "hy-loader03"
      // },
      {
        test: /\.js$/i,
        use: {
          loader: "hybabel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      },
      {
        test: /\.md$/i,
        use: [
          // "html-loader",
          "hymd-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  resolveLoader: {
    modules: ["node_modules", "./hy-loaders"]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
