<template>
  <div
    class="container "
    style="min-height: 597px;"
  >
    <div
      class="block-list address-list section section-first js-no-webview-block"
      v-if="lists&&lists.length"
    >
      <a
        class="block-item js-address-item address-item address-field"
        v-for="list in lists"
        :key="list.id"
        @click="toEdit(list)"
        :class="{'address-item-default':list.isDefault}"
      >
        <!--@click="toEdit(list)" 将地址信息传递过去-->
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.province}}{{list.city}}{{list.county}}{{list.address}}</p>
        <a class="address-edit">修改</a>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link
        class="btn btn-blue js-no-webview-block js-add-address-btn"
        :to="{name:'form', query:{type:'add'} }"
      >
        <!--to="/address/form" -->
        <!-- 注意路由路径 -->
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
//import Address from "js/addressService.js"
export default {
  // data() {
  //   return {
  //     lists: null
  //   };
  // },
  // created() {
  //   Address.list().then(res => {
  //     this.lists = res.data.lists;
  //   });
  // },
  computed: {
    lists() {
      return this.$store.state.lists;
    }
  },
  created(){
     if(!this.lists){
      this.$store.dispatch('getLists')
    }
  },
  methods: {
    toEdit(list) {
      // this.$router.push({ path: "/address/form" })
      this.$router.push({
        name: "form",
        query: {
          type: "edit",
          instance: list //地址实例
        }
      });
    }
  }
};
</script>

<style scoped>
@import "./address.css";
@import "./address_base.css";
</style>

