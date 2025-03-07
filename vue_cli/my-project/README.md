Vue CLI 是专门用于构建 Vue.js 项目的工具，
主要目的是帮助开发者快速创建、开发和管理 Vue.js 项目。

Vue CLI 是一个官方提供的 Vue.js 脚手架工具，可以帮助你快速搭建一个 Vue.js 项目，提供了一些构建配置，插件和工具来提高开发效率。下面是一个快速入门的指南：

### 1. 安装 Vue CLI

首先，你需要安装 Vue CLI。你可以通过 npm（Node.js 包管理器）来安装它。如果你还没有安装 Node.js，请先 [下载并安装 Node.js](https://nodejs.org/)，它会自带 npm。

使用以下命令安装 Vue CLI：

```bash
npm install -g @vue/cli
```

安装完成后，你可以通过以下命令验证是否安装成功：

```bash
vue --version
```

### 2. 创建一个 Vue 项目

创建一个新的 Vue 项目可以使用 `vue create` 命令。运行以下命令创建一个新的项目：

```bash
vue create my-project
```

这里，`my-project` 是你项目的名称，命令执行后会询问你选择一些项目配置。你可以选择默认配置，或者选择手动选择配置项：

- **默认配置**：选择 Vue 3 和一些基本的构建工具。
- **手动配置**：你可以选择是否使用 Babel、TypeScript、PWA、Vuex、Vue Router、CSS Pre-processors 等。

### 3. 进入项目目录

创建完成后，进入项目目录：

```bash
cd my-project
```

### 4. 启动开发服务器

在项目目录中，运行以下命令启动开发服务器：

```bash
npm run serve
```

该命令会启动一个热重载的开发服务器，通常默认在 `http://localhost:8080` 上访问。

### 5. 项目结构

创建完成的 Vue 项目会有以下基本结构：

```
my-project/
 ├── node_modules/          # 存放项目依赖的文件夹
 ├── public/                # 存放静态资源
 ├── src/                   # 存放源代码
 │   ├── assets/            # 存放图片等资源文件
 │   ├── components/        # 存放 Vue 组件
 │   ├── views/             # 存放页面组件
 │   ├── App.vue            # 根组件
 │   ├── main.js            # 入口文件
 ├── package.json           # 项目配置文件
 └── vue.config.js           # Vue CLI 配置文件（如果有）
```

### 6. 修改 `App.vue`

你可以修改 `src/App.vue` 来开始构建你的 Vue 应用。比如，修改里面的内容：

```vue
<template>
  <div id="app">
    <h1>Hello Vue CLI!</h1>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
```

### 7. 添加 Vue Router 或 Vuex（可选）

如果你在创建项目时选择了 Vue Router 或 Vuex，它们会自动添加到你的项目中。你可以根据需求进行修改。

例如，如果你选择了 Vue Router，你会看到 `src/router/index.js` 文件，你可以在里面配置路由。

### 8. 构建项目

当你准备好部署你的项目时，运行以下命令来构建生产版本：

```bash
npm run build
```

构建后的文件会被放在 `dist/` 文件夹中，你可以将这些文件部署到服务器上。

### 总结

通过以上步骤，你可以快速上手 Vue CLI，创建一个新的 Vue 项目，修改组件，启动开发服务器进行调试，并最终构建发布。

如果你需要更多自定义的配置或功能，Vue CLI 还提供了插件系统，可以为你的项目添加更多功能。

`vue.config.js` 是 Vue CLI 项目的配置文件，允许你自定义项目的构建、开发服务器、插件和其他工具的行为。这个文件通常放置在项目的根目录下，默认情况下并不存在，你需要手动创建它。

下面是 `vue.config.js` 文件的常见配置项及详细说明：

### 1. 基本结构

```js
module.exports = {
  // 配置项
};
```

`vue.config.js` 文件导出的对象包含所有的配置项。

### 2. 配置项详解

#### (1) **`publicPath`**

`publicPath` 配置项用于指定项目的基础路径。当你部署应用时，修改此配置可以设置项目根路径。

- 默认值：`'/'`
- 例如，如果你的应用部署在 `https://example.com/my-app/` 下，`publicPath` 应该设置为 `/my-app/`。

```js
module.exports = {
  publicPath: "/my-app/",
};
```

#### (2) **`outputDir`**

`outputDir` 用于指定 `npm run build` 命令构建出来的生产环境的输出目录。

- 默认值：`'dist'`
- 例如，你可以将构建输出设置为 `build` 文件夹：

```js
module.exports = {
  outputDir: "build",
};
```

#### (3) **`assetsDir`**

`assetsDir` 用于指定静态资源（如图片、字体等）的存放目录，相对于 `outputDir`。

- 默认值：`'assets'`

```js
module.exports = {
  assetsDir: "static",
};
```

#### (4) **`devServer`**

`devServer` 用于配置开发服务器的行为。你可以设置代理、端口、是否启用热重载等。

```js
module.exports = {
  devServer: {
    open: true, // 自动打开浏览器
    port: 8081, // 设置端口
    proxy: "http://localhost:3000", // 设置代理
  },
};
```

- **`open`**：当开发服务器启动时，自动打开浏览器。
- **`port`**：设置开发服务器的端口。
- **`proxy`**：配置代理，解决跨域问题。

#### (5) **`lintOnSave`**

`lintOnSave` 配置项控制是否在保存时进行代码质量检查。

- 默认值：`true`，在保存时会检查代码。

```js
module.exports = {
  lintOnSave: false, // 禁用代码检查
};
```

#### (6) **`chainWebpack`**

`chainWebpack` 允许你使用 `webpack-chain` 来修改 webpack 配置。你可以通过它对 webpack 配置进行更细粒度的控制。

```js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...options.compilerOptions,
          preserveWhitespace: false,
        };
        return options;
      });
  },
};
```

#### (7) **`configureWebpack`**

`configureWebpack` 用于直接修改 webpack 配置。你可以通过它进行全局配置，或者添加插件、修改规则等。

```js
module.exports = {
  configureWebpack: {
    plugins: [
      // 在这里添加 webpack 插件
    ],
    resolve: {
      alias: {
        "@": "src", // 设置别名
      },
    },
  },
};
```

#### (8) **`transpileDependencies`**

`transpileDependencies` 用于指定哪些依赖需要被 Babel 转译。默认情况下，只有 `node_modules` 中的 ES6+ 代码不会被 Babel 转译。如果你想转译某个依赖，可以在这里配置。

```js
module.exports = {
  transpileDependencies: ["some-dependency"],
};
```

#### (9) **`css`**

`css` 用于配置 CSS 相关的选项。你可以配置 CSS 的 `modules`、`sourceMap`、`loaderOptions` 等。

```js
module.exports = {
  css: {
    modules: true, // 启用 CSS Modules
    sourceMap: true, // 启用 CSS 的 source map
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`, // 在每个 SASS 文件中自动引入变量
      },
    },
  },
};
```

#### (10) **`pluginOptions`**

`pluginOptions` 用于配置第三方插件的选项。许多插件都可以在这里设置自定义选项。

例如，使用 Vue CLI 插件时，你可能会看到需要通过 `pluginOptions` 来进行自定义配置：

```js
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "sass",
      patterns: [path.resolve(__dirname, "./src/styles/variables.scss")],
    },
  },
};
```

#### (11) **`runtimeCompiler`**

`runtimeCompiler` 用于开启运行时编译器，它允许你在应用中使用字符串模板。如果你的应用中需要动态编译模板，可以启用这个选项。

```js
module.exports = {
  runtimeCompiler: true,
};
```

#### (12) **`parallel`**

`parallel` 控制在构建过程中是否启用并行化的功能。默认启用，它会加速构建过程。

```js
module.exports = {
  parallel: true, // 启用并行化构建
};
```

### 3. 完整示例

```js
const path = require("path");

module.exports = {
  publicPath: "/",
  outputDir: "build",
  assetsDir: "static",
  lintOnSave: true,
  devServer: {
    open: true,
    port: 8081,
    proxy: "http://localhost:3000",
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  css: {
    modules: true,
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "sass",
      patterns: [path.resolve(__dirname, "./src/styles/variables.scss")],
    },
  },
};
```

### 4. 总结

`vue.config.js` 文件提供了非常灵活的配置选项，能够让你定制 Vue 项目的构建、开发和部署流程。它的主要作用是：

- 配置开发服务器、代理、端口等。
- 自定义构建输出目录和路径。
- 控制代码检查、CSS 处理等。
- 配置 Vue CLI 插件的选项。

通过修改 `vue.config.js`，你可以根据项目需求进行优化和自定义。

# my-project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
