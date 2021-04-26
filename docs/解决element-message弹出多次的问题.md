## 目的

> message弹出多次，用户体验不好

## 重写`resetMessage.js`

> 在/utils/文件夹新建`resetMessage.js`

```js
/**重置message，防止重复点击重复弹出message弹框 */
import {
    Message
} from 'element-ui';
let messageInstance = null;
const resetMessage = (options) => {
    if (messageInstance) {
        messageInstance.close()
    }
    messageInstance = Message(options)
};
['error', 'success', 'info', 'warning'].forEach(type => {
    resetMessage[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            }
        }
        options.type = type
        return resetMessage(options)
    }
})
export const message = resetMessage
```

## main.js引入

```js
import Element from 'element-ui'
import {message} from '@/utils/resetMessage';
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
// Vue.use(ElementUI)
Vue.prototype.$message = message;
```

## 使用方法

```js
// 在vue组件中调用,跟正常用法一样
this.$message({type:success,message:'提示内容'})
// 在js文件中调用
import { message } from '@/utils/resetMessage'
message({type: 'error',message: '提示内容'})
```