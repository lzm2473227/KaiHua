<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- 尾部 -->
    <Footer/>

  </div>
</template>

<script>
import Header from "./components/header"
import Footer from '@/components/footer.vue'
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
</style>

