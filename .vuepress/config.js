/*
 * @Author: wgj
 * @Date: 2021-04-25 15:36:55
 * @LastEditTime: 2021-06-28 18:34:08
 * @LastEditors: wgj
 * @Description: 
 */
module.exports = {
    base: '/',
    title: '高分云前端文档',
    description: '~~~~~~~~~',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        logo: '/images/logo.png',// 注意图片放在 public 文件夹下

        // repo: 'https://github.com/wgjh5',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        nav: [{
                text: '首页',
                link: '/'
            },
            
            // {
            //     text: '博客',
            //     link: 'https://github.com/wgjh5'
            // },
            // {
            // text: '求索',
            // items: [
            //     // link：指向链接也可以是外网链接
            //     {text: '掘进', link: 'https://juejin.cn/user/3438928103754782'},
            // ]
            // },
        ],
        sidebar: [
            // ['/', '首页'],
            ['/docs/vuepress搭建博客详解.md', 'vuepress搭建博客详解'],
            ['/docs/vuepress+koa搭建博客详解.md', 'vuepress+koa搭建博客详解'],
            ['/docs/vue-cli3.0打包之后去掉打印.md', 'vue-cli3.0打包之后去掉打印'],
            ['/docs/vue自定义loading组件以及相关用法.md', '自定义 loading 组件'],
            ['/docs/获取图片相对坐标.md', '获取图片相对坐标'],
            ['/docs/解决全朗e家白屏问题.md', '解决全朗e家白屏问题'],
            ['/docs/解决element-message弹出多次的问题.md', '解决element-message弹出多次的问题'],
            ['/docs/electron和electron-vue的简单介绍.md', 'electron和electron-vue的简单介绍'],
            ['/docs/vue-element-admin学习总结.md', 'vue-element-admin学习总结'],
            ['/docs/解决vue-element-admin Tags-view标签刷新消失问题.md', '解决vue-element-admin Tags-view标签刷新消失问题'],
            ['/docs/vue添加路由转场动画.md', 'vue添加路由转场动画'],
            ['/docs/Cordova相关总结.md', 'Cordova相关总结'],
            ['/docs/gfy-pc-template.md', 'gfy-mobile-template'],
            ['/docs/gfy-pc-template.md', 'gfy-pc-template'],


            


            //{
            //title: '自定义 loading 组件',


            //children: [
            // ['/blog/tab.md', 'tab示例'],
            // ['/blog/vue.md', 'md中使用vue']
            //]
            //}
        ]
    }
}
