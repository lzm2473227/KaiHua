<template>
    <div class="layout">
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
  height: 100%;
}
</style>