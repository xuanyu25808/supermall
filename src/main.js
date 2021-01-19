import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//弹窗toast插件使用
import toast from 'components/common/toast'
Vue.use(toast)

// 解决移动端300ms延迟   安装->导入->attach即可
import FastClick from 'fastclick';
FastClick.attach(document.body)

// 懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:require('./assets/images/common/xuanyu.png')
})

Vue.config.productionTip = false

// 创建一个bus总线
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
