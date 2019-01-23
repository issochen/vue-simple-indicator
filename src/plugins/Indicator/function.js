import Vue from 'vue'
import Component from './func-indicator'   // 引入扩展之后的 Indicator 组件

const IndicatorConstructor = Vue.extend(Component)  // 创建 indicator组件的扩展实例构造器

let instance
let haveInstance = false  // 强制页面只能有一个 indicator
const show = (opts, style) => {    //创建 动态生成 indicator组件的方法
  // console.log(Vue.prototype.$isServer)  
  if (Vue.prototype.$isServer || haveInstance) return  //判断是否是服务端渲染 因为服务端不能对dom节点进行增删改
  // opts 为 组件内 this.$indic.show()传入的参数 可自行定制
  let num
  if ( !opts ) {
    num = { }
  } else if ( typeof opts === 'string' ) {
    num = { text: opts }
  } else if ( opts.constructor === Object ) {
    if ( !opts.autoClose ) {
      num = opts
    } else {
      num = opts
      num.isTimer = true
    }
  }
  // style 为组件内 this.$indic.show() 传入的样式参数
  let indicSty
  if (!style) {
    indicSty = {}
  } else {
    indicSty = style
  }
  // 实例indicator扩展组件的构造器 创建新的继承Indicator组件的vue组件
  instance = new IndicatorConstructor({
    propsData: {    // 将opts参数除 indicator显示时间 之外其他 均传入 组件的props中
      ...num
    },
    data () {
      return {
        indicSty
      }
    }
  })
  // 将组件挂载到Vue上并赋予给属性 vm
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)  //将dom节点添加到页面中
  haveInstance = true
  instance.visible = true    // 将组件的visible 值改为true 便于触发transition 的 @after-enter 方法
  instance.vm.$on('closed', () => {   //监听closed方法
    haveInstance = false
    document.body.removeChild(instance.vm.$el)  // 将页面的 indicator组件节点清除
    instance.vm.$destroy()   // 销毁组件
  })
  return instance
}

const  hidden = () => {
  if (!instance) return
  instance.visible = false
}

export default { show, hidden }   // 导出 动态生成 indicator组件的方法