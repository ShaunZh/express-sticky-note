var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, "js/app/index.js"),
  output: {
    path: path.join(__dirname, "../public"),
    filename: "js/index.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [ "css-loader", "sass-loader"]
        })
      }
    ]
  },
  resolve: {
    // 别名
    alias: {
      jquery: path.join(__dirname, 'js/lib/jquery-3.2.1.min.js'),
      mod: path.join(__dirname, 'js/mod'),
      scss: path.join(__dirname, 'scss')
    }
  },
  plugins: [
    // 自动全局加载模块，当在代码中遇到$或jQuery时，从alias中查找相应的文件
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: 'jquery'
    }),
    new ExtractTextPlugin("css/index.css"),
  ]
};
