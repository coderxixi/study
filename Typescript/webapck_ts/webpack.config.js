const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  // watch:true,
 
  entry:'./src/in.ts',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,"./dist")
  },
  module:{
  rules:[
    {
      test:/\.ts$/,
      use:"ts-loader"
    },
  
  ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
  
  ],  
  // resolve:{
  //  extendsions:['.ts']
  // },
  devServer:{
    hot:true,
    open:true
  }
 
  
}