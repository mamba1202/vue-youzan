
  import './goods_common.css'
  import './goods_custom.css'
  import './goods.css'
  import './goods_theme.css'
  import './goods_mars.css'
  import './goods_sku.css'

  import Vue from 'vue'
  import axios from 'axios'
  import url from 'js/api.js'
  import mixin from 'js/mixin.js'
  import qs from 'qs'
 
  let {id} = qs.parse(location.search.substr(1))   //从URL上获取id
  new Vue({
      el: '#app',
      data:{
          details: null,
          tabIndex: 0,
          dealLists: null
      },
      created(){
         this.getDetails()
      },
      methods:{
        getDetails(){
            axios.post(url.details, {id}).then(res=>{
                this.details = res.data.data
            })
        },
        changeTab(index){
            this.tabIndex = index
            if(index){
                this.getDeal()
            }
        },
        getDeal(){
            axios.post(url.deal,{id}).then(res=>{
                this.dealLists = res.data.lists
            })
        }
      },
      mixins: [mixin]
  })
