let url = {
    hotLists: '/index/hotLists',
    banner: '/index/banner'	,
    topList: '/category/topLists',
    rank: '/category/rank',
    subList: '/category/subLists',
    goodList:'/search/goodLists',
    details: '/goods/details',
    deal: '/goods/deal',
    addCart: '/cart/update',
    cartList:'/cart/lists',
    cartRemoveMore:'/cart/removeMore',
    cartReduce:'/cart/reduce',
    cartRemove:'/cart/remove',
    addressLists:'/address/list',
    addressUpdate: '/address/update', 
    addressAdd: '/address/add',
    addressRemove: '/address/remove',
    addressSetDefault:'/address/setDefault' 

}

//真实环境和开发环境的切换
//let host = ''
let host = ' https://easy-mock.com/mock/5c986e0b13005a77f4c7d8cf/youzan'

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}
export default url