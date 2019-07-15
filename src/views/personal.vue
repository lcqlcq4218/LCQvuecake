<template>
    <div id="app-my">
        <myHeader></myHeader>
        <div class="personal">
            <div class="per-left">
                <div class="touImg">
                    <a href="javascript:;">点击上传头像</a>
                    <img src="image/avatar.png">
                    
                </div>
                <div class="msg">
                    <h4>{{ulist.uname}}</h4>
                    <div class="acc-phone">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    {{ulist.phone}}</div>
                    <p><a href="#">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    编辑个人资料
                    </a></p>
                    <p><a href="#">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;地址管理</a></p>
                    <p><a href="#" >
                    <i class="fa fa-file-text" aria-hidden="true"></i>
                    订单管理</a></p>
                </div>
            </div>
            <div class="per-right">
                <div class="">
                    <div class="t-center">
                        <img src="image/index/m1.jpg">
                        <a href="" class="d-block my_font1">余额：￥0</a>
                        
                    </div>
                    <div class="t-center">
                        <img src="image/index/m2.jpg">
                        <a href="" class="d-block my_font1">优惠券：0张可用</a>
                    </div>
                    <div class="t-center">
                        <img src="image/index/m3.jpg">
                        <a href="" class="d-block my_font1">代金卡：0张可用</a>
                    </div>
                </div>
            </div>
                <div class="member"> 
                    <div class="member-title">
                        <h4>会员中心</h4>
                        <p>您当前的身份是：<span>注册会员</span></p>
                    </div>
                    <div class="member-content">
                        <img src="image/index/new_membership.png">
                        <div class="member-rule">
                            <p>果实规则：</p>
                            <p>1、订单实际支付金额每满100元，则将自动获得1颗果实，以此类推。累积果实可升级，并享受各级会员权益。订单中使用优惠券、订单促销等优惠抵扣的金额不参与消费金额的累积。</p>
                            <p>2、每90天内未产生购买，果实减一颗，若果实减少为下一等级数量时，等级相应降低，上一级别的固定权益失效。</p>
                            <p>3、所获得的权益自获得日起，一年内有效。</p>
                            <a href="#" class=""><u>了解更多>></u></a>
                        </div>
                    </div>
                </div>
            </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
//1.先引入header.vue组件对象，临时命名为myHeader，将来组件标签就是<my-header>
import myHeader from '@/components/header.vue'
import myfooter from '@/components/footer.vue'
export default {
    data() {
        return {
            ulist:[]
        }
    },
    methods:{
        load(){
            var uu=sessionStorage.getItem("uid");
            var url="http://127.0.0.1:3000/getUser?uid="+uu;
            this.axios.get(url).then(result=>{
                console.log(result.data.data);
                this.ulist=result.data.data[0];
                console.log(this.ulist.uname);
            })
        }
    },
    created(){
        this.load();
    },
    //2. 将header.vue设置为当前组件的子组件
    components:{
      myHeader,
      myfooter
    }
}
</script>
<style scoped>
    .personal{
        width:1200px;
        margin:0 auto;
        padding-top:30px;  
    }
    .per-left{
        width:500px;
        height:200px;
        display:inline-block;
        background:#f6f5f3;
    }
    /* 头像父元素 */
    .per-left .touImg{
        width:100px;
        border-radius:50%;
        display:inline-block;
        margin:50px 20px 50px 30px;
        position: relative;
    }
    .per-left .touImg a{
        position: absolute;
        top:0px;
        left:0px;
        width:100px;
        height:100px;
        background: #5f504e;
        color:#fff;
        font-size:12px;
        line-height: 100px;
        text-align: center;
        opacity: 0.7;
        border-radius: 50%;
        z-index: 999;
        text-decoration:none;
        display:none;
    }
    .per-left .touImg:hover a{
        display: block;
    }
    /* 头像图片 */
    .per-left .touImg img{
        width:100%;
        height:100%;
    }
    /* 个人信息 */
    .per-left .msg{
        width:300px;
        display:inline-block;
        float:right;
        color:#5f504e;
        margin-top:30px;
    }
    /* 字体 */
    h4{
        font-size:24px;
        margin:0px 0px 10px 0px;
    }
    div.acc-phone{
        font-size:12px;
        margin-bottom:10px;
    }
    .per-left .msg a{
        font-size:14px;
        color:#5f504e;
        text-decoration:none;
    }
    .per-right{
        width:650px;
        height:200px;
       text-align: center;
        background:#f6f5f3;
        float:right;
    }
    .per-right .t-center{
        display: inline-block;
        width:200px;
        height:134px;
        text-align: center;
        margin-top: 40px;
    }
    .per-right a{
        text-decoration: none;
        color: #64605f;
        font-size:14px;
    }
    .per-right a:hover{color:rgba(247, 124, 36, 0.788)}
    .member{
        width:1200px;
        padding:30px 70px;
        margin-top:30px;
        background:#f6f5f3;
        color:#5f504e;
        text-align:center;
    }
    .member .member-title{
        text-align:center;
        margin-top:40px;
    }
    .member .member-title h4{
        font-size:22px;
    }
    .member .member-title p{
        font-size:12px;
    }
    .member .member-title span{
        color:#c6b198;
    }
    .member-rule{
        text-align:left;
        margin-top:20px;
        font-size:14px;
    }
    .member-rule p{
        margin:5px 0px;
    }
    .member-rule a{
        color:#5f504e;
    }
</style>