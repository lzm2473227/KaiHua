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
        <li class="active" @click="$router.push('home')">首页</li>
        <li @click="$router.push('product')">产品及技术</li>
        <li @click="$router.push('home')">正品汇商城</li>
        <li @click="$router.push('recruitment')">联系我们</li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Header",
  data(){
    return{

    }
  },
  mounted(){
    //导航条class的切换
    var liArr = document.getElementsByTagName("li");
    console.log(liArr);
    for(var i=0;i<liArr.length;i++){   //要为每一个按钮绑定事件，所以用到了for循环
        liArr[i].onclick = function () {
            for(var j=0;j<liArr.length;j++){
                liArr[j].className = "";
            }
            this.className = "active";  //【重要】核心代码
        }
    }
  },
  methods:{},
  components:{},

}
</script>

<style>
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
  height: 60px;
  width: 1200px;
  align-items: center;
  justify-content: space-between;
}
.header-h1{
  display: flex;
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