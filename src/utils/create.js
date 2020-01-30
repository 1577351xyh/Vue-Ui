import Vue from 'vue'
export default function create(Component,props) {
    //创建一个独立的vue实例
    const vm = new Vue({
        render(h){
            //h是createElment的简写,创建虚拟dom
            return h(Component,{props})
        }
    }).$mount();//挂载

    //手动挂载
    document.body.appendChild(vm.$el);
    //销毁
    const comp = vm.$children[0];
    comp.remove = function (){
        ducoment.body.removeChild(vm.$el);
        vm.$destroy();//销毁
    };
    return comp;
}
