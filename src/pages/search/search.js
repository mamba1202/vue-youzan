import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'



let {keyword, id} = qs.parse(location.search.substr(1))
import Velocity from 'velocity-animate'

new Vue({
  el: '.container',
  data: {
   goodLists: null,
   isShow: false,
   keyword,
  },
  created() {
    this.getsearchList()
  },
  methods: {
    getsearchList() {
      axios.post(url.goodList, {keyword, id}).then(res => {
        this.goodLists = res.data.lists
      })
    },
    move(){
       if(document.body.scrollTop > 100){
         this.isShow = true
       }else{
         this.isShow = false
       }
    },
    toTop(){
      Velocity()(document.body, 'scroll',{duration: 1000})
    }
  },
 mixins: [mixin]

})