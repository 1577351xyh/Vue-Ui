const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.be.ok;
    }),
    it('接收span.', () => {
            const divs = document.createElement('div');
            document.body.appendChild(divs);
            const Constructor = Vue.extend(Col);
            const vm = new Constructor({
                propsData: {
                    span: 1
                }
            }).$mount(divs);
            const element = vm.$el;
            expect(vm.$el.classList.contains('col-1')).to.eq(true);
            divs.remove();
            vm.$destroy()
    }),
    it('接收offset.', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('offset-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    }),
    it('接收pc', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                pc:{span:1}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('col-pc-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
    it('接收ipad', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                ipad: {span:1}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    })
});


