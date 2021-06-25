<!-- [toc] -->

# vuepress 搭建博客详解

## 一、介绍

> VuePress 由两部分组成：第一部分是一个[极简静态网站生成器 (opens new window)](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://vuepress.vuejs.org/zh/theme/)和[插件 API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

## 二、文件目录

```
├── project
│   ├── .vuepress
│   │   ├── public
│   │   │	└──images
│   │   └──config.js
│   ├── docs
│   │   └──xxx.md
│   └── README.md
└── package.json
```

## 二、快速开始

```bash
# 安装
npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

## 三、搭建过程详解

#### 1. 下载

```bash
npm install -g vuepress
```

#### 2. 新建 project 文件夹

> 为自定义文件夹，名字可随便取

#### 3. 在 project 文件夹，新建如下内容

- `vuepress`文件夹

- `docs`文件夹
- `README.md`

#### 4.执行命令

```bash
npm init
```

#### 5. 在 packeage.json 里面，新增

```json
"scripts": {
        "docs:dev": "vuepress dev ",
        "docs:build": "vuepress build ",
        },
```

- 我的 package.json

```json
{
  "name": "y",
  "version": "1.0.0",
  "description": "'# Hello VuePress!'",
  "main": "index.js",
  "directories": {
    "doc": "docs"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev ",
    "docs:build": "vuepress build "
  },
  "author": "",
  "license": "ISC"
}
```

#### 6.执行命令

```bash
npm install
```

#### 7. 启动项目

```
npm run docs:dev
```

#### 8. 打包

```bash
npm run docs:build
```

## 四、源码克隆

```bash
#克隆
git clone https://github.com/wgjh5/blogs.git

#下载
npm install

#启动
npm run docs:dev

#打包
npm run docs:build
```

##### 相关链接：

- [vuepress 官方文档](https://vuepress.vuejs.org/zh/)

- [vuepress 爬坑之旅](https://juejin.cn/post/6844903747479404557)

- [VuePress 快速踩坑](https://zhuanlan.zhihu.com/p/36116211)

- [Markdown 基本语法](https://www.jianshu.com/p/191d1e21f7ed)

- [Hexo+Github Page 搭建个人博客](https://www.jianshu.com/p/8a92a9569734)
