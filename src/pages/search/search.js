import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'


let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
  el: '.container',
  data: {
    goodLists: null,
    show: false
  },
  created() {
    this.getsearchList()
  },
  methods: {
    getsearchList() {
      axios.post(url.goodList, {keyword, id}).then(res => {
        this.goodLists = res.data.lists
      })
    }
}
})