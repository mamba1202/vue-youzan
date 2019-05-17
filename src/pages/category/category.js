import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
//import Foot from 'components/Foot.vue'
import mixin from 'js/mixin.js'


//综合排行直接去调 二级分类是方法

new Vue({
    el: "#app",
    data: {
        topLists: null,
        topIndex: 0,  //一级分类下标
        subData: null, //数据形式  不是列表
        rankData: null,
    },
    created() {
        this.getTopList()
        this.getSubList(0)
    },
    methods: {
        getTopList() {
            axios.get(url.topList).then(res => {
                this.topLists = res.data.lists
            }).catch(err => {
                console.log('err')
            })
        },
        getSubList(index, id) {   //从一级分类获取的id
            this.topIndex = index  // 当前的和拿过来的是否相等
            if (index === 0) {
                this.getRank()
            } else {
                axios.post(url.subList, { id }).then(res => {
                    this.subData = res.data.data
                }).catch(err => {
                    console.log('err')
                })
            }
        },
        getRank() {
            axios.get(url.rank).then(res => {
                this.rankData = res.data.data
            }).catch(err => {
                console.log('err')
            })
        },
        toSearch(list) {
            //跳转到search页面 --keyWord分类名称
            //debugger
            location.href = `search.html?keyword=${list.name}&id=${list.id}`
        }
    },
    //  components:{
    //      Foot: Foot
    //   }
    mixins: [mixin]
})









