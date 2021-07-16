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
        <li class="active">首页</li>
        <li @click="$router.push('/product')">产品及技术</li>
        <li @click="$router.push('/mall')">正品汇商城</li>
        <li @click="$router.push('/recruitment')">联系我们</li>
      </ul>
    </div>
    </div>
  </div>
    <div class="content">
      <div class="banner">
        <img src="@/assets/images/banner.png" alt="">
      </div>
      <div class="container">
        <div class="profile-title">
          <h2>公司简介</h2>
          <h3>company profile</h3>
        </div>
        <div class="profile-text">
          <div class="text-img">
            <img src="@/assets/images/bg1.png" alt="">
            <div class="sub-img">
              <img src="@/assets/images/bg3.png" alt="">
              <img src="@/assets/images/bg2.png" alt="">
            </div>
          </div>
          <div class="left-img">
            <p>深圳凯华技术有限公司成立于2016年1月，总部位于深圳市深南大道世纪豪庭9楼。公司注册资金10000万元。主要从事物联网、计算机、多媒体智能技术领域内的技术研发、自有技术转让、技术咨询、技术服务等。</p>
            <p>公司致力于研发和推广的全球首创的R&R复盘检索对账系统，是凯华技术团队联合中国银联创始产品团队成员和国防科大超算技术团队成员合作研发的新一代物联网技术。该技术以全新的商品交易闭环为底层模块，彻底颠覆了传统的供应链金融模式。可广泛应用于生产、生活、流通、信息采集、数据处理、社会管理等各领域。</p>
            <p>其技术原理是：通过对商品生产和流通各环节的全程检索，还原商品价值的形成过程，使流通终端的零售双方取得对商品价值的信任机制。其技术路径是：在解决区块链应用中速度与成本两个关键难点基础上，为建立新零售和新支付生态提供数据交互的载体、商品交易的云平台、供应链金融的媒介、交易
                结算记录的加密数据中心，继而为建立金融支付新的高速通道提供新的技术工具。其技术目标是：通过各交易攸关方的链状赋能与导流。</p>
          </div>
          <p><span class="point"></span>为合作银行快速且低成本获客、开拓增量资金渠道、管控贷款资金风险，以及开发和推广银行移动新支付金融产品提供坚实有效的技术支持；</p>
          <p><span class="point"></span>为合作保险公司新增正品保证险业务，增强同业竞争能力；</p>
          <p><span class="point"></span>为合作生产制造商防伪打假、扩大销售、供应链管理提供一揽子解决方案；</p>
          <p><span class="point"></span>为加盟零售商创新经营方式、实现全时空交易提供媒介，构建移动电商云平台；</p>
          <p><span class="point"></span>为加盟物流公司优化配置资源、避免行业无序竞争提供数据交互载体；</p>
          <p><span class="point"></span>为广大消费者提供便捷且价值与价格相符的生态环境；</p>
          <p><span class="point"></span>为各类用户提供大数据快速清洗服务，获取有效决策参考依据。在反洗钱、社会及个人征信、专利保护、尖端制造等多方面具有广阔应用前景。</p>
        </div>
        <div class="profile-bottom">
          <div class="item">
            <div class="sub-item">
              <span>愿景</span>
            </div>
            <div class="item-text">打造一个“天下无假”的时代</div>
          </div>
          <div class="item">
            <div class="sub-item">
              <span>愿景</span>
            </div>
            <div class="item-text">打造一个“天下无假”的时代</div>
          </div>
          <div class="item">
            <div class="sub-item">
              <span>愿景</span>
            </div>
            <div class="item-text">打造一个“天下无假”的时代</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header"
export default {
  name:"Home",
  comments: {
    Header
  },
  data(){
    return {
      
    }
  },
  created(){
    console.log(this.$route)
  },
  methods: {
    go(){
      this.$router.push('./product')
    }
  },
}
</script>

<style scoped>
.content{
  margin-top: 100px;
}
.container{
  width: 1200px;
  margin: 0 auto;
}
.banner img{
  width: 100%;
}
.layout{
  margin-bottom: 60px;
}
.profile-title {
  margin: 40px 0 24px 0;
  text-align: center;
  font-size: 26px;
  color: #E85C2C;
}
.profile-title h2{
  font-size: 26px;
}
.profile-title h3{
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.25);
  font-size: 24px;
}
.profile-text{
  position: relative;
}
.text-img{
  position: absolute;
  right: 0;
  top: 0;
  font-size: 0;
}
.sub-img{
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
}
.left-img{
  width: 620px;
}
.left-img p{
  width: 620px;
  text-indent:2em
}
.left-img p:first-child{
  padding-top: 0;
}
p{
  line-height: 32px;
  color: #666;
  padding-top: 15px;
  font-size: 16px;
}
.point{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #E85C2C;
  margin-right: 10px;
}
.profile-bottom{
  display: flex;
  justify-content: space-around;
}
.item{
  margin-top: 60px;
}
.sub-item{
  position: relative;
}
.sub-item span{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -42px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #FF805A;
  color: #fff;
  box-shadow: 0px 2px 8px rgba(190, 59, 14, 0.2);
}
.item-text{
  background: #FFF5F2;
  border: 1px solid #FF805A;
  padding: 24px 40px 16px 40px;
  color: #E85C2C;
  border-radius: 4px;
}
</style>