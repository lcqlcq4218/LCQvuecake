<template id="tplProduct">
    <div id="app-product">
        <myHeader></myHeader>
        <!-- 内容-->
        <div class="container mt-4" id="app">
            <!--主导航-->
            <div class="pro-nav">
                <ul class="">
                    <li class="">
                        <a disabled>分类：</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="" @click="allPro">全部分类</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="" @click="allCake">蛋糕</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="" @click="iceCream">冰淇淋</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="" @click="coffee">咖啡下午茶</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="" >常温蛋糕</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="" @click="bread">面包</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="">设计师礼品</a>
                    </li>
                </ul>
                <!-- 子导航-->
                <ul class="">
                    <li class="">
                        <a class="">口味：</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="">全部口味</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="">乳脂奶油</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="">慕斯</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="">乳酪</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="">巧克力</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="">坚果</a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="">水果</a>
                    </li>
                </ul>
            </div>
            
            <!--商品搜索-->
            <div class="searchShop" >
                搜索商品：
                <input type="text" placeholder="请输入要搜索的商品" name="key" v-model="key">
                <input class="btnn" type="submit" value="搜索" @click="searchKey">
            </div>                     
            <!-- 下、商品-->
            <div class="tab-content pro-list-box" v-if="lists.length>0">
                <!-- 1、蛋糕-->
                <ul id="cake" class="pro-list-pr active">
                    <li class="list-good" v-for="(list,index) in lists" :key="list.pid" >
                        <div class="pro-list">
                            <!--<router-link :to="'/details/pid='+list.pid">-->
                                <div class="img_bg">
                                    <img :src="list.pic" alt="哎呀，蛋糕走丢了" :title="list.pname" @click="jumpInfo" :data-pid="list.pid"/>
                                    <div class="lazy"><img src="image/product/xinpin.png"></div>
                                </div>
                                <p class="font16 ell">{{list.pname}}</p>
                                <p class="font14">￥{{list.price.toFixed(2)}}/{{list.size}}</p>
                           <!-- </router-link>-->
                            <div class="pro-content">
                                <a href="">聚会&gt;</a>
                                <a href="">新品&gt;</a>
                            </div>                           
                            <button class="cart" :data-pid="list.pid" @click="addCart(index)">加入购物车</button> 
                            
                        </div> 
                        <!--隐藏的规格框-->
                        <div class="pro-specification">
                            <h5 class="my_font2">￥{{list.price.toFixed(2)}}</h5>
                            <h6>商品规格</h6>
                            <ul class="pro-size">
                                <li><a href="">{{list.size}}</a></li>
                                <li><a href="">{{list.size}}</a></li>
                                <li><a href="">{{list.size}}</a></li>
                                <li><a href="">{{list.size}}</a></li>
                                <li><a href="">{{list.size}}</a></li>
                            </ul>
                            <div class="buy-cart">
                                <button class="buy" >立即购买</button>
                                <button class="cart" @click.prevent="addCart">加入购物车</button>
                            </div>
                        </div>                    
                    </li>
                    
  
  
                </ul>
                <!--分页-->
                <ul class="pagination mt-5 justify-content-center">
                    <li class="page-item disabled">
                        <a href="javascript:;" class="page-link" >上一页</a>
                    </li>
                    <li class="page-item active">
                        <a href="javascript:;" class="page-link">1</a>
                    </li>
                    <li class="page-item">
                        <a href="javascript:;" class="page-link">2</a>
                    </li>
                    <li class="page-item">
                        <a href="javascript:;" class="page-link">3</a>
                    </li>
                    <li class="page-item">
                        <a href="javascript:;" class="page-link">4</a>
                    </li>
                    <li class="page-item">
                        <a href="javascript:;" class="page-link">5</a>
                    <li class="page-item">
                        <a href="javascript:;" class="page-link" >下一页</a>
                    </li>
                </ul>
            </div>
            <div v-else class="notfind">
                <p>主人，您要的商品被我吃完了，您可以考虑一下其他的商品呦，嘻嘻！！！... ヾ(๑╹◡╹)ﾉ"</p>
            </div>
        </div>
        <myfooter></myfooter>
        
    </div>
