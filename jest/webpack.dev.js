const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',  // 开发模式
  devtool: 'inline-source-map',  // 映射到源文件
  devServer: {
    static: { // 使用 static 替代 contentBase
      directory: './dist',  // 静态文件服务路径
    },
    open: true,  // 自动打开浏览器
    port: 8080,  // 设置端口号（可选）
  }
});
