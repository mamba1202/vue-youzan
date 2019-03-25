import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui'; //引入mint-ui
Vue.use(InfiniteScroll);

import Foot from 'components/Foot.vue'

console.log(axios)


new Vue({
    el: '#app',
    data:{  //存放vue管理数据
        lists: null,
        pageNum: 1,
        pageSize: 6,
        loading: false,  //可以继续加载
        allLoaded: false
    },
    created(){
        this.getLists()
    },
    methods:{
        getLists(){
            if(this.allLoaded) return //是否完全加载完毕
            this.loading = true //请求未完成禁止再次发送请求 ----函数节流
            axios.post(url.hotLists,{
                pageNum: this.pageNum,
                pageSize: this.pageSize,
            }).then(res => {
                let curLists = res.data.lists  //请求到的数据给当前的
                //判断所有数据是否加载完毕
               if(curLists.lenght < this.pageSize){
                   this.allLoaded = true  //已经加载到底
               }
                if(this.lists){
                       this.lists = this.lists.concat(curLists) //把原来的数据和新数组起来
               }else{
                   this.lists = curLists 
                   // 第一次请求数据（初始化数据）
               }
               this.loading = false  //请求完成，可进行下一次的请求
               this.pageNum++
            })
        }
    },
    components:{
        Foot: Foot //注入
    }
})