</template>
<script>
//0:在export  之前引入需要组件
//import {Toast} from "mint-ui"
//1.先引入header.vue组件对象，临时命名为myHeader，将来组件标签就是<my-header>
import myHeader from '@/components/header.vue'
import myfooter from '@/components/footer.vue'
export default {
    data() {
        return {
            lists:[],//保存全部商品的数据
            list:[],//保存单个商品的数据
            pno:1,     //当前页码
            pageSize:12, //页大小
            key:"",
            uid:this.$route.query.uid,
            busy:false
        }
    },
    
    methods:{
        goodList(){
            var url="http://localhost:3000/shopList";
                this.axios.get(url).then(res=>{
                    console.log(res.data.data);
                    this.lists=res.data.data
            })
        },
        /*加入购物车隐藏*/
        /*display1(){
           //e.stopPropagation();
            this.$("pro-specification").css({width:260,opacity:1}); 
        },*/
        /*商品搜索*/
        searchKey(e){
            var key=this.key;
            var url="http://localhost:3000/search?key="+key;
            this.axios.get(url).then(result=>{
                console.log(result.data.data);
                this.lists=result.data.data
            })       
        },
        /*全部商品*/
        allPro(){
            this.loadMore();
        },
        iceCream(){
            var fname_id=2;
            var url="http://localhost:3000/iceCream?fname_id="+fname_id;
            this.axios.get(url).then(result=>{
                console.log(result.data.data);
                this.lists=result.data.data
            }) 
        },
        allCake(){
            var url="http://localhost:3000/allCake?fname_id=1";
            this.axios.get(url).then(result=>{
                console.log(result.data.data);
                this.lists=result.data.data
            }) 
        },
        coffee(){
            var url="http://localhost:3000/coffee?fname_id=3";
            this.axios.get(url).then(result=>{
                console.log(result.data.data);
                this.lists=result.data.data
            }) 
        },
        bread(){
            var url="http://localhost:3000/bread?fname_id=5";
            this.axios.get(url).then(result=>{
                console.log(result.data.data);
                this.lists=result.data.data
            }) 
        },
        jumpInfo(e){
            var pid=e.target.dataset.pid;
            this.$router.push({path:"/details/pid="+pid,query:{pid:pid}});
            console.log(pid);
        },
        addCart(index){
            var uu=sessionStorage.getItem("uid");
            var uname=sessionStorage.getItem("uname");
            console.log("用户名："+uname+"用户id："+uu);
            //0.为按钮绑定单击事件
            //1.获得个参数 pid uid 
            this.list=this.lists[index];
            console.log(this.list);
            var pid=this.list.pid;
            var pname=this.list.pname;    
            var price=this.list.price;   
            var pic=this.list.pic;
            var size=this.list.size;
            console.log(uu);
            //2.发送ajax请求
            var url="http://127.0.0.1:3000/addCart?pid="+pid;
            url+=" &pname="+pname+"&price="+price+"&pic="+pic;
            url+=" &size="+size+"&uid="+uu;
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    alert("添加成功");
                    
                }else{
                    alert("请登录");
                }
            })
            
        }
    },
    created() {
       
        this.goodList();
    },
    //2. 将header.vue设置为当前组件的子组件
    components:{
      myHeader,
      myfooter
    }
}
</script>
<style scoped>
    /*本页面共用样式*/
    .font16{font-size:16px;color:#684029;}
    a:hover>.font16{color:#b49f74;}
    .font14{font-size:14px;color:#b49f74;}
    p{padding:0px;margin:0px;}
    a:hover{color:#b49f74;}
    a{
        text-decoration:none;
        color:#b49f74;
        display:inline-block;
    }
    ul{
        list-style:none;    /*去掉列表标识符*/
        padding:0px;
    }
    li{display:inline-block;}
    /*文本溢出隐藏不换行 */
    .ell{
        overflow: hidden;   /*溢出隐藏*/
        white-space: nowrap;  /*不换行*/
        text-overflow:ellipsis; /*补省略号*/
    }
    /*导航栏字体*/
    .pro-nav{
        border-top:1px solid #b49f74;
        border-bottom:1px solid #b49f74;
    }
    .pro-nav ul{
        height:50px;
        padding:0px;
        margin:0px;          
    }
    .pro-nav ul>:first-child a{
        color:#9b9b9b;
    }
    .pro-nav a{
        height:50px;
        line-height:50px;
        font-size:14px;
        color:#684029;
        margin:0px 13px;
        display:inline-block;
    }
    /*搜索部分样式*/
    .searchShop{
        font-size:14px;
        color:#684029;
        margin-top:30px;
    } 
    input{
        width:250px;
        border:1px solid #684029;
        padding:5px;
    }
    input.btnn{
        width:50px;
        border-left:0px;
        color:#fff;
        background:#684029;
    }
    /*商品列表*/
    .pro-list-box{text-align:left;margin-top:30px;}
    /*每个商品的块*/
    .pro-list-pr{width:1140px;}
    ul li.list-good{ 
        width:260px;
        text-align:center;
        margin:8px;
        position:relative;
    }
    .pro-list .img_bg{
        width:228px;
        
        overflow:heidden;       
        position:relative;
    }
    /*商品图片样式*/
    .pro-list img{
        width:228px;
        height:246px;
        transition:1s;
        margin-bottom:20px;
    }
    .lazy img{
        position:absolute;
        top:0px;
        left:0px;
        width:65px;
        height:23px;
    }
    /*鼠标悬浮商品图片放大*/
    .img_bg>img:hover{
        transform:scale(1.1,1.1);
    }
    /*小标题的样式*/
    .pro-content a{
        font-size:12px;
        padding:0px 10px;
        text-align:center;
        border:1px solid #b49f74;
        border-radius:10px;
        margin:0px 5px;
    }
    /*点击加入购物车隐藏的样式*/
    .pro-specification{
        height:195px;
        text-align:left;
        padding:10px;
        color:#684029;
        background:#f8f8f8;
        position:absolute;
        bottom:0px;
        display:none;
		transition: all .5s linear;
    }
    h5{font-size:15px;font-weight:bold;}
    ul.pro-size,.h6{font-size:12px;}
    /*尺寸规格*/
    ul.pro-size li a{
        width:50px;height:30px;
        border:1px solid #684029;
        color:#684029;
        text-align:center;
        line-height:30px;
        margin:0px 10px 10px 0px;
    }
    /*购买加入购物车按钮*/
    .buy-cart{
        display:flex;
        margin-top:10px;
        justify-content:space-between;
    }
    /*按钮*/
    button{
        height:30px;
        font-size:13px;
        border:1px solid #684029;
    }
    /*立即购买按钮*/
    .buy{
        color:#684029;
        background:#fff;
        font-size:13px;
        line-height:30px;
        margin-top:10px;
        padding:0px 10px;
    }
    /*加入购物车按钮*/
    .cart{
        color:#fff;
        background:#684029;
        text-align:center;   
        margin-top:10px;
        padding:0px 10px;
    }
    /*未找到的样式*/
    .notfind{
        margin-top:40px;
        height:500px;
        text-align:center;
        color:#ccc ;  
    }
    
</style>