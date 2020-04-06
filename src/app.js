import Vue from 'vue'
import pathout from '/layout/pathOut'
import router from '/utils/router'
import '/style/common'
new Vue({
  router,
  render: h => h(pathout),
}).$mount('#app')
