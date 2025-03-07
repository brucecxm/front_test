const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  // 配置应用的基本路径，部署时可以修改
  publicPath: '/',

  // 设置构建输出的目录
  outputDir: 'build',

  // 设置生成的静态资源（js、css、img等）放置的目录
  assetsDir: 'static',

  // 配置是否在保存时进行代码检查
  lintOnSave: true,

  // 配置开发服务器
  devServer: {
    // 自动打开浏览器
    open: true,

    // 设置开发服务器的端口
    port: 8081,

    // 配置代理，用于解决开发过程中跨域问题
    proxy: 'http://localhost:3000',
  },

  // 自定义 webpack 配置
  configureWebpack: {
    resolve: {
      // 配置路径别名，方便引用
      alias: {
        '@': path.resolve(__dirname, 'src') // 设置 '@' 别名指向 'src' 目录
      }
    }
  },

  // CSS 相关配置
  css: {


    // 启用 CSS 的 source map，便于调试
    sourceMap: true,

    // 配置样式预处理器（例如：sass）的额外选项
    loaderOptions: {
      sass: {
        // 在每个 SASS 文件中自动引入 variables.scss 文件中的变量等内容
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },

  // 插件配置，style-resources-loader 用于自动注入全局样式
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',  // 指定处理器为 sass
      patterns: [
        // 自动引入全局样式文件，例如：variables.scss
        path.resolve(__dirname, './src/styles/variables.scss')
      ]
    }
  }
})
