(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(t,e,n){},163:function(t,e,n){},164:function(t,e,n){},175:function(t,e,n){"use strict";var a=n(162);n.n(a).a},176:function(t,e,n){"use strict";var a=n(163);n.n(a).a},177:function(t,e,n){"use strict";var a=n(164);n.n(a).a},179:function(t,e,n){"use strict";n(63),n(42),n(64);var a={name:"",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GuluSide"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},i=(n(175),n(29)),s=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"2b5309aa",null);e.a=s.exports},180:function(t,e,n){"use strict";var a={name:""},i=n(29),s=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"22099bcf",null);e.a=s.exports},181:function(t,e,n){"use strict";var a={name:""},i=n(29),s=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)}),[],!1,null,"7deb0a6e",null);e.a=s.exports},182:function(t,e,n){"use strict";var a={name:""},i=(n(176),n(29)),s=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"gulu-content"},[this._t("default")],2)}),[],!1,null,"b9c7143c",null);e.a=s.exports},183:function(t,e,n){"use strict";var a={name:"GuluSide",props:{closeButton:{type:Boolean,default:!1}},data:function(){return{visible:!0}}},i=(n(177),n(29)),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),t.closeButton?n("button",{on:{click:function(e){t.visible=!1}}},[t._v("隐藏")]):t._e()],2):t._e()])}),[],!1,null,"5384795c",null);e.a=s.exports},221:function(t,e,n){},339:function(t,e,n){"use strict";var a=n(221);n.n(a).a},389:function(t,e,n){"use strict";n.r(e);var a=n(179),i=n(180),s=n(181),u=n(182),c=n(183),r={components:{GLayout:a.a,GHeader:i.a,GFooter:s.a,GContent:u.a,GSider:c.a},data:function(){return{}}},l=(n(339),n(29)),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n      content\n    ")]),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("普通上中下三栏布局")])])}],!1,null,"6299cb61",null);e.default=o.exports}}]);