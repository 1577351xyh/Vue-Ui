import Toast from './toast'
let currentToast;



export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue, message, propsData: toastOptions, onClose: () => {
          currentToast = null
        }
      })
    }
  }
}



//构造器类
function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast);
  //实例化构造器tosat对象
  let toast = new Constructor({ propsData, });
  //组件对象solts内容
  toast.$slots.default = [message];
  //添加
  toast.$mount();
  //注册事件
  toast.$on('close', onClose)
  //挂到DOM
  document.body.appendChild(toast.$el)
  return toast;
}
