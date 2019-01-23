import Vue from 'vue'
import App from './App.vue'

import Indicator from './plugins/Indicator'
Vue.use(Indicator)

new Vue({
  el: '#app',
  render: h => h(App)
})
