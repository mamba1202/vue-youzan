webpackJsonp([4],{"035s":function(e,t){},"0C+S":function(e,t){},FFFo:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.navConfig,function(t,i){return n("li",{class:{active:i===e.curIndex},on:{click:function(n){return e.changeNav(t,i)}}},[n("a",[n("i",{class:t.icon}),n("div",[e._v(e._s(t.name))])])])}),0)])},staticRenderFns:[]}},NW8W:function(e,t){},TFhR:function(e,t,n){"use strict";var i={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topLists",rank:"/category/rank",subList:"/category/subLists",goodList:"/search/goodLists",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/update",cartList:"/cart/lists",cartRemoveMore:"/cart/removeMore",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",addressLists:"/address/list",addressUpdate:"/address/update",addressAdd:"/address/add",addressRemove:"/address/remove",addressSetDefault:"/address/setDefault"};for(var o in i)i.hasOwnProperty(o)&&(i[o]=" https://easy-mock.com/mock/5c986e0b13005a77f4c7d8cf/youzan"+i[o]);t.a=i},"U/rD":function(e,t,n){"use strict";var i=n("nq5D"),o={filters:{currency:function(e){var t=""+e;if(t.indexOf(".")>-1){var n=t.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return t+".00"}},components:{Foot:n.n(i).a}};t.a=o},ZfKk:function(e,t){},eC21:function(e,t){},gWPi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("035s"),n("eC21"),n("NW8W"),n("0C+S");var i=n("7+uW"),o=n("mtWM"),s=n.n(o),r=n("TFhR"),c=n("U/rD"),a=n("9qgI"),d=n.n(a),u=n("Zrlr"),h=n.n(u),f=n("wxAW"),l=n.n(f),g=n("wI4f"),v=function(){function e(){h()(this,e)}return l()(e,null,[{key:"add",value:function(e){return Object(g.a)(r.a.addCart,{id:e,number:1})}},{key:"reduce",value:function(e){return Object(g.a)(r.a.cartReduce,{id:e,number:1})}},{key:"remove",value:function(e){var t=[];e.forEach(function(e){t.push(e.id)})}}]),e}();new i.default({el:".container",data:{lists:null,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:""},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(e){return e.checked})},set:function(e){this.lists.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(e){this.editingShop&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},selectLists:function(){if(this.lists&&this.lists.length){var e=[],t=0;return this.lists.forEach(function(n){n.goodsList.forEach(function(n){n.checked&&(e.push(n),t+=n.price*n.number)})}),this.total=t,e}},removeLists:function(){if(this.editingShop){var e=[];return this.editingShop.goodsList.forEach(function(t){t.removeChecked&&e.push(t)}),e}return[]}},created:function(){this.getLists()},methods:{getLists:function(){var e=this;s.a.post(r.a.cartList).then(function(t){var n=t.data.cartList;n.forEach(function(e){e.checked=!0,e.removeChecked=!1,e.editing=!1,e.editingMsg="编辑",e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.lists=n})},selectGood:function(e,t){var n=this.editingShop?"removeChecked":"checked";t[n]=!t[n],e[n]=e.goodsList.every(function(e){return e[n]})},selectShop:function(e){var t=this.editingShop?"removeChecked":"checked";e[t]=!e[t],e.goodsList.forEach(function(n){n[t]=e[t]})},selectAll:function(){var e=this.editingShop?"allRemoveSelected":"allSelected";console.log(this.allSelected),this[e]=!this[e]},edit:function(e,t){e.editing=!e.editing,e.editingMsg=e.editing?"完成":"编辑",this.lists.forEach(function(n,i){t!==i&&(n.editing=!1,n.editingMsg=e.editing?"":"编辑")}),this.editingShop=e.editing?e:null,this.editingShopIndex=e.editing?t:-1},reduce:function(e){1!==e.number&&v.reduce(e.id).then(function(t){e.number--})},add:function(e){v.add(e.id).then(function(t){e.number++})},remove:function(e,t,n,i){this.removePopup=!0,this.removeData={shop:e,shopIndex:t,good:n,goodIndex:i},this.removeMsg="确定要删除该商品吗？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定将所选"+this.removeLists.length+"个商品删除？"},removeConfirm:function(){var e=this;if("确定要删除该商品吗？"===this.removeMsg){var t=this.removeData,n=t.shop,i=t.shopIndex,o=t.good,c=t.goodIndex;fetch(r.a.cartRemove,{id:o.id}).then(function(t){n.goodsList.splice(c,1),n.goodsList.length||(e.lists.splice(i,1),e.removeShop()),e.removePopup=!1})}else{var a=[];this.removeLists.forEach(function(e){a.push(e.id)}),s.a.post(r.a.cartRemoveMore,{ids:a}).then(function(t){var n=[];e.editingShop.goodsList.forEach(function(t){-1===e.removeLists.findIndex(function(e){return e.id==t.id})&&n.push(t)}),n.length?e.editingShop.goodsList=n:(e.lists.splice(e.editingShopIndex,1),e.removeShop()),e.removePopup=!1})}},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})},start:function(e,t){t.startX=e.changedTouches[0].clientX},end:function(e,t,n,i){var o=e.changedTouches[0].clientX,s="0";console.log(o,n.startX),n.startX-o>100&&(s="-60px"),o-n.startX>100&&(s="0px"),d()(this.$refs["goods-"+t+"-"+i],{left:s})},alert:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){alert(" '结算' 页面暂未做")})},mixins:[c.a]})},nq5D:function(e,t,n){var i=n("VU/8")(n("t2Vd"),n("FFFo"),function(e){n("ZfKk")},null,null);e.exports=i.exports},t2Vd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("mw3O"),o=n.n(i),s=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];t.default={data:function(){return{navConfig:s,curIndex:parseInt(o.a.parse(location.search.substr(1)).index)||0}},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}}},wI4f:function(e,t,n){"use strict";var i=n("//Fk"),o=n.n(i),s=n("mtWM"),r=n.n(s);t.a=function(e,t){return new o.a(function(n,i){r.a.post(e,t).then(function(e){200===e.data.status&&n(e),n(e)})}).catch(function(e){reject(res)})}}},["gWPi"]);
//# sourceMappingURL=cart.3b05760a09f2ed1e231b.js.map