## 原因分析

> 微信自带浏览器会缓存index.html，所以导致里面的`js`、`css`文件等内容，始终都是上个版本的名字，然而我们这边又更新了版本，`js`等名字又是不一样的，所以会存在404的问题，导致一进去白屏的问题

## 解决方案：

> 思路：刷新当前页面，重载`index.html`
>
> 在`/public/`文件夹新增`version.json`文件，当进入全朗e家的时候会请求一个`version.json`的文件，拿到当前的版本号，存到本地；这时会判断，如果请求回来的版本号，和本地的版本号，是否一致，如果相同，则没更新版本不会执行刷新，如果不同，则执行刷新重载；

## version.json

```json
{
    "version": "v2021.2.4.1"
}
```

## 相关代码：

```js
//main.js
function version() {
  let baseurl = window.location.origin + "/version.json"
  axios.get(baseurl)
    .then(function (response) {
      console.log("response", response)
      if (localStorage.hasOwnProperty("version")) {
        if (localStorage.getItem("version") != response.version) {
          localStorage.setItem("version", response.version)
          window.location.reload();
        }
      } else {
        localStorage.setItem("version", response.version)
        window.location.reload();
      }

    })
    .catch(function (error) {
      console.log(error);
    });
}

Vue.prototype.$version = version

//app.vue mounted里面执行
 this.$version();
```

