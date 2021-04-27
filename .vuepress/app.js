/*
 * @Author: wgj
 * @Date: 2021-04-26 17:43:01
 * @LastEditTime: 2021-04-26 17:53:53
 * @LastEditors: wgj
 * @Description: 
 */
const Koa = require('koa');
const app = new Koa();
const path=require('path');            // 导入path包 用于拼接路径
const staticFiles = require('koa-static');
// app.use(async ctx => {
//     // ctx.body 即服务端响应的数据
//     ctx.body = 'Hello Koa';
// })
app.use(staticFiles(__dirname + '/dist')); //静态目录
// app.use(staticFiles(path.join(__dirname+'/public'),  // 开放的文件夹 __dirname为当前运行文件的目录  目前看来 只能开放文件夹 无法开放单独一个文件
// 	{
//   		index:true,       // 默认为true  访问的文件为index.html  可以修改为别的文件名或者false
//   		hidden:false,      // 是否同意传输隐藏文件
//   		defer:true,		   // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
// 	}
// ))

// 监听端口、启动程序
app.listen(3001, err => {
    if (err) throw err;
    console.log('runing...');
})