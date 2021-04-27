/*
 * @Author: wgj
 * @Date: 2021-04-26 17:43:01
 * @LastEditTime: 2021-04-27 14:25:33
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