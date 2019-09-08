const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from  '../src/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {

    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('接收gutter.', (done) => {
        Vue.component('x-row',Row);
        Vue.component('x-col',Col);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `<x-row gutter="20">   
                <x-col span="12"></x-col>
                <x-col span="12"></x-col>
            </x-row>`
        const vm = new Vue({
            el:div
        });
        setTimeout( ()=> {
            const row = document.getElementsByClassName('row')[0];
            expect(window.getComputedStyle(row).marginLeft).to.eq('-10px');
            expect(window.getComputedStyle(row).marginRight).to.eq('-10px');
            // const cols = vm.$el.querySelector('.col');
            const cols = document.getElementsByClassName('col');
            expect(window.getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(window.getComputedStyle(cols[1]).paddingRight).to.eq('10px')
            done();
        },1000);
    })
});
