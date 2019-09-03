import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('x-button',Button);
Vue.component('x-icon',Icon);
Vue.component('x-button-group',ButtonGroup);
Vue.component('x-input',Input);
new Vue({
    el:"#app",
    data:{
        loading1:false
    },
    methods:{
        changes(e){
            console.log(e)
        }
    }
});
