(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{533:function(t,e,r){"use strict";r.r(e);r(14),r(11),r(12),r(10),r(13),r(51);var n=r(22),c=r(1),o=(r(26),r(153)),l=r(45),d=r(154),f=r(117),y=r.n(f);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{TopicList:d.a},data:function(){for(var t=parseInt(this.$route.params.id),e=[],i=0;i<5;i++)e.push(i);return{id:isNaN(t)?null:t,categories:[],list:e,category:null}},computed:{breadcrumbCategory:function(){for(var t=[{text:this.category.name,href:"/category/".concat(this.category.id)}],e=this.category.parent;e;){var r=this.categories.filter((function(t){return t.id===e}))[0];e=null,r&&(t.unshift({text:r.name,href:"/category/".concat(r.id)}),e=r.parent)}return t}},methods:v(v({},Object(l.b)(["onload","outload"])),{},{toURL:function(t){return y()(t,["chuyen","url"]).toLowerCase()},randomAvatar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(o.a)();return"https://icotar.com/avatar/".concat(t)},truncateText:function(text,t){return text.length>t-3?text.substr(0,t-3)+"...":text}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.onload(),e.next=3,t.$axios.$get("/category/list");case 3:t.categories=e.sent,t.category=t.categories.filter((function(e){return e.id===t.id}))[0],t.outload();case 6:case"end":return e.stop()}}),e)})))()}},w=r(43),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.category?r("b-container",{staticClass:"my-md-3 my-1"},[r("b-row",[r("b-col",{attrs:{cols:"12",lg:"8"}},[r("b-card",{staticClass:"my-3",attrs:{id:"news"}},[r("b-card-text",[r("b-breadcrumb",{attrs:{items:t.breadcrumbCategory}}),t._v(" "),r("div",{staticClass:"mb-3 d-flex justify-content-between"},[r("h4",[r("nuxt-link",{staticStyle:{color:"black"},attrs:{to:"/category/"+t.category.id}},[t._v(t._s(t.category.name))])],1),t._v(" "),r("div",[r("nuxt-link",{staticClass:"btn btn-info btn-sm",attrs:{to:"/new-topic#category="+t.category.id}},[t._v("Tạo thảo luận")])],1)]),t._v(" "),r("topic-list",{attrs:{category:t.id,more:!0}})],1)],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12",lg:"4"}},[r("div",{staticClass:"py-3 sticky"},[t.categories.filter((function(e){return e.parent===t.id})).length?r("b-card",[r("b-card-text",[r("h5",[t._v("Chuyên mục con")]),t._v(" "),r("b-list-group",t._l(t.categories.filter((function(e){return e.parent===t.id})),(function(e){return r("b-list-group-item",{key:"subcat-"+e.id,staticClass:"p-3"},[r("nuxt-link",{staticClass:"d-block w-100",attrs:{to:"/category/"+e.id}},[r("b-img",{staticClass:"mr-2",staticStyle:{"vertical-align":"middle"},attrs:{src:t.randomAvatar(e.name),width:"32",alt:"placeholder",rounded:"circle"}}),t._v(" "),r("span",{staticStyle:{"font-size":".8em","font-weight":"bold","text-transform":"uppercase"}},[t._v(t._s(e.name))])],1)],1)})),1)],1)],1):t._e(),t._v(" "),r("b-card",{staticClass:"my-3",attrs:{title:"Chuyên mục khác"}},[r("b-card-text",[r("b-list-group",t._l(t.categories.filter((function(e){return e.parent===t.category.parent})),(function(e){return r("b-list-group-item",{key:"toc-"+e.id,attrs:{to:"/category/"+e.id}},[t._v("\n                "+t._s(e.name)+"\n                ")])})),1)],1)],1)],1)])],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);