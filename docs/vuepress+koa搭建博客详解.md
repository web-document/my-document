# vuepress+koa搭建博客详解

[vuepress搭建详解](https://www.jianshu.com/p/3befc858888e)

## 前言：

> 上一篇我们讲到`vuepress`搭建的过程，这里我们要继续讲，当`vuepress`打包之后的操作

#### 1.在`.vuepress`新建`app.js`

> /.vuepress/app.js

```js
/*
 * @Author: wgj
 * @Date: 2021-04-26 17:43:01
 * @LastEditTime: 2021-04-26 17:53:53
 * @LastEditors: wgj
 * @Description: 
 */
const Koa = require('koa');
const app = new Koa();
const staticFiles = require('koa-static');
app.use(staticFiles(__dirname + '/dist')); //静态目录


// 监听端口、启动程序
app.listen(3001, err => {
    if (err) throw err;
    console.log('runing...');
})
```

#### 2. 执行命令

```bash
# 初始化package.json
npm init

# 安装静识别静态目录包
npm install koa-static --save-dev

#启动服务
node app

#访问链接 http://localhost:3001
```

