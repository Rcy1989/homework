<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tabbar{
  height: 49px;
  background-color: #f2f2f2;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  /* vertical-align: center; */
}
</style>