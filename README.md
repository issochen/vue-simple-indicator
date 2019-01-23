# vue-simple-indicator
  基于vue2的移动端 indicator 插件。
## 效果图
![效果图](http://www.chenshujin.cn/blog-resources/vueIndicator/indicatorGif.gif)
## 使用
安装:
```
 npm install --save vue-simple-indicator
```
引入:
```
import Indicator from 'vue-simple-indicator'
Vue.use(Indicator)
```
在组件中使用
```javascript
<template>
  <div id="app">
    <button @click="show">show</button>
    <button @click="hidden">hidden</button>
  </div>
</template>

<script>
export default {
  methods: {
    show () {
      this.$indic.show()
    },
    hidden () {
      this.$indic.hidden()
    }
  }
}
</script>
```
## 配置
```javascript
this.$indic.show([options],[styles])
```
options 参数
> * text 显示的文字消息
> * autoClose 自动关闭的时间  单位 毫秒
> * type 显示loading动画 默认: spinner 其他选项 effect bounce

![spinner](http://www.chenshujin.cn/blog-resources/vueIndicator/spinner.gif)
![effect](http://www.chenshujin.cn/blog-resources/vueIndicator/effect.gif)
![bounce](http://www.chenshujin.cn/blog-resources/vueIndicator/bounce.gif)

styles 参数
> * 例: { background: 'red' } 可自行修改indicator样式
