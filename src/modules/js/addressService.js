import fetch from 'js/fetch.js'
import url from 'js/api.js'


class Address {
    static list(){
        return fetch(url.addressLists)
    }
    static add(data){
        return fetch(url.addressAdd,data)
    }
    static remove(id){
        return fetch(url.addressRemove,id)
    }
    static updata(data){
        return fetch(url.addressUpdata,data)
    }
    static setDatefault(id){
        return fetch(url.addressSetDefault,id)
    }
}

export default Address 