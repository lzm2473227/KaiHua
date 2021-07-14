<template>
  <div>
    <router-view></router-view>
    <!-- 尾部 -->
    <!-- <Footer v-if="!$route.meta.isFooterHide" /> -->

  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style>
body {
  padding-right: 0px !important;
  overflow: hidden;
}
</style>

