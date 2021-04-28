/*
 * @Author: wgj
 * @Date: 2021-04-26 17:43:01
 * @LastEditTime: 2021-04-28 09:39:08
 * @LastEditors: wgj
 * @Description: 
 */
const Koa = require('koa');
const app = new Koa();
var port = process.env.PORT || 3001
// app.listen(port)
const staticFiles = require('koa-static');
app.use(staticFiles(__dirname + '/dist')); //静态目录


// 监听端口、启动程序
app.listen(port, err => {
    if (err) throw err;
    console.log('runing...');
})