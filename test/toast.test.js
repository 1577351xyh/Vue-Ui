const expect = chai.expect;
import Vue from 'vue'
import Toast from  '../src/toast'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props',function () {
        it('可以接收autoClose', (done) => {
            let div = document.createElement('div');
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData:{
                    autoClose:true,
                    autoCloseDelay:1
                }
            }).$mount(div);
            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(false);
                done();
            },1000)
        });
    })
});
