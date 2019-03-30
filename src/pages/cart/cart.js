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
    },
    computed: {
        allSelected: {   // allSelected全选
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
        selectLists() {   //selectLists选中的商品列表
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
        removeLists() {  //删除商品

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
                    shop.editing = false   //是否可编辑
                    shop.editingMsg = '编辑'  //编辑状态的信息
                    shop.goodsList.forEach(good => {
                        good.checked = true
                        good.removeChecked = false //（编辑状态下商品是否选中删除）
                    })
                }),
                    this.lists = list
            })
        },
        selectGood(shop, good) {
            good.checked = !good.checked
            shop.checked = shop.goodsList.every(good => {
                return good.checked    //遍历商品 如果每个都是true 则shop.checked为true
            })
        },
        selectShop(shop) {
            shop.checked = !shop.checked
            shop.goodsList.forEach(good => {
                good.checked = shop.checked //商品状态根据店铺状态jued
            })
        },
        selectAll() {
            console.log(this.allSelected)
            this.allSelected = !this.allSelected
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
        }
    },
    mixins: [mixin]

})