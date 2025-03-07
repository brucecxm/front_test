const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'production',  // 生产模式
  optimization: {
    splitChunks: {
      chunks: 'all', // 自动拆分共享代码
    }
  },
  plugins: [
    new BundleAnalyzerPlugin() // 用于分析打包文件大小
  ]
});
