<template id="tplHeader">
    <div id="app-header">
    <div class="header-fixed">
        <!-- 用户未登录 -->
        <div class="header">
            <!-- logo-->
            <div class="logo">
                <a href="#"><img src="image/index/dream.png" alt=""/></a>
            </div>
            <!-- 导航栏-->
            <ul class="cake-nav">
                <li><router-link to="/index">首页</router-link></li>
                <li><router-link to="/product">蛋糕</router-link></li>
                <li><router-link to="/product">面包</router-link></li>
                <li><router-link to="/product">冰淇淋</router-link></li>
                <li><router-link to="/product">咖啡下午茶</router-link></li>
                <li><router-link to="/product">咖啡全国送</router-link></li>
                <li><router-link to="/product">企业专区</router-link></li>  
            </ul>
            <ul class="cake-nav">
                <!-- 地址 -->
                  <li>
                    <a href="">上海</a>
                  </li>  
                <!-- 消息 -->
                <li>
                    <router-link to="/addr">消息</router-link>
                </li>
                <!-- 登录注册 -->
                <li v-if="!this.uid">
                    <router-link to="/login">登录</router-link>/
                    <router-link to="/register">注册</router-link>
                </li>
                <!-- 用户中心 -->
                <li class="i" v-else>
                    <router-link to="/personal"><i class="fa fa-user-o" aria-hidden="true"></i></router-link>
                </li>
                <!-- 购物车 -->
                <li><router-link to="/shopcart">购物车</router-link></li>
                <li v-if="!this.uid"></li>
                <!-- 退出 -->
                <li @click="logout" v-else><a href="javascript:;">退出</a></li>
                <!-- 地址 -->
                <ul class="addr">
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>深圳</li>
                    <li>天津</li>
                    <li>杭州</li>
                    <li>苏州</li>
                </ul>
                <!-- 消息 -->
                <ul class="message">
                    <li>我的订单</li>
                    <li>我的订单</li>
                    <li>我的订单</li>
                    <li>我的订单</li>
                    <li>我的订单</li>
                </ul>
            </ul>   
        </div>
    </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            uid:"",
            islogin:true
        }
    },
    methods:{
        load(){
            var uu=sessionStorage.getItem("uid");
            this.uid=uu;
            console.log("uid:"+this.uid+"+uid:"+uu);
        },
        //退出操作
        logout(){
            var url = "http://127.0.0.1:3000/logout";
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    alert("已退出");
                    this.uid=null;
                    sessionStorage.removeItem("uid");
                }
                this.$router.push('/login');
                
            })
        },
        //跳转商品
        getProduct(){
            this.$router.push({path:'/product',query:{uid:this.uid}});
        }
    },
    created(){
        console.log(this.uid);
        this.load();
    }
}
</script>
<style scoped>
    *{margin:0;padding:0;}
    a{
        text-decoration:none;
        color:#684029;
    }
    a:hover{color:#000;}
    /*头部父元素给个高度，解决高度坍塌*/
    #app-header{
        height:81px;
       
    }
    .header-fixed{
        width:100%;
        height:81px;
        position:fixed;      /*固定定位*/
        border-bottom:1px solid #e2e2e2;
        box-shadow:2px 0px 2px 2px #e2e2e2; /*下边框阴影*/
         z-index:20;          /*堆叠顺序*/
         background:white;
    }
    /*头部导航固定定位*/
    .header{
        width:1200px;
        height:80px;
        background:white;
        align-items:center;  /*垂直居中*/
        margin:0px auto;
        
    }
    .logo,.cake-nav{
        display:inline-block;
    }
    /*logo样式*/
    .logo img{
        width:80px;
        height:80px;
        align-items:center;     /*元素垂直居中*/
        
    }
    /*导航栏样式*/
    .cake-nav{
        position:relative;      
        list-style:none;
        color:#684029;
        font-size:14px;
        line-height:80px;
        margin-left:100px;
    }
    ul.cake-nav>li{
        margin:0 15px;
        display:inline-block; 
    }
    /* 地址 */
    ul.addr{
        width:100px;
        height:0px;
        list-style:none;
        text-align:center;
        color:#684029;
        font-size:12px;
        position:absolute;
        overflow: hidden;
        top:75px;
        left:-21px;
        background: #fff;
        transition: 1s;
    }
    ul.addr>li{
        height: 20px;
    }
    .header .cake-nav>li:nth-child(1):hover~.addr{
        height:200px;
        
    }
    /* 消息 */
    .header .cake-nav .message{
        position: absolute;
        list-style:none;
        width:100px;
        height:200px;
        top:60px;
        left:40px;
        display: none; 
        background: #fff;
    }
    .header .cake-nav .message li{
        height: 20px;
        padding: 5px 20px;
    }
     .header .cake-nav>li:nth-child(2):hover~.message{
        display: block;
    } 
    /* 用户和购物车图标大小 */
    .cake-nav li.i{font-size:20px;}
</style>