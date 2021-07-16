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
        <li class="active">产品及技术</li>
        <li @click="$router.push('/mall')">正品汇商城</li>
        <li @click="$router.push('/recruitment')">联系我们</li>
      </ul>
    </div>
    </div>
  </div>
      <!-- <div class="container"> -->
        <div class="product container" style="margin-top: 100px;">
          <div class="top1">
            <img src="@/assets/images/title_icon.png" alt="">
            <div class="top1-title">
              <h2>技术路线</h2>
              <p>Technical route</p>
            </div>
          </div>
          <div class="top2">
            <img src="@/assets/images/product1.png" alt="">
          </div>
          <div class="top3">
            <h3 class="top3-title">区块链技术为基础</h3>
            <h4 class="top3-sub-title">分布式数据存储</h4>
            <div class="item">
                <p>采用去中心化、多维度的数据存储方式。</p>
                <p>商品价值形成过程中的端到端的品牌企业、银行、保险、物流、批发零售数据。</p>
                <p>分布式存储不可篡改。</p>
            </div>
            <div class="item">
              <div class="list">
                <h4 class="top3-sub-title">全链条精准的数据对接</h4>
                <p>实现商品数据从原材料采购、生产、批发、零售点的全链条精准对接。</p>
              </div>
              <div class="list">
                <h4 class="top3-sub-title">共识机制</h4>
                <p>凯华技术以强大的自主计算形成独特的共识机制。</p>
              </div>
              <div class="list">
                <h4 class="top3-sub-title">核心算法</h4>
                <p>凯华核心算法源自国际知名超算中心，实现高效率和安全性的完美结合。</p>
              </div>
            </div>
          </div>
          <div class="top4">
            <div class="top4-list">
              <span>区块链</span>
              <img src="@/assets/images/product-bg1.png" alt="">
            </div>
            <div class="top4-list">
              <span>大数据</span>
              <img src="@/assets/images/product-bg2.png" alt="">
            </div>
            <div class="top4-list">
              <span>云计算</span>
              <img src="@/assets/images/product-bg3.png" alt="">
            </div>
            <div class="top4-list">
              <span>人工智能</span>
              <img src="@/assets/images/product-bg4.png" alt="">
            </div>
            <div class="top4-list">
              <span>物联网</span>
              <img src="@/assets/images/product-bg5.png" alt="">
            </div>
          </div>
          <div class="top2">
            <h3 class="top3-title">社会劳动价值论与新零售</h3>
            <img src="@/assets/images/product2.png" alt="">
          </div>
        </div>
        <div class="product">
          <div class="top1 container">
            <img src="@/assets/images/title_icon.png" alt="">
            <div class="top1-title">
              <h2>产品特征</h2>
              <p>Product characteristics</p>
            </div>
          </div>
          <div class="characteristics bg container">
            <div class="characteristics-left">
              <h3><img src="@/assets/images/sort1.png" alt="">数据处理</h3>
              <p>强采集（渠道合法）、快清洗（数据藕合项）、热交付（交易变现）</p>
            </div>
            <img src="@/assets/images/product-bg6.png" alt="">
          </div>
          <div class="characteristics container">
            <img src="@/assets/images/product-bg7.png" alt="">
            <div class="characteristics-left">
              <h3><img src="@/assets/images/sort2.png" alt="">数据处理</h3>
              <div>
                <p>凯华多维云码采用了区块链分布式的记账方式，保障防伪的真实性。凯华多维云码从底层架构上采用了区块链的底层技术，
                    从端到端的内部环境保障了防伪的真实性。</p>
                <p class="data-handle">凯华技术开发包含商品码商品基础信息、物流记录、电子保单
                    等多种信息及功能的二维码。
                </p>
              </div>
            </div>
          </div>
          <div class="characteristics bg container">
            <div class="characteristics-left">
              <h3><img src="@/assets/images/sort3.png" alt="">云计算</h3>
            </div>
            <img src="@/assets/images/product-bg8.png" alt="">
          </div>
          <div class="characteristics container">
            <img src="@/assets/images/product-bg9.png" alt="">
            <div class="characteristics-left">
              <h3><img src="@/assets/images/sort4.png" alt="">云网端芯</h3>
              <p>凯华技术与中国电信达成战略合作，使用天翼鹏芯作为系统软硬件载体，天翼云端作为系统的数据载体。</p>
            </div>
          </div>
        </div>
      <!-- </div> -->
    </div>
</template>
<script>
export default {
  name:"Home",
  data(){
    return {
      
    }
  },
}
</script>

<style scoped>
.layout{
  background: #F7F7F7;
}
.container{
  width: 1200px;
  background: #fff;
  margin: 0 auto;
  padding: 0 55px;
}
.top1{
  display: flex;
  align-items: center;
  padding-top: 58px;
}
.product:first-child .top2{
  padding-top: 68px;
}
.top1 img{
  width: 55px;
  height: 77px;
  margin-right: 30px;
}
.top1-title h2{
  font-size: 22px;
}
.top1-title p{
  font-size: 14px;
  color: #999;
}
.top2{
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  font-size: 0;
}
.top3-title{
  margin-bottom: 32px;
  text-align: center;
  color: #E5432C;
  font-size: 26px;
}
.item{
  display: flex;
  justify-content: space-between;
}
.list, .item>p{
  width: 30%;
  margin-bottom: 70px;
  color: #666;
}
.list h4, .top3-sub-title{
  margin-bottom: 25px;
  line-height: 30px;
  font-size: 20px;
  color: #333;
}
.top4{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.top4-list{
  position: relative;
  font-size: 0;
}
.top4-list span{
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: #333;
}
.top4-list img{
  background: #F9F9F9;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}
.characteristics{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 115px 20px 115px;
}
.characteristics-left{
  width: 45%;
}
.characteristics-left h3{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #333;
}
.characteristics-left h3 img{
  margin-right: 10px;
}
.bg{
  background: #F9F9F9;
}
.product:last-child .top1{
  padding-top: 0;
  padding-bottom: 80px;
}
.data-handle{
  margin-top: 25px;
}
.characteristics p{
  line-height: 28px;
  color: #333;
  font-size: 16px;
}
</style>