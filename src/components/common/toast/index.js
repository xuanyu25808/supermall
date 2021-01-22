/**
 * 创建一个toast插件
 * 可以在到处调用
 *
 * **/
// 还是需要这个模板的
// 插件里用的方法或者数据都是在这个模板中  一般都是使用方法
import Toast from './Toast'

const obj = {}

//需要在main.js中先引入这个文件,并且use一下，会把Vue实例传过来
obj.install = function(Vue){
  // 1.创建组件构造器
  const toastConstructor =  Vue.extend(Toast)

  // 2.new的方式，根据组件构造器，可以创建一个组件对象
  const toast = new toastConstructor()

  //3.讲组件对象，手动挂载到某一个元素上，例div
  toast.$mount(document.createElement('div'))

  //4.  toast.$el就是这个div,挂载在body上面
   document.body.appendChild(toast.$el)

   Vue.prototype.$toast = toast
}

export default obj
