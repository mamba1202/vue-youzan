
import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_transition.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import qs from 'qs'
import Swipe from 'components/Swipe.vue'


let { id } = qs.parse(location.search.substr(1))   //从URL上获取id
new Vue({
    el: '#app',
    data: {
        id,
        details: null,
        tabIndex: 0,
        dealLists: null,
        SwipeLists: null,
        skuType: 1,
        showSku: false,
        skuNum: 1,
        isAddCart: false,
        showAddMessage: false,
    },
    created() {
        this.getDetails()
    },
    methods: {
        getDetails() {
            axios.post(url.details, { id }).then(res => {
                //先修改数据结构再赋值
                this.details = res.data.data
                this.bannerLists = []
                this.details.imgs.forEach(item => {
                    this.bannerLists.push({
                        clickUrl: '',
                        image: item
                    })
                })
            })
        },
        changeTab(index) {
            this.tabIndex = index
            if (index) {
                this.getDeal()  //如果index=1 调用this.getDeal
            }
        },
        //获取本店成交数据进行渲染
        getDeal() {
            axios.post(url.deal, { id }).then(res => {
                this.dealLists = res.data.lists
            })
        },
        chooseSku(type) {
            this.skuType = type  //对应点击事件
            this.showSku = true  //点击后展示阴影层和弹窗
        },
        changeSkuNum(num) {
            if (num < 0 & this.skuNum === 1) return
            this.skuNum += num
        },
        addCart() {
            axios.post(url.addCart, {
                id,
                number: this.skuNum
            }).then(res => {
                if (res.data.status === 200) {
                    this.showSku = false
                    this.isAddCart = true
                    this.showAddMessage = true

                    setTimeout(() => {
                        this.showAddMessage = false
                    }, 1000)

                }
            })
        }
    },
    components: {
        Swipe: Swipe
    },
    watch: {
        //监听showSku禁止窗口拖动
        showSku(val, oldVal) {
            document.body.style.overflow = val ? 'hidden' : 'auto'
            document.querySelector('html').style.overflow = val ? 'hidden' : 'auto'
            document.body.height = val ? '100%' : 'auto'
            document.querySelector('html').height = val ? '100%' : 'auto'
        }
    },
    mixins: [mixin]
})
