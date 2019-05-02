<template>
  <div class="container " style="min-height: 581px;">
    <div class="content">
      <div class="user-infos">
        <div class="pull-left avatar">
          <div class="img" style="background-image: url(https://i.loli.net/2019/05/02/5ccacb37428b3.jpg)"></div>
        </div>
        <div class="pull-left desc">
          <p>mamba</p>
        </div>
      </div>
      <div class="order-related">
        <ul class="uc-order list-horizon clearfix js-order-overview">
          <li>
            <a class="link clearfix relative link-topay" data-for="topay"  href="#">
              <p class="title-info c-black font-size-12">待付款</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-totuan" data-for="totuan"  href="#">
              <p class="title-info c-black font-size-12">待接单</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-tosend" data-for="tosend"  href="#">
              <p class="title-info c-black font-size-12">待发货</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-send" data-for="send"  href="#">
              <p class="title-info c-black font-size-12">待收货</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-rights"  href="#">
              <p class="title-info c-black font-size-12">退款/维权</p>
            </a>
          </li>
        </ul>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-order" href="#">
            <p class="title-info c-black font-size-14">全部订单</p>
          </a>
        </div>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-favior js-login"  href="#">
            <p class="title-info c-black font-size-14">收藏的商品</p>
          </a>
          <a class="block-item link clearfix ico-shop js-login" href="#">
            <p class="title-info c-black font-size-14">收藏的店铺</p>
          </a>
          <a class="block-item link clearfix ico-bought js-login"  href="#">
            <p class="title-info c-black font-size-14">我买过的</p>
          </a>
          <a class="block-item link clearfix ico-history js-login"  href="#">
            <p class="title-info c-black font-size-14">我的浏览记录</p>
          </a>
        </div>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-card"  href="#">
            <p class="title-info c-black font-size-14">我的会员卡</p>
          </a>
          <a class="block-item link clearfix ico-coupon" href="#">
            <p class="title-info c-black font-size-14">我的优惠券</p>
          </a>
          <a class="block-item link clearfix ico-luckymoney hide" href="#">
            <p class="title-info c-black font-size-14">我的红包</p>
          </a>
          <a class="block-item link clearfix ico-backs" href="#">
            <p class="title-info c-black font-size-14">我的返现</p>
          </a>
        </div>
        <div class="block block-list list-vertical">
          <router-link class="block-item link clearfix ico-setting js-login" to="/address" target="_self">
            <p class="title-info c-black font-size-14">收货地址管理</p>
          </router-link>
          <a class="block-item link clearfix ico-help" href="#">
            <p class="title-info c-black font-size-14">联系有赞客服</p>
          </a>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Foot from 'components/Foot.vue'
export default {
   components:{Foot},
}
</script>

<style scoped>
  @import './member_base.css';
  @import './member.css';
</style>
