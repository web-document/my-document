# electron和electron-vue的简单介绍

# 一、electron

[官方文档](https://www.electronjs.org/)

## 1. 比你想象的更简单

> 如果你可以建一个网站，你就可以建一个桌面应用程序。 Electron 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架，它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可。

## 2. 简单介绍

> [Electron](https://link.zhihu.com/?target=https%3A//electronjs.org/)是由Github开发，用HTML，CSS和JavaScript来构建跨平台桌面应用程序的一个开源库。 Electron通过将[Chromium](https://link.zhihu.com/?target=https%3A//www.chromium.org/Home)和[Node.js](https://link.zhihu.com/?target=https%3A//nodejs.org/)合并到同一个运行时环境中，并将其打包为Mac，Windows和Linux系统下的应用来实现这一目的。
> Electron于2013年作为构建Github上可编程的文本编辑器[Atom](https://link.zhihu.com/?target=https%3A//atom.io/)的框架而被开发出来。这两个项目在2014春季开源。

#### 2.1. web技术

> Electron 基于 Chromium 和 Node.js, 让你可以使用 HTML, CSS 和 JavaScript 构建应用

#### 2.2. 开源

> Electron 是一个由 GitHub 及众多贡献者组成的活跃社区共同维护的开源项目

#### 2.3. 跨平台

> Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序

#### 2.4应用程序结构

Electron由三个主要支柱组成：

- **Chromium** 用于显示网页内容。
- **Node.js** 用于本地文件系统和操作系统。
- **自定义 APIs** 用于使用经常需要的 OS 本机函数。

与 Electron 开发应用程序就像构建一个带有网页界面的Node.js 应用程序或构建无缝集成的网页

## 3. 基于electon开发的项目

![image-20201126102740035](${img}/image-20201126102740035.png)

# 二、electron-vue

[官方文档](https://electron.org.cn/vue/index.html)

## 1 .概要

> 该项目的目的，是为了要避免使用 vue 手动建立起 electron 应用程序。electron-vue 充分利用 `vue-cli` 作为脚手架工具，加上拥有 `vue-loader` 的 `webpack`、`electron-packager` 或是 `electron-builder`，以及一些最常用的插件，如`vue-router`、`vuex` 等等。

- 基本的项目结构与 **单一的**`package.json` 设置
- 详细的 [文档](https://electron.org.cn/vue/index.html)
- 使用 [vue-cli](https://github.com/vuejs/vue-cli) 作为项目脚手架
- 立即可用的 Vue 插件 ([axios](https://github.com/mzabriskie/axios), [vue-electron](https://github.com/SimulatedGREG/vue-electron), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex))*
- 预装开发工具 [vue-devtools](https://github.com/vuejs/vue-devtools) 和 [devtron](https://github.com/electron/devtron)
- 使用 [electron-packager](https://npm.js.cn/package/electron-packager) 或 [electron-builder](https://github.com/electron-userland/electron-builder) 轻松打包你的应用程序*
- `appveyor.yml` 与 `.travis.yml` 配置用于 [electron-builder](https://github.com/electron-userland/electron-builder) 的自动部署*
- 能够生成用于浏览器的网页输出
- 便利的 [NPM 脚本](https://electron.org.cn/vue/npm_scripts.html)
- 使用携带模块热更新 (Hot Module Replacement) 的 [webpack](https://npm.js.cn/package/webpack) 和 [vue-loader](https://npm.js.cn/package/vue-loader)
- 在工作在 electron 的 `main` 主进程时重启进程
- 支持使用 [vue-loader](https://npm.js.cn/package/vue-loader) 的 HTML/CSS/JS 预处理器
- 默认支持 [`stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/) 的 ES6
- 使用 [`babili`](https://github.com/babel/babili) 避免完全反编译到 ES5
- ESLint (支持 [`standard`](https://github.com/feross/standard) 和 [`airbnb-base`](https://github.com/airbnb/javascript))*
- 单元测试 (使用 Karma + Mocha)*
- 端到端测试 (使用 Spectron + Mocha)*

## 2. 基于 electron-vue 的作品

- [**Surfbird**](https://github.com/surfbirdapp/surfbird): 一个基于 Electron 和 Vue 的 Twitter 客户端
- [**Lulumi-browser**](https://github.com/qazbnm456/lulumi-browser): Lulumi-browser 是一个轻量级的浏览器，基于 Vue.js 2 和 Electron
- [**Space-Snake**](https://github.com/ilyagru/Space-Snake): 使用 Electron 和 Vue.js 构建的桌面游戏。
- [**Forrest**](https://github.com/stefanjudis/forrest): 一个 npm 脚本的桌面客户端
- [**miikun**](https://github.com/hiro0218/miikun): 一个简单的 Markdown 编辑器
- [**Dakika**](https://github.com/Madawar/Dakika): 超省时的应用程序，使写作变得轻而易举
- [**Dynamoc**](https://github.com/ieiayaobb/dynamoc): Dynamoc 是一个 dynamodb-local、 dynalite 和 AWS dynamodb 的图形化界面客户端
- [**Dockeron**](https://github.com/dockeron/dockeron): Dockeron 项目, 基于 Electron + Vue.js 的 Docker 桌面客户端
- [**Easysubs**](https://github.com/matiastucci/easysubs): 快速简单地下载字幕

## 3. 使用方法

> 这里的vue-electon使用的是vue-cli2.96版本的脚手架，若是已经安装3.0版本的脚手架需要安装个桥接，或者卸载掉3.0的重新装2.96版本的，[桥接文档](https://www.jianshu.com/p/8374765ea2d2)

```bash
# 安装 vue-cli 和 脚手架样板代码
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# 安装依赖并运行你的程序
cd my-project
yarn # 或者 npm install
yarn run dev # 或者 npm run dev
```

# 三、学习链接

[Electron5+vue-cli3开发跨平台桌面应用](https://zhuanlan.zhihu.com/p/75764907)

[Electron-vue开发实战之Electron入门](https://segmentfault.com/a/1190000019487488)

[vue-electron脚手架安装及说明](https://www.jianshu.com/p/7f64daa9264c)

[Electron9.x +vue+ffi-napi 调用Dll动态链接](https://blog.csdn.net/weixin_40450855/article/details/109318361)

[Electron+vue的使用](https://www.jianshu.com/p/839362c64bdb)

[手把手教Electron+vue的使用](https://www.cnblogs.com/jiangxifanzhouyudu/p/9517651.html)

[安装Electron vue 步骤](https://blog.csdn.net/weixin_45844542/article/details/109382632)

# 总结：

> electron比较成熟，是基于nodejs的，支持所有nodejs api桌面端程序框架
>
> vue-electron，基于electron，已经好久没更新，社区相对没有electron丰富，但也是能用的