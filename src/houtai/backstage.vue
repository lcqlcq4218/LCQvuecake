<template>
  <div id="app-backstage">
    <!--头部-->
    <div class="back-header">
      <p class="p1">蛋糕店管理系统</p>
      <p class="p2">2019-05-16</p>
      <p class="p3"><a href="javascript:;">退出</a></p>
    </div>
    <!-- 下部信息 -->
    <div class="back-box">
      <!--导航-->
      <ul class="back-nav">
        <li>
          <div class="tou"></div>
          <p>咪咔咪咔</p>
          <p>系统管理员</p>
        </li>
        <li>营业管理<span>&gt;</span></li>
        <li>客户管理<span>&gt;</span></li>
        <li>订单管理<span>&gt;</span></li>
        <li>商品管理<span>&gt;</span></li>
        <li>业绩报刊<span>&gt;</span></li>
        <li>系统设置<span>&gt;</span></li>
      </ul>
      <!-- 右侧系统信息 -->
      <div class="message">
        <div>
          今日收入
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import userManage from '@/houtai/user.vue'
  export default {
    data() {
      return {
          lists:[]
      }
    },
    methods:{

    },
    created(){

    }
  }
</script>
<style>
  /*清内外边距*/
  p{
    margin:0px;padding:0px;
    border-sizing:border-box;
  }
  /*头部背景*/
  .back-header{
    width:100%;
    color:#fff;
    background:#684029;
    
  }
  .back-header p{
    display:inline-block;
    height:50px;
    line-height:50px;
    
  }
  .p1{
    width:200px;
    text-align:center;
    font-size:24px;
    margin-left:50px;
  }
  .p2{
    width:1200px;
    text-align:center;
  }
  .p3 a{
    text-align: right;
    color:#fff;
    text-decoration: none;
  }
  .back-box{display: flex;}
  /*左侧导航栏*/
  .back-nav{
    width:160px;
    height:900px;
    padding-top:20px;
    text-align:center;
    color:#684029;
    font-size:14px;
    display:inline-block;
    border:1px solid #b49f74;
    list-style:none;
    background:#fff;
  }
  .back-nav li{
    padding:10px 30px;
    border-bottom:1px solid #ddd;
    transition: 0.5s;
  }
  .back-nav span{
    margin-left:10px;
  }
  .back-nav li .tou{
    width:100px;
    height:100px;
    border-radius:50%;
    border:1px solid #ddd;
    overflow:heidden;
    margin-bottom:10px;
  }
  .back-nav li p:last-child{
    color:#bbb;
    font-size:12px;
  }
  .back-nav li:not(:first-child):hover{
    background: #684029;
    color:#fff;
  }
  .message{
    border: 1px solid red;
    display: inline-block;
    height:500px;
    width:1000px;
  }
</style>