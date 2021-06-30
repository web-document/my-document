#!/bin/bash
###
 # @Author: wgj
 # @Date: 2021-04-27 14:29:15
 # @LastEditTime: 2021-06-30 11:46:51
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
cd ./.vuepress/dist

git init
git add .
git commit -m 'deploy'

git push -f https://github.com/web-document/document.git master