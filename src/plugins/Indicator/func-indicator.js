import Indicator from './Indicator.vue'   //引入组件

export default {  //导出 扩展后的 Indicator 组件, 用于覆盖或添加一些 属性和方法 便于 方法的编写和使用默认Indicator组件不冲突
  extends: Indicator,
  mounted () {  // 组件挂载完成调用 定时器
    if (this.isTimer) {
      this.createTimer()
    }
  },
  data () {
    return {
      visible: false,
      indicSty: {}
    }
  },
  computed: {
    style () {
      return this.indicSty
    }
  },
  methods: { 
    createTimer () {   // 创建定时器 隐藏 Indicator
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer () {   // 清除定时器方法
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
  },
  beforeDestory () {   //组件销毁之前清除定时器 以免 内存泄漏
    this.clearTimer()
  }
}