#!/bin/bash
###
 # @Author: wgj
 # @Date: 2021-04-27 14:29:15
 # @LastEditTime: 2021-04-28 11:03:52
 # @LastEditors: wgj
 # @Description: 
### 

# 确保脚本抛出遇到的错误
set -e

#安装
npm install

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./.vuepress

#安装node包
npm install

#启动服务
#PORT=4005 forever start app.js

PORT=4005 pm2 start app.js


#Windows package.json
#set PORT=4005 && forever start app.js

