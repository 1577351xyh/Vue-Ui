(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{16:function(t,e,n){},172:function(t,e,n){},173:function(t,e,n){},174:function(t,e,n){},24:function(t,e,n){"use strict";var i=n(11),s=n(42)(!1),c=[].indexOf,l=!!c&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(l||!n(21)(c)),"Array",{indexOf:function(t){return l?c.apply(this,arguments)||0:s(this,t,arguments[1])}})},306:function(t,e,n){"use strict";var i=n(172);n.n(i).a},307:function(t,e,n){"use strict";var i=n(173);n.n(i).a},308:function(t,e,n){"use strict";var i=n(174);n.n(i).a},325:function(t,e,n){"use strict";n.r(e);n(32),n(34),n(69),n(67),n(75),n(59),n(74),n(24);var i={name:"",components:{XIcon:n(39).a},props:{selected:{type:String},autoplay:{type:Boolean,default:!0}},data:function(){return{arrLength:0,lastSelected:void 0,timeId:null}},updated:function(){this.updateChildern()},mounted:function(){this.updateChildern(),this.autoplay&&this.playAutopaly(),this.arrLength=this.items.length},computed:{selectedIndex:function(){var t=this.names.indexOf(this.selected);return-1===t?0:t},names:function(){return this.items.map((function(t){return t.name}))||[]},items:function(){return this.$children.filter((function(t){return"slides"===t.$options.name}))}},methods:{prev:function(){this.selectedClick(this.selectedIndex-1)},next:function(){this.selectedClick(this.selectedIndex+1)},updateChildern:function(){var t=this,e=this.getSelected();this.items.forEach((function(n){var i=!(t.selectedIndex>t.lastSelected);t.timeId&&(t.lastSelected===t.items.length-1&&0===t.selectedIndex&&(i=!1),0===t.lastSelected&&t.lastSelected===t.items.length-1&&(i=!0)),n.reverse=i,t.$nextTick((function(){n.selected=e}))}))},getSelected:function(){var t=this.items[0];return this.selected||t.name},selectedClick:function(t){this.lastSelected=this.selectedIndex,-1===t&&(t=this.names.length-1),t===this.names.length&&(t=0),this.$emit("update:selected",this.names[t])},noPlay:function(){window.clearTimeout(this.timeId),this.timeId=null},plays:function(){this.autoplay&&this.playAutopaly()},playAutopaly:function(){var t=this;if(!this.timeId){this.timeId=setTimeout((function e(){var n=t.names.indexOf(t.getSelected())+1;t.selectedClick(n),t.timeId=setTimeout(e,2e3)}),2e3)}}}},s=(n(306),n(1)),c=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"x-slide",on:{mouseenter:t.noPlay,mouseleave:t.plays}},[n("div",{staticClass:"x-slide-window"},[n("div",{ref:"window",staticClass:"x-slide-warpper"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"slide-dots"},[n("span",{on:{click:t.prev}},[n("x-icon",{attrs:{name:"left"}})],1),t._v(" "),t._l(t.arrLength,(function(e){return n("span",{staticClass:"slide-icon",class:{active:t.selectedIndex===e-1},on:{click:function(n){return t.selectedClick(e-1)}}},[t._v(t._s(e-1))])})),t._v(" "),n("span",{on:{click:t.next}},[n("x-icon",{attrs:{name:"right"}})],1)],2)])}),[],!1,null,"611180ba",null).exports,l={name:"slides",props:{name:{type:String,required:!0}},data:function(){return{selected:void 0,reverse:!1}},computed:{visible:function(){return this.selected===this.name}}},a=(n(307),{components:{GSlides:c,GSlidesItem:Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[this.visible?e("div",{staticClass:"x-slide-item",class:{reverse:this.reverse}},[this._t("default")],2):this._e()])}),[],!1,null,"6117205e",null).exports},data:function(){return{selected:"1",content:'\n        <g-slides :selected.sync="selected" autoplay>\n          <g-slides-item name="1">\n            <div class="box">1</div>\n          </g-slides-item>\n          <g-slides-item name="2">\n            <div class="box">2</div>\n          </g-slides-item>\n          <g-slides-item name="3">\n            <div class="box">3</div>\n          </g-slides-item>\n        </g-slides>\n\n        data: {\n          selected: \'1\'\n        }\n\n        <style lang="scss" scoped>\n          .box{\n            height: 300px;\n            width: 400px;\n            background: blue;\n            color: white;\n            font-size: 30px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n          } \n        </style>\n\n    '.replace(/^ {8}/gm,"").trim()}}}),o=(n(308),Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("简单用法")]),t._v(" "),t._m(0),t._v(" "),n("g-slides",{attrs:{selected:t.selected,autoplay:""},on:{"update:selected":function(e){t.selected=e}}},[n("g-slides-item",{attrs:{name:"1"}},[n("div",{staticClass:"box"},[t._v("1")])]),t._v(" "),n("g-slides-item",{attrs:{name:"2"}},[n("div",{staticClass:"box"},[t._v("2")])]),t._v(" "),n("g-slides-item",{attrs:{name:"3"}},[n("div",{staticClass:"box"},[t._v("3")])])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"1cca8876",null));e.default=o.exports},38:function(t,e,n){var i=n(30),s=n(40),c=n(31),l=n(26),a=n(51);t.exports=function(t,e){var n=1==t,o=2==t,r=3==t,d=4==t,u=6==t,h=5==t||u,f=e||a;return function(e,a,p){for(var v,m,y=c(e),g=s(y),x=i(a,p,3),_=l(g.length),b=0,w=n?f(e,_):o?f(e,0):void 0;_>b;b++)if((h||b in g)&&(m=x(v=g[b],b,y),t))if(n)w[b]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return b;case 2:w.push(v)}else if(d)return!1;return u?-1:r||d?d:w}}},39:function(t,e,n){"use strict";n(24);!function(t){var e,n='<svg><symbol id="icon-ren" viewBox="0 0 1024 1024"><path d="M652.8 534.4C723.2 489.6 768 409.6 768 320c0-140.8-115.2-256-256-256S256 179.2 256 320c0 89.6 44.8 169.6 115.2 214.4C192 592 64 761.6 64 960h64c0-211.2 172.8-384 384-384s384 172.8 384 384h64c0-198.4-128-368-307.2-425.6zM512 512c-105.6 0-192-86.4-192-192s86.4-192 192-192 192 86.4 192 192-86.4 192-192 192z" fill="#333333" ></path></symbol><symbol id="icon-mima" viewBox="0 0 1024 1024"><path d="M800 448v352c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64V448h576m0-64H224c-35.3 0-64 28.7-64 64v352c0 70.7 57.3 128 128 128h448c70.7 0 128-57.3 128-128V448c0-35.3-28.7-64-64-64z"  ></path><path d="M512 160c42.7 0 82.9 16.6 113.1 46.9C655.4 237.1 672 277.3 672 320v64H352v-64c0-42.7 16.6-82.9 46.9-113.1S469.3 160 512 160m0-64c-123.7 0-224 100.3-224 224v128h448V320c0-123.7-100.3-224-224-224zM512 560c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32s32-14.3 32-32V592c0-17.7-14.3-32-32-32z"  ></path></symbol><symbol id="icon-settings" viewBox="0 0 1024 1024"><path d="M848.2028 624.638c61.7667 0 111.9928-50.2538 111.9928-111.9928 0-61.7667-50.2262-111.9949-111.9928-111.9949h-19.414016c-3.9373-11.1831-8.448-22.1194-13.4779-32.7014l13.6704-13.698c21.0811-21.0801 32.7025-49.2165 32.7025-79.1828 0-29.995-11.6214-58.1028-32.7025-79.1839-21.0801-21.1098-49.2165-32.7035-79.1839-32.7035-29.9704 0-58.1048 11.5937-79.1818 32.7035l-13.6704 13.6714c-10.6107-5.033-21.5214-9.5437-32.7311-13.481v-19.412992c0-61.7656-50.2292-111.9939-111.9949-111.9939-61.7636 0-111.9928 50.2282-111.9928 111.9939v19.412992c-11.2118 3.9373-22.1225 8.448-32.7322 13.481l-13.6714-13.6714c-21.077-21.1098-49.2124-32.7035-79.1828-32.7035-29.9663 0-58.0987 11.5937-79.1839 32.7035-21.076 21.0801-32.7014 49.1889-32.7014 79.1839 0 29.9674 11.6255 58.1028 32.7014 79.1828l13.6714 13.6704c-5.0289 10.6097-9.5406 21.5194-13.4779 32.7291h-19.414016c-61.7636 0-111.9928 50.2282-111.9928 111.9949 0 61.739 50.2292 111.9928 111.9928 111.9928h19.414016c3.9373 11.2118 8.449 22.1215 13.4779 32.7291l-13.6714 13.6714c-21.076 21.0811-32.7014 49.1909-32.7014 79.1849 0 29.996 11.6255 58.1028 32.7014 79.1828 21.0852 21.078 49.2175 32.7035 79.1839 32.7035 29.9715 0 58.1059-11.6255 79.1828-32.7035l13.6714-13.6704c10.6097 5.0309 21.5204 9.5119 32.7322 13.4789v19.416064c0 61.7359 50.2292 111.9928 111.9928 111.9928 61.7656 0 111.9949-50.2569 111.9949-111.9928v-19.416064c11.2097-3.967 22.1204-8.448 32.7311-13.5045l13.6704 13.695c21.077 21.078 49.2124 32.7035 79.1818 32.7035 29.9674 0 58.1038-11.6255 79.1839-32.7035 21.0811-21.0801 32.7025-49.1868 32.7025-79.1828 0-29.994-11.6214-58.1038-32.7025-79.1849l-13.6704-13.698c5.0299-10.6076 9.5406-21.5194 13.4779-32.7025H848.202752zM789.3873 710.6294c10.5277 10.5001 16.297 24.5555 16.297 39.594 0 15.0108-5.7692 29.0673-16.297 39.5909-21.0504 21.0278-58.1294 21.0278-79.1808 0l-43.1186-43.1452-18.4842 10.3629c-18.647 10.4172-38.826 18.7556-60.0177 24.7695l-20.3694 5.7723v61.057024c0 30.8675-25.1279 55.9933-55.9985 55.9933s-55.9985-25.1259-55.9985-55.9933v-61.057024l-20.3674-5.7723c-21.2183-6.0416-41.4259-14.3534-60.0156-24.7695l-18.4852-10.3363-43.1206 43.1176c-21.0534 21.0278-58.1294 21.0278-79.1828 0-10.5267-10.5236-16.2939-24.5801-16.2939-39.5909 0-15.0385 5.7672-29.0939 16.2939-39.594l43.1176-43.1165-10.3588-18.4852c-10.3916-18.5907-18.7054-38.7697-24.746-60.0412l-5.7733-20.3448h-61.053951999999995c-30.8695 0-55.9954-25.1279-55.9954-55.9964 0-30.8705 25.1249-55.9985 55.9954-55.9985h61.053951999999995l5.7733-20.3704c6.0406-21.2449 14.3544-41.4505 24.746-60.0156l10.3588-18.4832-43.1176-43.1186c-10.5267-10.5277-16.2939-24.5811-16.2939-39.5919 0-15.0395 5.7672-29.0939 16.2939-39.5919 21.0545-21.0278 58.1304-21.0278 79.1828 0l43.1206 43.1176 18.4852-10.3608c18.5897-10.3905 38.7983-18.731 60.0156-24.746l20.3674-5.7702v-61.056000000000004c0-30.8951 25.1279-55.9964 55.9985-55.9964s55.9985 25.1013 55.9985 55.9964v61.056000000000004l20.3694 5.7702c21.1917 6.016 41.3706 14.3278 60.0177 24.7716l18.4842 10.3352 43.1186-43.1176c21.0524-21.0278 58.1315-21.0278 79.1808 0 10.5277 10.498 16.297 24.5524 16.297 39.5919 0 15.0108-5.7692 29.0642-16.297 39.5919l-43.0909 43.1186 10.3076 18.4832c10.4479 18.6737 18.7832 38.8813 24.7706 60.0156l5.7733 20.3704h61.053951999999995c30.8695 0 55.9974 25.1279 55.9974 55.9985 0 30.8685-25.1279 55.9964-55.9974 55.9964h-61.053951999999995l-5.7733 20.3448c-5.9884 21.161-14.3227 41.342-24.7706 60.0412l-10.3076 18.4852L789.3873 710.6294zM512.2181 344.6528c-92.6372 0-167.9913 75.3551-167.9913 167.9923 0 92.6351 75.3541 167.9913 167.9913 167.9913s167.9913-75.3562 167.9913-167.9913C680.2094 420.0079 604.8553 344.6528 512.2181 344.6528zM512.2181 624.638c-61.7636 0-111.9928-50.2538-111.9928-111.9928 0-61.7667 50.2292-111.9949 111.9928-111.9949 61.7656 0 111.9949 50.2282 111.9949 111.9949C624.213 574.3841 573.9848 624.638 512.2181 624.638z"  ></path></symbol><symbol id="icon-xia" viewBox="0 0 1024 1024"><path d="M856.51342222 293.88913778c10.88967111 0 14.09934222 6.84714667 7.12704 15.21436444l-338.78584889 406.63267556c-6.97230222 8.36835555-18.37966222 8.36835555-25.35082666 0l-338.78584889-406.63267556c-6.97230222-8.36835555-3.76490667-15.21436445 7.12704-15.21436444l688.66844444 0z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M748.3 533.3c0.1-0.2 0.3-0.4 0.4-0.6 0.2-0.3 0.5-0.7 0.7-1 0.1-0.1 0.2-0.3 0.2-0.4 0.3-0.4 0.5-0.8 0.8-1.2l0.1-0.1c2.6-4.6 4.1-9.6 4.6-14.7v-0.2c0-0.5 0.1-0.9 0.1-1.4v-0.6-1-1-0.6c0-0.5-0.1-0.9-0.1-1.4v-0.2c-0.4-5.1-2-10.1-4.6-14.7l-0.1-0.1c-0.2-0.4-0.5-0.8-0.8-1.3-0.1-0.1-0.2-0.3-0.2-0.4-0.2-0.3-0.4-0.7-0.7-1-0.1-0.2-0.3-0.4-0.4-0.6-0.2-0.3-0.4-0.5-0.6-0.8-0.2-0.2-0.4-0.5-0.6-0.7-0.1-0.1-0.2-0.2-0.3-0.4-0.1-0.1-0.2-0.2-0.2-0.3-0.2-0.3-0.5-0.5-0.7-0.8-0.2-0.2-0.4-0.4-0.5-0.6l-0.7-0.7-0.6-0.6c-0.2-0.2-0.5-0.4-0.7-0.7l-0.6-0.6-0.3-0.3-414.6-347.6c-15.2-12.7-38-10.7-50.7 4.4-12.7 15.2-10.7 38 4.4 50.7L663.2 512 281.6 832.2c-15.2 12.7-17.2 35.6-4.4 50.7 12.7 15.2 35.6 17.2 50.7 4.4l414.4-347.7 0.3-0.3 0.6-0.6c0.2-0.2 0.5-0.4 0.7-0.7l0.6-0.6 0.7-0.7c0.2-0.2 0.4-0.4 0.5-0.6 0.2-0.3 0.5-0.5 0.7-0.8 0.1-0.1 0.2-0.2 0.2-0.3 0.1-0.1 0.2-0.2 0.3-0.4 0.2-0.2 0.4-0.5 0.6-0.7 0.4-0.1 0.6-0.4 0.8-0.6z"  ></path></symbol><symbol id="icon-shang" viewBox="0 0 1024 1024"><path d="M134.93839925 696.76191147l377.06160075-377.06160072 377.06160075 377.06160072z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M512 285.87350725a34.521021 34.521021 0 0 1-34.521021-34.52102101V104.65195677a34.521021 34.521021 0 1 1 69.042042 0v146.70052947c0 19.11083742-15.46541765 34.521021-34.521021 34.52102101z" fill="#000000" ></path><path d="M398.93675298 316.19677172a34.521021 34.521021 0 0 1-47.11428802-12.59326831l-73.35026539-127.03735657a34.521021 34.521021 0 0 1 59.70755762-34.52101971l73.35026409 127.03735527a34.46578693 34.46578693 0 0 1-12.5932683 47.11428932z" fill="#000000" ></path><path d="M316.19677172 398.93675298a34.46578693 34.46578693 0 0 1-47.11428932 12.5932683l-127.03735527-73.35026409a34.46578693 34.46578693 0 1 1 34.52101971-59.70755762l127.03735657 73.35026539c16.45962305 9.50018529 22.0934536 30.65466627 12.59326831 47.11428802z" fill="#000000" ></path><path d="M285.87350725 512c0 19.05560336-15.46541765 34.521021-34.52102101 34.521021H104.65195677a34.521021 34.521021 0 1 1 0-69.042042h146.70052947c19.11083742 0 34.521021 15.46541765 34.52102101 34.521021z" fill="#000000" ></path><path d="M316.19677172 625.06324702a34.521021 34.521021 0 0 1-12.59326831 47.11428802l-127.03735657 73.35026539a34.521021 34.521021 0 0 1-34.52101971-59.70755762l127.03735527-73.35026409a34.46578693 34.46578693 0 0 1 47.11428932 12.5932683z" fill="#000000" ></path><path d="M398.93675298 707.80322828a34.46578693 34.46578693 0 0 1 12.5932683 47.11428932l-73.35026409 127.03735527a34.46578693 34.46578693 0 1 1-59.70755762-34.52101971l73.35026539-127.03735657a34.521021 34.521021 0 0 1 47.11428802-12.59326831z" fill="#000000" ></path><path d="M512 738.12649275c19.05560336 0 34.521021 15.46541765 34.521021 34.52102101v146.70052947a34.521021 34.521021 0 1 1-69.042042 0v-146.70052947c0-19.11083742 15.46541765-34.521021 34.521021-34.52102101z" fill="#000000" ></path><path d="M625.06324702 707.80322828a34.521021 34.521021 0 0 1 47.11428802 12.59326831l73.35026539 127.03735657a34.521021 34.521021 0 0 1-59.70755762 34.52101971l-73.35026409-127.03735527a34.46578693 34.46578693 0 0 1 12.5932683-47.11428932z" fill="#000000" ></path><path d="M707.80322828 625.06324702a34.46578693 34.46578693 0 0 1 47.11428932-12.5932683l127.03735527 73.35026409a34.46578693 34.46578693 0 1 1-34.52101971 59.70755762l-127.03735657-73.35026539a34.521021 34.521021 0 0 1-12.59326831-47.11428802z" fill="#000000" ></path><path d="M738.12649275 512c0-19.05560336 15.46541765-34.521021 34.52102101-34.521021h146.70052947a34.521021 34.521021 0 1 1 0 69.042042h-146.70052947a34.521021 34.521021 0 0 1-34.52102101-34.521021z" fill="#000000" ></path><path d="M707.80322828 398.93675298a34.521021 34.521021 0 0 1 12.59326831-47.11428802l127.03735657-73.35026539a34.521021 34.521021 0 0 1 34.52101971 59.70755762l-127.03735527 73.35026409a34.46578693 34.46578693 0 0 1-47.11428932-12.5932683z" fill="#000000" ></path><path d="M625.06324702 316.19677172a34.46578693 34.46578693 0 0 1-12.5932683-47.11428932l73.35026409-127.03735527a34.46578693 34.46578693 0 1 1 59.70755762 34.52101971l-73.35026539 127.03735657a34.521021 34.521021 0 0 1-47.11428802 12.59326831z" fill="#000000" ></path></symbol></svg>';if((e=document.getElementsByTagName("script"))[e.length-1].getAttribute("data-injectcss")&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}!function(e){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(e,0);else{document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t,!1),e()}),!1)}else document.attachEvent&&(i=e,s=t.document,c=!1,(l=function(){try{s.documentElement.doScroll("left")}catch(t){return void setTimeout(l,50)}n()})(),s.onreadystatechange=function(){"complete"==s.readyState&&(s.onreadystatechange=null,n())});function n(){c||(c=!0,i())}var i,s,c,l}((function(){var t,e,i,s,c,l;(t=document.createElement("div")).innerHTML=n,n=null,(e=t.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",i=e,(s=document.body).firstChild?(c=i,(l=s.firstChild).parentNode.insertBefore(c,l)):s.appendChild(i))}))}(window);var i={props:["name"]},s=(n(41),n(1)),c=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"x-icon",on:{click:function(e){return t.$emit("click",e)}}},[n("use",{attrs:{"xlink:href":"#icon-"+t.name}})])}),[],!1,null,"258be6da",null);e.a=c.exports},41:function(t,e,n){"use strict";var i=n(16);n.n(i).a},51:function(t,e,n){var i=n(52);t.exports=function(t,e){return new(i(t))(e)}},52:function(t,e,n){var i=n(15),s=n(70),c=n(19)("species");t.exports=function(t){var e;return s(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!s(e.prototype)||(e=void 0),i(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},59:function(t,e,n){var i=n(23).f,s=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in s||n(14)&&i(s,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},67:function(t,e,n){"use strict";var i=n(11),s=n(38)(0),c=n(21)([].forEach,!0);i(i.P+i.F*!c,"Array",{forEach:function(t){return s(this,t,arguments[1])}})},74:function(t,e,n){"use strict";var i=n(11),s=n(38)(1);i(i.P+i.F*!n(21)([].map,!0),"Array",{map:function(t){return s(this,t,arguments[1])}})},75:function(t,e,n){"use strict";var i=n(11),s=n(38)(2);i(i.P+i.F*!n(21)([].filter,!0),"Array",{filter:function(t){return s(this,t,arguments[1])}})}}]);