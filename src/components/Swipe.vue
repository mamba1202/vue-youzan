<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swp-page swiper-slide"
        v-for="list in lists"
      >
        <a
          class="js-no-follow"
          v-bind:href="list.clickUrl"
        >
          <img
            class="goods-main-photo fadeIn"
            :src="list.img"
          >
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <!--分页器-->
    
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "swipe",
  props: {   //props:[lists]
    lists: {
      //type: Array,
      required: true
    },
    name: {} //未进行动态绑定 是字符串
  },
  created() {
    // console.log('created: ',document.querySelectorAll(".swiper-slide"));
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
         clickable: true,
      },
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    // console.log('mounted',document.querySelectorAll(".swiper-slide"));
  }
  //watch: {
  //lists(val, oldVal) {
  //  console.log(val,oldVal)
  //console.log('before nextTick',document.querySelectorAll(".swiper-slide"));
  //this.$nextTick(() => {
  //console.log('after nextTick',document.querySelectorAll(".swiper-slide"));
  // });
  // }
  //}
};
</script>
<style>
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>
