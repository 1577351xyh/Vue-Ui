import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Centent from './content'
import plugin from './plugin'

Vue.component('x-button',Button);
Vue.component('x-icon',Icon);
Vue.component('x-button-group',ButtonGroup);
Vue.component('x-input',Input);
Vue.component('x-row',Row);
Vue.component('x-col',Col);
Vue.component('x-layout',Layout);
Vue.component('x-header',Header);
Vue.component('x-sider',Sider);
Vue.component('x-footer',Footer);
Vue.component('x-centent',Centent);
Vue.use(plugin);

new Vue({
    el:"#app",
    data:{
        loading1:false
    },
    created(){
      this.$toast('我是messageuuuuuudasdasdasdasdasdasdasdasdas',{
          closeButton: {
              text:'关闭',
              callback (toast){
                  console.log('11111')
            }
          },
          position:'middle',
          autoClose:false,
          autoCloseDelay:10
      })
    },
    methods:{
        showToast(){
            this.$toast('holle')
        }
    }
});
