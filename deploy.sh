#!/usr/bin/env sh
###
 # @Author: wgj
 # @Date: 2021-04-27 14:29:15
 # @LastEditTime: 2021-04-27 14:51:54
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
forever start app.js

cd -