webpackJsonp([2],{"4lyG":function(t,e){},AeEs:function(t,e){},AnIW:function(t,e){},"Do/K":function(t,e){},FFFo:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,s){return n("li",{class:{active:s===t.curIndex},on:{click:function(n){return t.changeNav(e,s)}}},[n("a",[n("i",{class:e.icon}),n("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]}},HFfA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("JWK+"),a=(n.n(s),n("pI1A")),i=(n.n(a),n("AeEs")),o=(n.n(i),n("AnIW")),r=(n.n(o),n("d7BR")),c=(n.n(r),n("Do/K")),d=(n.n(c),n("LjF4")),u=(n.n(d),n("7+uW")),l=n("mtWM"),f=n.n(l),h=n("TFhR"),p=n("U/rD"),m=n("mw3O"),v=n.n(m),g=n("gN+L"),w=n.n(g),b=v.a.parse(location.search.substr(1)).id;new u.default({el:"#app",data:{id:b,details:null,tabIndex:0,dealLists:null,bannerLists:null,skuType:1,showSku:!1,skuNum:1,isAddCart:!1,showAddMessage:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;f.a.post(h.a.details,{id:b}).then(function(e){t.details=e.data.data,t.bannerLists=[],t.details.imgs.forEach(function(e){t.bannerLists.push({clickUrl:"",image:e})})})},changeTab:function(t){this.tabIndex=t,t&&this.getDeal()},getDeal:function(){var t=this;f.a.post(h.a.deal,{id:b}).then(function(e){t.dealLists=e.data.lists})},chooseSku:function(t){this.skuType=t,this.showSku=!0},changeSkuNum:function(t){t<0&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;f.a.post(h.a.addCart,{id:b,number:this.skuNum}).then(function(e){200===e.data.status&&(t.showSku=!1,t.isAddCart=!0,t.showAddMessage=!0,setTimeout(function(){t.showAddMessage=!1},1e3))})}},components:{Swipe:w.a},watch:{showSku:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.height=t?"100%":"auto",document.querySelector("html").height=t?"100%":"auto"}},mixins:[p.a]})},"JWK+":function(t,e){},LjF4:function(t,e){},N0Xq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("DNVT"),a=n("v2ns");n.n(a);e.default={name:"swipe",props:{lists:{required:!0},name:{}},created:function(){},mounted:function(){new s.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1}})}}},TFhR:function(t,e,n){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topLists",rank:"/category/rank",subList:"/category/subLists",goodList:"/search/goodLists",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/update",cartList:"/cart/lists",cartRemoveMore:"/cart/removeMore",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",addressLists:"/address/list",addressUpdate:"address/update",addressAdd:"/address/add",addressRemove:"address/remove",addressSetDefault:"/address/setDefault"};for(var a in s)s.hasOwnProperty(a)&&(s[a]=" https://easy-mock.com/mock/5c986e0b13005a77f4c7d8cf/youzan"+s[a]);e.a=s},"U/rD":function(t,e,n){"use strict";var s=n("nq5D"),a={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>-1){var n=e.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return e+".00"}},components:{Foot:n.n(s).a}};e.a=a},ZfKk:function(t,e){},d7BR:function(t,e){},"gN+L":function(t,e,n){var s=n("VU/8")(n("N0Xq"),n("t8Cn"),function(t){n("4lyG")},null,null);t.exports=s.exports},nq5D:function(t,e,n){var s=n("VU/8")(n("t2Vd"),n("FFFo"),function(t){n("ZfKk")},null,null);t.exports=s.exports},pI1A:function(t,e){},t2Vd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("mw3O"),a=n.n(s),i=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];e.default={data:function(){return{navConfig:i,curIndex:parseInt(a.a.parse(location.search.substr(1)).index)}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}},t8Cn:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},v2ns:function(t,e){}},["HFfA"]);
//# sourceMappingURL=goods.1af6acbecc07a767e555.js.map