<template>
  <div>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style scoped>
@import "./address_base.css";
@import "./address.css";
.slide-enter {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
  transition: transform 500ms;
}
.slide-leave-to {
  transform: translateX(100%);
  transition: transform 50ms;
}
</style>

