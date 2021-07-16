<template>
    <div class="footer">
    <div id="footer">
      <div class="footer-wrapper wrapper">
        <div class="footer-left">
          <div class="qr">
            <p><img
                src="@/assets/images/bottom_label.png"
                alt=""
              >扫码关注我们</p>
            <img
              src="@/assets/images/bottom_QRcode.png"
              alt=""
            >
          </div>
          <div class="info">
            <p>联系电话&nbsp;&nbsp;|&nbsp;&nbsp;0755-83820003</p>
            <p>公司邮箱&nbsp;&nbsp;|&nbsp;&nbsp;kf@zte-yd.com</p>
            <p>办公时间&nbsp;&nbsp;|&nbsp;&nbsp;星期一至五 08:30-18:00</p>
            <p>办公地址&nbsp;&nbsp;|&nbsp;&nbsp;深圳福田区深南大道6029号世纪豪庭大厦9楼</p>
          </div>
        </div>
        <div class="footer-right">
          <ul>
            <li>
              <router-link to="/product">产品简介</router-link>
            </li>
            <li>
              <router-link to="/recruitment">招聘</router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/media">媒体中心</router-link>
            </li>
            <li>
              <router-link to="/about">关于凯华</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="filing">
      <p>Copyright © 2019-2021 深圳凯华技术有限公司 版权所有<a href="http://www.beian.miit.gov.cn/">备案号：粤ICP备16019744号</a></p>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style>
/* .footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
} */
  #footer{
    width: 100%;
    padding: 40px 0;
    background: #151C28;
    color: #fff;
  }
  #footer .qr{
      font-size: 0;
      color: #EF2A2F;
  }
  #footer .qr p{
      padding-bottom: 5px;
      font-size: 14px;
  }
  #footer .qr p img{
      padding-right: 2px;
  }
  #footer .footer-wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1200px;
      margin: 0 auto;
  }
  #footer .footer-left{
      display: flex;
      align-items: center;
  }
  #footer .footer-left .info{
      margin-left: 40px;
      line-height: 32px;
      font-size: 12px;
      color: #C4C4C6;
  }
  #footer .footer-wrapper a{
      color: #B5BDCC;
  }
  #footer .footer-right{
      padding: 20px 0;
      border-left: 1px dashed #3B475B;
  }
  #footer .footer-right ul{
      display: flex;
  }
  #footer .footer-right ul li{
      padding-left: 80px;
      line-height: 32px;
  }
  .filing{
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #D2282E;
      font-size: 12px;
      color: #fff;
  }
  .filing a{
      padding-left: 40px;
      font-size: 12px;
      color: #fff;
  }
</style>