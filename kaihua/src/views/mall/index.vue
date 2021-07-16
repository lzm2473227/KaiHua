<template>
    <div class="layout">
      <div class="header">
    <div class="outer">
      <div class="header-h1" @click="$router.push('/home')">
      <img src="@/assets/logo_statusbar.png" alt="凯华Log">
      <div class="title"> 
        <div class="bold">凯华技术</div>
        <div>www.kaihuau.cn</div>
      </div>
    </div>
    <div class="search" style="width:300px"></div>
    <div class="header-new">
      <ul>
        <li @click="$router.push('/home')">首页</li>
        <li @click="$router.push('/product')">产品及技术</li>
        <li class="active">正品汇商城</li>
        <li @click="$router.push('/recruitment')">联系我们</li>
      </ul>
    </div>
    </div>
  </div>
      <iframe id="other-iframe" :src='url'></iframe>
    </div>
</template>
<script>
export default {
  name:"Home",
  data(){
    return {
      url: 'https://org.modao.cc/app/ea688cdd65022634b2f9685cb9cc017ad3e3c10f#screen=skkt4mluqphy0kp'
    }
  },
}
</script>

<style>
#other-iframe{
  width: 100%;
  height: 100vh;
  border-top: none;
}
</style>