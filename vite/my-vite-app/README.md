Vite 是一个现代化的前端构建工具，它通过优化开发和构建过程，提供了比传统的构建工具更快的启动速度和热更新。下面是如何快速入门 Vite。

### 1. 安装 Vite

首先，确保你已经安装了 **Node.js**，你可以通过以下命令检查：

```bash
node -v
```

然后，你可以通过以下步骤创建一个 Vite 项目：

#### 1.1 使用 `npm` 创建 Vite 项目

在终端中运行以下命令，使用 **npm** 安装 Vite 并创建一个项目。

```bash
npm create vite@latest my-vite-app
```

`my-vite-app` 是你的项目名，可以替换为你喜欢的名称。

#### 1.2 选择框架

当运行上述命令时，Vite 会提示你选择框架。你可以选择以下框架之一：

- **Vanilla**（原生 JavaScript）
- **Vue**（Vue.js）
- **React**（React.js）
- **Preact**
- **Lit**
- **Svelte**
- **Other**（自定义）

选择 **Vue** 或 **React** 可以快速创建一个带有相关框架支持的 Vite 项目。

#### 1.3 进入项目目录

```bash
cd my-vite-app
```

#### 1.4 安装依赖

在项目目录中，安装所有依赖：

```bash
npm install
```

#### 1.5 启动开发服务器

启动开发服务器以开始开发：

```bash
npm run dev
```

此时，你可以打开浏览器访问 [http://localhost:5173](http://localhost:5173)，看到 Vite 启动的页面。

### 2. 项目结构

创建的 Vite 项目通常具有以下结构：

```plaintext
my-vite-app/
├── index.html         # 项目的入口 HTML 文件
├── src/               # 源代码目录
│   ├── assets/        # 静态资源
│   └── main.js        # 入口 JavaScript 文件
├── package.json       # 项目配置文件，包含依赖和脚本命令
└── vite.config.js     # Vite 配置文件
```

### 3. 配置 Vite

Vite 配置文件 `vite.config.js` 位于项目根目录。你可以在这个文件中配置一些项目相关的设置。

下面是一个简单的 `vite.config.js` 配置文件示例：

```js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // 设置项目的基础路径
  build: {
    outDir: "dist", // 构建输出目录
  },
  server: {
    port: 3000, // 开发服务器端口
    open: true, // 启动时自动打开浏览器
  },
});
```

#### 常见配置项：

- **`base`**：设置项目的基础路径，部署时可以修改。
- **`build.outDir`**：指定构建输出目录，默认是 `dist`。
- **`server.port`**：设置开发服务器的端口。
- **`server.open`**：开发服务器启动时是否自动打开浏览器。

### 4. 使用 Vite 的特性

Vite 提供了许多优化和现代化的特性，这里是一些常用的功能：

#### 4.1 快速热重载

Vite 使用原生的 ES 模块，在开发环境中实现快速的热重载。你可以直接修改组件或代码，Vite 会即时更新，而不需要刷新页面。

#### 4.2 支持 TypeScript 和 JSX

Vite 默认支持 TypeScript 和 JSX。如果你在项目中使用 TypeScript 或者 React，它会自动为你处理。

#### 4.3 CSS 和 Sass 支持

你可以在项目中直接使用 CSS、Sass 等预处理器。如果使用 Sass，只需安装相应依赖并进行配置。

```bash
npm install sass
```

#### 4.4 静态资源导入

Vite 支持导入各种静态资源，如图片、字体、JSON 等。这些资源会自动经过优化和处理。

```js
import logo from "./assets/logo.png";
```

#### 4.5 支持插件

Vite 生态非常丰富，支持很多插件。你可以通过安装 Vite 插件来增强项目功能。一个常用的插件是 Vite 插件（如支持 Vue 或 React 等）。

```bash
npm install @vitejs/plugin-vue
```

然后在 `vite.config.js` 中配置：

```js
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
});
```

### 5. 构建生产版本

开发过程中，Vite 会提供即时更新，快速的构建时间和热重载。但在生产环境中，你需要构建一个优化后的版本。

你可以运行以下命令来构建生产版本：

```bash
npm run build
```

构建完成后，生成的文件会输出到 `dist/` 目录。你可以将这个文件夹部署到服务器上。

### 6. 其他功能

- **Vite 代理**：如果你需要代理 API 请求，可以在 `vite.config.js` 中配置：

```js
server: {
  proxy: {
    '/api': 'http://localhost:5000',
  }
}
```

- **环境变量**：Vite 支持在 `.env` 文件中配置环境变量，使用 `import.meta.env` 进行访问：

```js
console.log(import.meta.env.VITE_API_URL); // 在 .env 文件中定义
```

### 7. 总结

Vite 是一个非常现代化且快速的前端构建工具，支持快速开发、热更新、优化生产构建，且配置简单。通过安装和配置 Vite，你可以快速搭建一个开发环境，享受更流畅的开发体验。

希望这个入门指南对你有所帮助，祝你在使用 Vite 的过程中愉快！

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
