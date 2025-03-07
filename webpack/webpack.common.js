const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',  // 入口文件1
    about: './src/about.js',  // 入口文件2
  },
  output: {
    filename: '[name].[contenthash].js', // 使用入口名和内容哈希生成文件名
    path: path.resolve(__dirname, 'dist') // 输出路径
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 处理 .css 文件
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 指定 HTML 模板
      filename: 'index.html',  // 输出的文件名
      chunks: ['index'], // 只包含index.js的内容
      minify: { collapseWhitespace: true } // 压缩 HTML
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // 指定 HTML 模板
      filename: 'about.html',  // 输出的文件名
      chunks: ['about'], // 只包含about.js的内容
      minify: { collapseWhitespace: true } // 压缩 HTML
    })
  ]
};
