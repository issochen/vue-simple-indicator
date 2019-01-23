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
```
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
      // this.$indic.show()
      // this.$indic.show('loading...')
      // this.$indic.show({text: 'loading', autoClose: 2000})
      // this.$indic.show({text: 'loading'}, {background: 'red'})
      // this.$indic.show({text:'loading',type: 'bounce'})  //  spinner effect  bounce  
      this.$indic.show({type: 'bounce'})  //  spinner effect  bounce  
    },
    hidden () {
      this.$indic.hidden()
    }
  }
}
</script>
```
