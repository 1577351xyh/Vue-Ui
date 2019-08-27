import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('x-button',Button);
Vue.component('x-icon',Icon);
Vue.component('x-button-group',ButtonGroup);
new Vue({
    el:"#app",
    data:{
        loading1:false
    }
});
import chai from 'chai'
const expect = chai.expect;

{
    //构造函数
    const Constructor = Vue.extend(Button);
    //实例化对象
    const button = new Constructor({
        propsData:{
            icon:'settings'
        }
    });
    // set元素
    button.$mount('#text');
    console.log(button)
    let uesElement = button.$el.querySelector('use');
    let href = uesElement.getAttribute('xlink:href');
    // 断言是#icon-set
    expect(href).to.eq('#i-settings')
    button.$el.remove();
    button.$destroy();
}

{
    //构造函数
    const Constructor = Vue.extend(Button);
    //实例化对象
    const button = new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    });
    // set元素
    button.$mount();
    let uesElement = button.$el.querySelector('use');
    let href = uesElement.getAttribute('xlink:href');
    // 断言是#icon-loading
    expect(href).to.eq('#i-loading')
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'
        }
    })
    button.$mount(div)
    let svg  = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
}
