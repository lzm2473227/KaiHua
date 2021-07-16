<template>
  <div class="indexLayout">
    <router-view></router-view>
    <Footer v-show="currPath !== '/mall'"/>
  </div>
</template>

<script>

import Footer from '@/components/footer.vue'
export default {
  name: "App",
  components: {
    Footer
  },
  data(){
    return {
      currPath: ''
    }
  },
  mounted(){
    console.log(this.$route)
    this.currPath = this.$route.path
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(from, to)
    // if(from.path === "/eve" && to.path === "/ip"){
    //   next(vm=>{
    //     var ipCurrentData = sessionStorage.getItem("ipData");
    //     vm.tableData = JSON.parse(ipCurrentData);
    //   });
    // }else{
      next()
    // }
  },
};
</script>

<style>
</style>

