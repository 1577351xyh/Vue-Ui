(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{286:function(t,n,o){"use strict";var i=o(1),c=o(275).trim;i({target:"String",proto:!0,forced:o(287)("trim")},{trim:function(){return c(this)}})},287:function(t,n,o){var i=o(2),c=o(274);t.exports=function(t){return i((function(){return!!c[t]()||"​᠎"!="​᠎"[t]()||c[t].name!==t}))}},375:function(t,n,o){},376:function(t,n,o){},467:function(t,n,o){"use strict";var i=o(375);o.n(i).a},468:function(t,n,o){"use strict";var i=o(376);o.n(i).a},506:function(t,n,o){"use strict";o.r(n);o(37),o(57),o(286);var i=o(388),c=o(285);o(0).a.use(i.a);var e={components:{GButton:c.a},data:function(){return{content:"\n          <div>\n            <g-button @click=\"onClickButton\">上方弹出</g-button>\n          </div>\n\n          methods: {\n            onClickButton () {\n              this.$toast('toast信息', {\n                closeButton: {\n                  text: '知道了',\n                  callback: () => {\n                    console.log('回调触发了')\n                  }\n                }\n              })\n            }\n          },\n      ".replace(/^ {9}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast("toast信息",{closeButton:{text:"知道了",callback:function(){console.log("回调触发了")}}})}}},s=(o(467),o(468),o(34)),u=Object(s.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[this._v("设置关闭按钮")]),this._v(" "),this._m(0),this._v(" "),n("div",[n("g-button",{on:{click:this.onClickButton}},[this._v("上方弹出")])],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])}],!1,null,"69527942",null);n.default=u.exports}}]);