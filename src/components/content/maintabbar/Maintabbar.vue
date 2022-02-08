<template>
  <div>
    <tabbar>
      <tabbar-item path='/home'>
        <template v-slot:img-active><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
        <template v-slot:img><img src="~assets/img/tabbar/home.svg" alt=""></template>
        <template v-slot:title><div>首页</div></template>
      </tabbar-item>
      <tabbar-item path='/category'>
        <template v-slot:img-active><img src="~assets/img/tabbar/category_active.svg" alt=""></template>
        <template v-slot:img><img src="~assets/img/tabbar/category.svg" alt=""></template>
        <template v-slot:title><div>分类</div></template>
      </tabbar-item>
      <tabbar-item path='/cart'>
        <template v-slot:img-active><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></template>
        <template v-slot:img><img src="~assets/img/tabbar/shopcart.svg" alt=""></template>
        <template v-slot:title><div>购物车</div></template>
      </tabbar-item>
      <tabbar-item path='/profile'>
        <template v-slot:img-active><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
        <template v-slot:img><img src="~assets/img/tabbar/profile.svg" alt=""></template>
        <template v-slot:title><div>我的</div></template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
</style>