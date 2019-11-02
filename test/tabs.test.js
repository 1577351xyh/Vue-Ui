const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'

Vue.component('x-tabs',Tabs);
Vue.component('x-tabs-head',TabsHead);
Vue.component('x-tabs-body',TabsBody);
Vue.component('x-tabs-head',TabsHead);
Vue.component('x-tabs-pane',TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {
    //BDD 行为测试驱动
    it('存在.', () => {
        expect(Tabs).to.be.ok
    });
  //   it('接收selected props', (done) => {
  //       const div = document.createElement('div')
  //       document.body.appendChild(div);
  //       div.innerHTML=`
  //       <x-tabs selected="finance">
  //     <x-tabs-head>
  //        <x-tabs-item name="woman">美女1</x-tabs-item>
  //        <x-tabs-item name="sports">体育1</x-tabs-item>
  //        <x-tabs-item name="finance">财经1</x-tabs-item>
  //     </x-tabs-head>
  //     <x-tabs-body>
  //        <x-tabs-pane name="woman">美女资讯1</x-tabs-pane>
  //        <x-tabs-pane name="sports">体育资讯1</x-tabs-pane>
  //        <x-tabs-pane name="finance">财经资讯1</x-tabs-pane>
  //     </x-tabs-body>
  // </x-tabs>
  //       `;
  //       let vm = new Vue({
  //           el:div
  //       });
  //       vm.$nextTick(()=>{
  //           let x = vm.$el.querySelector('.tabs-item:nth-child(3)');
  //           expect(x.classList.contains('active')).to.be.true;
  //           done()
  //       })
  //
  //   })
});
