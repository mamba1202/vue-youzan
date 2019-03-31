import url from 'js/api.js'
import fetch from 'js/fetch.js'

class Cart {
    static add(id){
        return fetch(url.addCart,{
          id,
          number: 1
        })
    }
    static reduce(id){
        return fetch(url.cartReduce,{
          id,
          number: 1
        })
    }
    static remove(arr){
        let ids = []
        arr.forEach(good => {   //遍历要删除的商品列表
            ids.push(good.id)
        })
    }

}

export default Cart