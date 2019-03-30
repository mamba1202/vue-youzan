import 'css/common.css'
import './cart.css'
import './cart_base.css'
import './cart_trade.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'


new Vue({
    el: '.container',
    data: {
        lists: null,   //列表
        total: 0,
        editingShop: null, //编辑状态下的商铺
        editingShopIndex: -1,
        removePopup: false, //是否要删除,
        removeData: null,
        removeMsg: ''
    },
    computed: {
        allSelected: {   // allSelected正常情况下全选
            get() {       //判断店铺进而判断全选状态
                if (this.lists && this.lists.length) {
                    return this.lists.every(shop => {  //判断店铺的checked
                        return shop.checked
                    })
                }
                return false
            },
            set(newVal) {       //全选状态决定店铺和商品状态
                this.lists.forEach(shop => {
                    shop.checked = newVal
                    shop.goodsList.forEach(good => {
                        good.checked = newVal
                    })
                })
            }
        },
        allRemoveSelected: {   // allRemoveSelected编辑状态下全选
            get() {
                if (this.editingShop) {
                    return this.editingShop.removeChecked  //编辑的店铺有没有被选中
                }
                return false
            },
            set(newVal) {
                if (this.editingShop) {
                    this.editingShop.removeChecked = newVal
                    this.editingShop.goodsList.forEach(good => {
                        good.removeChecked = newVal
                    })
                }
            }
        },
        selectLists() {   //selectLists正常情况选中的商品列表
            if (this.lists && this.lists.length) {
                let arr = []
                let total = 0
                this.lists.forEach(shop => {
                    shop.goodsList.forEach(good => {
                        if (good.checked) {
                            arr.push(good)
                            total += good.price * good.number
                        }
                    })
                })
                this.total = total
                return arr
            }
        },
        removeLists() {  //编辑情况下商品选中
            if (this.editingShop) {
                let arr = []
                this.editingShop.goodsList.forEach(good => {
                    if (good.removeChecked) {
                        arr.push(good)
                    }
                })
                return arr
            }
            return []
        }
    },
    created() {
        this.getLists()
    },
    methods: {
        getLists() {
            axios.post(url.cartList).then(res => {
                let list = res.data.cartList //改造数据
                list.forEach(shop => {
                    shop.checked = true    //是否结算选中
                    shop.removeChecked = false //是否删除选中（编辑状态下）
                    shop.editing = false   //正常状态    是否可编辑
                    shop.editingMsg = '编辑'  // 正常状态  编辑字体
                    shop.goodsList.forEach(good => {
                        good.checked = true       //(正常状态下商品是否选中删除）
                        good.removeChecked = false //（编辑状态下商品是否选中删除）
                    })
                }),
                    this.lists = list
            })
        },
        selectGood(shop, good) { //商品
            let attr = this.editingShop ? 'removeChecked' : 'checked'  //判断是在编辑还是正常状态下 
            good[attr] = !good[attr]
            shop[attr] = shop.goodsList.every(good => {
                return good[attr]    //遍历商品 如果每个都是true 则shop.checked为true
            })
        },
        selectShop(shop) {  //店铺
            let attr = this.editingShop ? 'removeChecked' : 'checked'
            shop[attr] = !shop[attr]
            shop.goodsList.forEach(good => {
                good[attr] = shop[attr] //商品状态根据店铺状态决定
            })
        },
        selectAll() {   //全选
            let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected'
            console.log(this.allSelected)
            this[attr] = !this[attr]
        },
        edit(shop, shopIndex) {
            shop.editing = !shop.editing //编辑-正常状态切换
            shop.editingMsg = shop.editing ? '完成' : '编辑'
            this.lists.forEach((item, i) => {  //对其他商铺进行遍历
                if (shopIndex !== i) {
                    item.editing = false
                    item.editingMsg = shop.editing ? '' : '编辑'
                }
            })
            this.editingShop = shop.editing ? shop : null
            this.editingShopIndex = shop.editing ? shopIndex : -1
        },
        reduce(good) {
            if (good.number === 1) return
            axios.post(url.cartReduce, {
                id: good.id,      //先更改数据库数据再进行本地操作
                number: 1
            }).then(res => {
                good.number--
            })
        },
        add(good) {
            axios.post(url.addCart, {
                id: good.id,      //先更改数据库数据再进行本地操作
                number: 1
            }).then(res => {
                good.number++
            })
        },
        remove(shop, shopIndex, good, goodIndex) {
            this.removePopup = true
            this.removeData = { shop, shopIndex, good, goodIndex }
            this.removeMsg = '确定要删除该商品吗？'
        },
        removeList() {
            this.removePopup = true
            this.removeMsg = `确定将所选${this.removeLists.length}个商品删除？`
        },
        removeConfirm() {
            if (this.$data.removeMsg === '确定要删除该商品吗？') {
                let { shop, shopIndex, good, goodIndex } = this.removeData
                axios.post(url.cartRemove, {  //先改变数据库再进行本地操作
                    id: good.id
                }).then(res => {
                    shop.goodsList.splice(goodIndex, 1)  //删除店铺下的商品列表（通过下标删除）
                    if (!shop.goodsList.length) {         //没有商品时
                        this.lists.splice(shopIndex, 1)   //删除店铺
                        //删除后页面还在编辑状态
                        this.removeShop()                //恢复正常状态
                    }
                    this.removePopup = false  //阴影弹框取消
                      // this.$refs[`goods-${shopIndex}-${goodIndex}`][0].style.left = '0px'
                })
            } else {
                let ids = []
                this.removeLists.forEach(good => {
                    ids.push(good.id)
                })
                axios.post(url.cartRemoveMore, {
                    ids
                }).then(res => {
                    let arr = []
                    this.editingShop.goodsList.forEach(good => {
                        let index = this.removeLists.findIndex(item => {
                            return item.id == good.id
                        })
                        if (index === -1) {
                            arr.push(good)
                        }
                    })
                    if (arr.length) {
                        this.editingShop.goodsList = arr
                    } else {
                        this.lists.splice(this.editingShopIndex, 1)
                        this.removeShop()
                    }
                    this.removePopup = false
                })
            }

        },
        removeShop() {
            this.editingShop = null   //恢复正常状态
            this.editingShopIndex = -1
            this.lists.forEach(shop => {
                shop.editing = false        //店铺恢复正常状态
                shop.editingMsg = '编辑'   //编辑字体
            })

        }
    },
    mixins: [mixin]

})