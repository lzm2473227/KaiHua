<template>
  <div style="background:#F7F7F7">
    <div class="recruitment-outer recruitment">
      <div class="t-inp">
        <img src="../../assets/seach.png" alt="">
        <input type="text" placeholder="搜素工作岗位"> 
      </div>
      <div class="br-outer">
        <div class="br"></div>
        <div class="br-body">
          <div class="bold">招贤纳士</div>
          <div class="dotted">Noneinvite men of wisdom and virtue</div>
        </div>
        <div class="br"></div>
      </div>
      <div class="recruitment-body">
        <h2>1、系统运维工程师</h2>
        <button>申请岗位</button>
        <div class="rules">深圳 |工作经验 2年 | 本科|招聘人数 2人</div>
        <div class="jobs">工作职责</div>
        <p>1、负责网站的日常运维、部署、监控、系统优化等工作，保证线上环境稳定运行；</p>
        <p>2、负责公司内部开发环境和测试环境的建立、维护和日常管理工作，确保开发和测试正常进行</p>
        <p>3、处理各类异常和故障，确保系统平台的稳定运行</p>
        <p>4、参与设计、开发各种运维工具，打造运维自动化平台，提升运维系统的性能和稳定性</p>
        <p>5、打造监控平台，对线上各种业务及系统做到时时监控，并且能够根据需求调整监控模板等</p>
        <p>6、能够与研发密切配合，优化部署架构，提升平台稳定性，能够快速定位技术问题，保证线上环境的高效运行</p>
        <div class="jobs">任职要求</div>
        <p>1、大学本科以上，计算机相关专业，2年以上互联网行业经验；</p>
        <p>2、精通Linux、windowsServer2012操作系统的使用与维护，熟悉Apache、IIS、Redis、Memcached等软件的基本配置和维护；</p>
        <p>3、熟悉网络搭建、网络的安全监控、系统性能管理和调试、网络性能管理，三层交换机、路由器配置；</p>
        <p>4、精通目前主流的监控方式，并且能够完成监控模板的调整及编写工作；</p>
        <p>5、对系统安全有一定的研究，能够设计并实施支撑大规模服务器集群的运维平台；</p>
        <p>6、认真严谨、平实稳重、责任心强，良好的沟通能力及团队合作精神，能承受一定工作压力；</p>
        <p>7、熟悉负载均衡、双机热备技术，熟悉阿里云服务架构者优先。</p>
        <h2 class="h2-top">2、前端(JS)开发工程师</h2>
        <button>申请岗位</button>
        <div class="rules">深圳 |工作经验 1年 | 本科|招聘人数 3人</div>
        <div class="jobs">岗位职责</div>
        <p>1、负责公司产品前端代码开发、页面重构以及交互设计逻辑处理；</p>
        <p>2、了解HTML5特性以及规范，对移动端技术有一定了解</p>
        <p>3、对用户体验、交互操作流程有一定了解；</p>
        <p>4、有强烈的上进心和求知欲，善于学习和运用新知识。</p>
        <div class="jobs">任职要求</div>
        <p>1、前端开发相关工作1年以上的经验；</p>
        <p>2、精通web前端技术（js/css/html），熟悉w3c标准；</p>
        <p>3、对nodejs、html5等新技术有一定了解；</p>
        <p>4、熟悉主流浏览器特性，能较好的解决兼容问题；</p>
        <p>5、对主流JS框架有一定了解，熟悉对象化编程和常用设计模式。</p>
      </div>
      
      <div class="online-contact">
        
      </div>
    </div>
    <div class="online-contact">
        <img src="../../assets/在线联系banner.png" alt="">
    </div>
    <div class="contact">
      <div class="contact-con">

      </div>
    </div>
    <div class="place">
      <div class="place-con">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Recruitment',
}
</script>

<style>
.recruitment{
  width: 1200px;
  margin: 0 auto;
  background: #fff;
}
.recruitment-outer{
  /* height: 1500px; */
  /* border: 1px solid rgb(236, 146, 10); */
}
.t-inp{
  width: 100%;
  display: flex;
  height: 66px;
  position: relative;
}
.t-inp img{
  position: absolute;
  width: 20px;
  height: 28px;
  top: 20px;
  left: 29px;
}
.t-inp input{
  width: 100%;
  border: 0;
  outline: none;
  text-indent: 60px;
  background: #F2F2F2;
}
.br-outer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 31px;
}
.br-outer .br{
  width: 440px;
  height: 1px;
  background: #E5E5E5;
}
.br-outer .bold{
  font-family: Microsoft YaHei;
  font-weight: bold;
  font-size: 18px;
  color: #333333;
  opacity: 1;
}
.br-outer .dotted{
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #999999;
  font-size: 14px;
  opacity: 1;
}
.br-body{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recruitment-body{
  margin: 0 50px;
  padding-bottom: 50px;
}
.recruitment-body .h2-top{
  margin-top: 40px;
}
.recruitment-body h2{
  height: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}
.recruitment-body .rules{
  height: 10px;
  font-size: 16px;
  font-weight: 300;
  color: #666666;
  margin: 21px 0 32px ;
}
.recruitment-body p{
  font-size: 16px;
  font-weight: 300;
  color: #333333;
  opacity: 1;
  line-height: 32px
}
.recruitment-body .jobs{
  height: 12px;
  font-size: 16px;
  color: #333333;
  opacity: 1;
  margin-bottom:12px;
  margin-top:48px;
}
.recruitment-body button{
  font-size: 16px !important;
  float: right;
  width: 94px;
  height: 38px;
  border: 0;
  outline: none;
  background: #4074EF;
  opacity: 1;
  color: #fff;
  border-radius: 2px;
}
.online-contact{
  font-size: 0;
}
.online-contact img{
  width: 100%;
}
.contact{
  width: 100%;
  height: 420px;
  background: #F7F7F7;
  position: relative;
}
.contact .contact-con{
  position: absolute;
  top: -138px;
  left: 50%;
  margin-left: -600px;
  width: 1200px;
  height: 498px;
  background: #fff;
  opacity: 1;
}
.place{
  width: 100%;
  height: 603px;
  background: #FFFFFF;
  opacity: 1;
  display: flex;
  align-items: center;
}
.place .place-con{
  width: 1200px;
  height: 483px;
  margin: 0 auto;
  background-color: rgb(245, 10, 10);
}
</style>