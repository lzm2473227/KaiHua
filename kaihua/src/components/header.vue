<template>
  <div class="header">
    <div class="outer">
      <div class="header-h1">
      <img src="../assets/logo_statusbar.png" alt="凯华Log" @click="$router.push('/')">
      <div class="title"> 
        <div class="bold">凯华技术</div>
        <div>www.kaihuau.cn</div>
      </div>
    </div>
    <div class="search" style="width:300px"></div>
    <div class="header-new">
      <ul>
        <li :class="{active: num === '1'}" @click="goPage(num)">首页</li>
        <li :class="{active: num === '2'}" @click="goPage(num)">产品及技术</li>
        <li :class="{active: num === '3'}" @click="goPage(num)">正品汇商城</li>
        <li :class="{active: num === '4'}" @click="goPage(num)">联系我们</li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Header",
  prop: {
    num: '1'
  },
  data(){
    return{
      isActive: '1'
    }
  },
  methods:{
    goPage(val){
      // this.isActive = val
      if(val === '1') this.$router.push('/home')
      if(val === '2') this.$router.push('/product')
      if(val === '3') this.$router.push('/mall')
      if(val === '4') this.$router.push('/recruitment')
    }
  },
  components:{},

}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
.header{
  width: 100%;
  height: 100px;
  /* border: 1px solid rgb(236, 91, 6); */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333333;
}
.outer{
  display: flex;
  width: 1200px;
  align-items: center;
  justify-content: space-between;
}
.header-h1{
  display: flex;
  cursor: pointer;
}
.header-h1 img{
  width: 64px;
  height: 64px;
}
.header-h1 .title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
}
.title .bold{
  font-size: 18px;
  font-weight: bold;
}
.header-new{
  display: flex;
  height: 100px;
}
.header-new ul{
  display: flex;
  height: 100%;
}
.header-new ul li{
  width: 124px;
  height: 100%;
  margin-right: 70px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-new ul li:last-child{
  margin-right: 0;
}
.active{
  background: #3A6EE9;
  color: #FFF;
}
</style>