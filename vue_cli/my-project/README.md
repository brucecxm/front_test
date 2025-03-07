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
  name: 'App'
}
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
