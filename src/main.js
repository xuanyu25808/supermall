import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 创建一个bus总线
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
