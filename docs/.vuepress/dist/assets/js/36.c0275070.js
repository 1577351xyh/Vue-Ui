(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{341:function(t,n,o){"use strict";o.r(n);o(32),o(34);var e=o(82),r=o(213),p={components:{GButton:e.a,GPopover:r.a},data:function(){return{content:'\n        <g-popover trigger="hover">\n          <g-button>上方弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n        <g-popover position="bottom" trigger="hover">\n          <g-button>下方弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n        <g-popover position="left" trigger="hover">\n          <g-button>左边弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n        <g-popover position="right" trigger="hover">\n          <g-button>右边弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n    '.replace(/^ {8}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast('<strong style="color:red;">加粗的提示</strong>',{enableHtml:!0})}}},v=o(1),g=Object(v.a)(p,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[t._v("触发方式hover")]),t._v(" "),t._m(0),t._v(" "),o("g-popover",{attrs:{trigger:"hover"}},[o("g-button",[t._v("上方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n      弹出内容\n    ")])],2),t._v(" "),o("g-popover",{attrs:{position:"bottom",trigger:"hover"}},[o("g-button",[t._v("下方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n      弹出内容\n    ")])],2),t._v(" "),o("g-popover",{attrs:{position:"left",trigger:"hover"}},[o("g-button",[t._v("左边弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n      弹出内容\n    ")])],2),t._v(" "),o("g-popover",{attrs:{position:"right",trigger:"hover"}},[o("g-button",[t._v("右边弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n      弹出内容\n    ")])],2),t._v(" "),t._m(1),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,null,null);n.default=g.exports}}]);