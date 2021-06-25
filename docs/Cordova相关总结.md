# Cordova 实践开发

## 简单认知 Cordova

### 什么是 Cordova

官网：http://cordova.axuer.com/

- 一个移动应用开发框架
- 本质是 HTML、CSS、JavaScript 外面包装个原生的壳
- 出自于 Adobe 11 年收购的 PhoneGap，是驱动 PhoneGap 的核心引擎
- 是 Apache 的顶级开源项目

Cordova 提供了一系列设备相关的 API，通过这组 API，移动应用能够以 JavaScript 访问原生的设备功能，如摄像头、麦克风。



## 三种移动开发的分类

### 常见的移动端开发的三大分类

1、原生 App
2、Web App
3、混合 App（Hybrid App）

### Cordova 的优缺点

优点：跨平台，便于移植，开发快速，成本低。
缺点：执行速度相对原生会慢一些，一次编写，要处处调试。

## Cordova 的架构

[![Cordova架构](http://cordova.axuer.com/static/img/guide/cordovaapparchitecture.png)](http://cordova.axuer.com/static/img/guide/cordovaapparchitecture.png)

[Cordova架构](http://cordova.axuer.com/static/img/guide/cordovaapparchitecture.png)



- Web App：存放应用程序代码的地方，体现是你的具体业务逻辑模块。
- WebView：给应用提供完整的用户访问呈现。
- Cordova Plugins：提供了和原生组件通信的接口并绑定到了标准的设备 API,将来通过 JavaScript 来调用。

## Cordova 环境配置

### Cordova 在整个 App 领域中的位置

[![Cordova 在整个 App 领域中的位置](https://s2.ax1x.com/2020/03/11/8kSvJx.png)](https://s2.ax1x.com/2020/03/11/8kSvJx.png)

[Cordova 在整个 App 领域中的位置](https://s2.ax1x.com/2020/03/11/8kSvJx.png)



### Cordova 环境安装

1、Git 的安装
2、Node.js 的安装
3、安装 Cordova Cli 下载并安装 Cordova 全局模块

```
npm install -g cordova  /  cnpm install -g cordova 
npm install -g cordova --registry=https://registry.npm.taobao.org
cnpm install -g cordova@8.1.2 // 安装指定版本
```

4、安装 Java JDK

下载地址：https://www.oracle.com/java/technologies/javase-downloads.html

查看版本：**java -version**

有关JDK的安装，参考：https://yiibai.com/java/java_environment_setup.html

5、安装 Android Studio 安装 Android SDK

官网地址：http://www.android-studio.org/

安装参考：https://www.yiibai.com/android/android_environment_setup.html

#### 环境相关

- [整体环境1](https://www.cnblogs.com/qirui/p/8421372.html)

- [整体环境2](https://www.cnblogs.com/wenbinjiang/p/11776782.html)
- [整体环境3](https://segmentfault.com/a/1190000020880025?utm_source=tag-newest)
- [整体环境4](https://blog.csdn.net/weixin_43765499/article/details/89142608)
- [整体环境--知乎](https://zhuanlan.zhihu.com/p/89463566?from_voters_page=true)
- [整体环境--完整版](https://blog.csdn.net/qq_41995919/article/details/101369874)

- [gradle环境搭建](http://hexo.wbjiang.cn/gradle%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.html)
- [java环境搭建](http://hexo.wbjiang.cn/jdk%E4%B8%8B%E8%BD%BD%E5%92%8C%E5%AE%89%E8%A3%85%E7%AE%80%E6%98%8E%E6%95%99%E7%A8%8B.html)

## 第一个应用程序的编译

```
cordova --version // 查看 cordova 安装的版本
10.0.0
```

### 创建项目

```
cordova create 项目名 com.公司名.项目名 类名（建议） // 创建一个空的Cordova项目
cordova create cordovademo02 com.itying.cordova Cordovademo

cordova create MyApp // 创建一个空的Cordova项目
cordova help create // 要获得完整的选项集，请运行
```

cordova 创建项目报错解决方法：

```
卸载 cordova npm uninstall -g cordova
删掉 cordova 文件 npm\node_modules\cordova
npm install -g cordova --registry=https://registry.npm.taobao.org
```

### 添加平台

```
cd MyApp
cordova platform add android // 添加平台
cordova platform // 获取完整的平台列表,请运行
```

### 运行项目

```
cordova run android  
```

项目的 platforms 下 android目录 导入 android studio 进行运行调试 （或者运行 cordova run android）

创建项目的时候注意包名称：发布上线打包的时候用到包名称，注意

修改应用包名称参考：http://www.ionic.wang/article-index-id-91.html

1、修改 config.xml 里面的包名称

2、修改完成以后重新执行 cordova platform add android

修改项目后，运行 cordova prepare

实际编译 platforms \android\app\src\main\assets\www

### 编译项目

```
cordova build android
```

### 打包报错

```
Checking Java JDK and Android SDK versions
ANDROID_SDK_ROOT=undefined (recommended setting)
ANDROID_HOME=F:\software\Android\Sdk (DEPRECATED)
Could not find an installed version of Gradle either in Android Studio,
or on your system to install the gradle wrapper. Please include gradle
in your path, or install Android Studio
```

方法一：

用 Android Studio 打开 Android 目录 进项打包。

[![用 Android Studio 打开打包](https://s2.ax1x.com/2020/03/11/8AVUMR.png)](https://s2.ax1x.com/2020/03/11/8AVUMR.png)

[用 Android Studio 打开打包](https://s2.ax1x.com/2020/03/11/8AVUMR.png)



包所在的位置：android\app\build\outputs\apk\debug

方法二：

根据上面的报错信息可以得出
1、没有找到 Gradle
2、需要设置环境变量 ANDROID_SDK_ROOT
3、Android SDK 在 F:\software\Android\Sdk

如果不知道 Android SDK 在什么位置可以如下操作：

打开 Android Studio

[![查看 sdk 路径配置](https://s2.ax1x.com/2020/03/11/8kdum6.png)](https://s2.ax1x.com/2020/03/11/8kdum6.png)

[查看 sdk 路径配置](https://s2.ax1x.com/2020/03/11/8kdum6.png)


[![查看 sdk 路径配置](https://s2.ax1x.com/2020/03/11/8kwZ4g.png)查看 sdk 路径配置](https://s2.ax1x.com/2020/03/11/8kwZ4g.png)



环境变量配置如下

[![环境变量配置](https://s2.ax1x.com/2020/03/11/8AexGF.png)](https://s2.ax1x.com/2020/03/11/8AexGF.png)

[环境变量配置](https://s2.ax1x.com/2020/03/11/8AexGF.png)



初次安装 Android Studio 时会安装 gradle

[![查看 gradle 目录](https://s2.ax1x.com/2020/03/11/8AQOaR.png)](https://s2.ax1x.com/2020/03/11/8AQOaR.png)

[查看 gradle 目录](https://s2.ax1x.com/2020/03/11/8AQOaR.png)


[![查看 gradle 目录](https://s2.ax1x.com/2020/03/11/8AlsF1.png)查看 gradle 目录](https://s2.ax1x.com/2020/03/11/8AlsF1.png)



在上面路径基础上 + \wrapper\dists 你就会看到 gradle 的包了。
例如：C:\Users\86183.gradle + \wrapper\dists

[![gradle包](https://s2.ax1x.com/2020/03/11/8A31Cq.png)](https://s2.ax1x.com/2020/03/11/8A31Cq.png)

[gradle包](https://s2.ax1x.com/2020/03/11/8A31Cq.png)



在系统变量中 path 下添加 gradle/bin 的路径

例如：C:\Users\86183.gradle\wrapper\dists\gradle-5.6.4-all\ankdp27end7byghfw1q2sw75f\gradle-5.6.4\bin

[![gradle](https://s2.ax1x.com/2020/03/11/8ADJYT.png)](https://s2.ax1x.com/2020/03/11/8ADJYT.png)

[gradle](https://s2.ax1x.com/2020/03/11/8ADJYT.png)



## 第一个项目的目录大致认知

- config.xml 配置页，配置起始页项目名称等基础内容
- hooks 存放一些自定义扩展功能
- platforms 存放添加的 platform 运行时
- plugins 存放引入的插件
- www 开发的 HTML5 目录

实际打包文件 ：platforms /android/app/src/main/assets/www



## Cordova 事件的基本监听

### Cordova 插件和事件说明

Cordova 对于设备功能的封装，都是以事件或插件体现的

插件即 plugin，封装了设备提供的功能，如摄像头、通讯录、GPS 等，他们是以自定义的 js 根对象或者覆盖标准对象的方式提供的，插件需要单独安装才能使用。

### Cordova 事件概览

| 事件名称    | 说明                               |
| :---------- | :--------------------------------- |
| deviceready | 当 Cordova 加载完成后该事件被触发  |
| pause       | 当应用程序被置于后台，则触发此事件 |
| resume      | 当应用程序从后台返回，则触发此事件 |
| backbutton  | 当按下后退按钮时，则触发此事件     |
| ……          | ……                                 |

### Cordova 事件的使用

所有的事件调用方式类似，通过 js 进行事件监听即可（addEventListener）

```
document.addEventListener("deviceready", onDeviceReady,false);function onDeviceReady() {  document.addEventListener("pause", onPause, false);  document.addEventListener("resume", onResume, false);  document.addEventListener("menubutton", onMenuKeyDown, false);  //给其他事件添加类似的监听}
```

### Cordova 应用启动流程

html 页面加载流程
1、原生代码启动
2、splashscreen
3、load html
4、顺序执行 JavaScript => cordova.js 也执行
5、$(document).ready() 执行，cordova 中的事件不一定可用。
6、注册 deviceready 事件

代码示例：

```
/* * Cordova 对于设备 api 的封装，都是以 插件 和 事件 的方式体现的 * Cordova 中对于事件的监听，都类似 *//* * 1、deviceready 设备 api 准备就绪时，执行 * 基于设备 api 的一些底层事件 或方法，都要在 deviceready 事件调用完成后，执行 * 2、pause 当应用挂起进入后台时，调用执行 * 3、resume 当应用回到最前面时，调用执行 * 4、backbutton 当返回键被点击时，调用 *//* * deviceready 设备 api 准备就绪时，调用 * 参数1：事件名 * 参数2：回调函数 * 参数3：是否在捕获阶段执行，默认 false（冒泡阶段执行），直接默认即可 */// 等待是底层 cordova 相关的一些设备代码的加载
```

```javascript
document.addEventListener('deviceready', function () {
  log('设备api准备就绪, 可以进行其他方法的调用 或者 事件的监听')
  // 添加应用挂起监听
  document.addEventListener('pause', function () {
    log('应用程序被挂起了')
  })
  document.addEventListener('resume', function () {
    log('应用程序回来了')
  })
  document.addEventListener('backbutton', function () {
    log('返回键被点击了')
  })
})
// 输出日志内容到屏幕body中
function log(msg) {
  var p = document.createElement('p')
  p.style.fontSize = '14px'
  p.innerHTML = msg
  // 输出到 body 中
  document.body.appendChild(p)
}

```



## 卸载插件

```
cordova plugin rm cordova-plugin-network-information
```

## Cordova 插件的使用

### 设备

1、安装插件

```
cordova plugin add cordova-plugin-device
```

### 网络

1、安装插件

```
cordova plugin add cordova-plugin-network-information
```

### 设备位置

1、安装插件

```
cordova plugin add cordova-plugin-geolocation
```

### 文件

1、安装插件

```
cordova plugin add cordova-plugin-file-transfer // 文件传输插件cordova plugin add cordova-plugin-file // 文件插件
```

### 

## Config.xml

更改名称

```
<widget ...>  <name>HelloCordova</name></widget>
```

更改描述

```
<widget ...>  <description>A sample Apache Cordova application</description></widget>
```

更改图标

```
<widget ...>  <icon src="res/icon.png" /></widget>
```

## cordova vue

把 vue 项目打包成 app：

1、npm run build （注意：图片 目录的路径）

2、把 vue 打包后的静态资源复制到 cordova 项目里面

3、运行 cordova prepare

注意：

vue init webpack-simple 项目名称

 修改：webpack.config.js 里面 publicPath

 把 publicPath：’/dist’’ 改为 publicPath：’dist/‘

 修改 index 里面引入 dist 的路径 去掉前面的 / （重要）

vue init webpack 项目名称

 修改：config/index.js 把 assetsPublicPath: ‘/‘, 修改成 assetsPublicPath: ‘./‘



## 使用Cordova打包vue项目的流程

### 拉取最新项目代码

> git pull



### 打包dist 文件

> npm run sit



### 修改www文件夹

将打包好的dist文件夹里面的文件复制到Cordova项目www文件夹内



### 打包安卓apk

>  cordova build android --release 
>
>  //可以一起执行 
>
>  sudo cordova build android --release && jarsigner -verbose -keystore webteacher -signedjar gfy_signed.apk /Users/it/code/teacher-app/webapp-teacher/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk key0



#### android签名

https://ask.dcloud.net.cn/article/35777

```bash
cordova platform add android@6.2.0
```

#### 解决报错：

```
Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK - Android

cordova platform rm android
cordova platform add android@6.2.0
```

[参考链接](https://stackoverflow.com/questions/42613882/error-could-not-find-gradle-wrapper-within-android-sdk-might-need-to-update-yo)

#### 签名：

```bash
cordova build android --release -- --keystore="..\my-store\gfy.keystore" --storePassword=123456 --alias=gfy
```

#### 生成签名证书

使用keytool -genkey命令生成证书：

```
复制代码keytool -genkey -alias testalias -keyalg RSA -keysize 2048 -validity 36500 -keystore test.keystore
```

- testalias是证书别名，可修改为自己想设置的字符，建议使用英文字母和数字
- test.keystore是证书文件名称，可修改为自己想设置的文件名称，也可以指定完整文件路径
- 36500是证书的有效期，表示100年有效期，单位天，建议时间设置长一点，避免证书过期



给apk包签名，使用jarsigner工具的命令格式是：

```
jarsigner的命令格式

jarsigner -verbose -keystore [您的私钥存放路径] -signedjar [签名后文件存放路径] [未签名的文件路径] [您的证书名称]

#jarsigner的参数说明

-keystore 参数指定您的私钥的绝对路径，例如：c:\mykeystore
-signedjar 参数指定签名后apk文件存放绝对的路径，例如 c:\signed.apk
[未签名的文件路径] 指定要签名apk文件的绝对路径，也就是您从我们这里下载到的，例如 c:\unsigned.apk
[您的证书名称] 是指您创建密钥时，您设置的证书名称
```

参考：[使用jarsigner工具签名](https://blog.csdn.net/qq_36267538/article/details/84971948)，[Android-APK签名工具-jarsigner和apksigner](https://www.jianshu.com/p/53078d03c9bf)



### 打包ios ipa

>   cordova build ios 

再运行xcode，打开Cordova ios 文件夹，在xcode执行一次build

### 优化apk：

```bash
zipalign -v 4 android-release.apk.apk ai-learn.apk
```

**阿里云镜像**

```
maven{url 'http://maven.aliyun.com/nexus/content/groups/public/'}

maven{ url "https://jitpack.io"}

google()

jcenter()
```

**全朗e家打包命令（Android）**

```
sudo cordova build android --release && jarsigner -verbose -keystore gfy.keystore-signedjar gfy_praent.apk /Users/it/code/prod/parent-community_android/cordova-parent/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk gfy
```

**教师app打包命令（Android）**

```
sudo cordova build android --release && jarsigner -verbose -keystore webteacher -signedjar gfy_signed.apk /Users/it/code/teacher-app/webapp-teacher/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk key0
```



## 问题解决记录

#### cordova禁止横屏

https://blog.csdn.net/u010377383/article/details/77930198

在config.xml

```
<preference name="orientation" value="portrait" />
```

#### Could not find tools.jar 问题处理

Android 打包遇到

```swift
Could not find tools.jar
Please check that /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home contains a valid JDK installation.
```

##### 解决方案:

**最简单的就直接把JDK文件夹中的tools.jar复制到了jre\lib下**

1、首先查看地址

```swift
// 查看java版本
java -version

// 查看java安装路径
java -verbose

// 查看 JDK 位置的命令
/usr/libexec/java_home -V（升级 OSX11.0.1 后，执行这个命令可能看到两个路径，一个是 JDK 的实际路径，另一个是：/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home,(网上有资料说这个是 JRE 的路径）。
```

2、手动复制 tools.jar,下面第一个路径改为第一步获取的自己的路径

```undefined
sudo cp /Library/Java/JavaVirtualMachines/jdk1.8.0_191.jdk/Contents/Home/lib/tools.jar /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/lib
```

这里的版本号要替换成第一条指令查询到的版本，之后授权即可

#### Android高版本http网络请求失败的Cordova配置处理

https://www.jianshu.com/p/12ab6718e81c

`cordovaApp\platforms\android\app\src\main\AndroidManifest.xml`的文件里添加如下代码

```xml
<application android:usesCleartextTraffic="true">
```

