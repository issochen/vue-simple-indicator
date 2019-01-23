import Indicator from './Indicator.vue'  // 引入编写的indicator组件
import indic from  './function'          // 引入动态生成 indicator组件的方法

export default Vue => {
  Vue.component(Indicator.name, Indicator)   // 创建 Vue全局组件
  Vue.prototype.$indic = indic               // 将动态创建Indicator组件方法挂载在Vue原型上
}

