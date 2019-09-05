const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    //一个类的行为和属性(他可以干嘛干嘛)
    it('存在.', () => {
        expect(Input).to.exist
    });
    describe('props',()=>{
       const Constructor = Vue.extend(Input);
       let vm;
        afterEach(()=>{
            vm.$destroy()
        });
        //给测试用例分组(props)
    it('可以接收value', () => {
         vm = new Constructor({
            propsData: {
                value: '1234'
            }
        }).$mount();
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
    });
    it('可以接收disabled', () => {
         vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount();
        const inputElement = vm.$el.querySelector('input');
        expect(inputElement.disabled).to.equal(true);
        vm.$destroy()
    });
    it('可以接收readonly', () => {
         vm = new Constructor({
            propsData: {
                readonly: true
            }
        }).$mount();
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.readOnly).to.equal(true)
    });
    it('可以接收error', () => {
         vm = new Constructor({
            propsData: {
                error: '你错了'
            }
        }).$mount();
        const useElement = vm.$el.querySelector('use');
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
        const errorMessage = vm.$el.querySelector('.errorMessage');
        expect(errorMessage.innerText).to.equal('你错了')
    })
    });
    describe('事件',()=>{
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy()
        });
        it('支持change/input/focus/blur事件', () => {
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on(eventName,callback);
                //触发change事件(模拟了用户操作)
                let event = new Event(eventName);
                Object.defineProperty(
                    event,'target',{
                        value:{value:'hi'},
                        enumerable:true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('hi');
            });
        });
        // it('支持input事件', () => {
        //     vm = new Constructor({}).$mount();
        //     const callback = sinon.fake();
        //     vm.$on('input',callback);
        //     //触发change事件(模拟了用户操作)
        //     let event = new Event('input');
        //     let inputElement = vm.$el.querySelector('input');
        //     inputElement.dispatchEvent(event);
        //     expect(callback).to.have.been.calledWith(event);
        // });
    })
});
