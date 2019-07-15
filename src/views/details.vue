<template id="tplDetails">
  <div id="app-details">
    <myHeader></myHeader>
    <!-- 产品详情-->
    <div class="pro-details" v-for="item in list" :key="item.id">
        <!-- 上，图片-->
        <div class="details-img">
            <!--大图-->
            <div class="img-lg">
                <img :src="ImgUrl" alt="" />
            </div>
            <!--小图-->
            <ul class="img-sm" >
                <li class="img-sm-item" v-for="img in imgList"  @mouseover="getUrl(img.url)" :key="img.index">
                    <img :src="img.url" alt=""
                         data-target="item.pic"/>
                </li>                         
            </ul>
        </div>
        <!-- 下，文字介绍-->
        <div class="pro-details-cont">
            <div class="details-cont-left"> 
                <h1>{{item.pname}}</h1>
                <p>{{item.subtitle}}</p>
                <div class="pro-details-label">
                    <a href="">聚会&gt;</a>
                    <a href="">新品&gt;</a>
                </div>
                <ul class="details-constituent">
                    <li>
                        <img src="image/product_details/pcicon-03.png" alt=""/>樱桃酒
                    </li>
                    <li>
                        <img src="image/product_details/pcicon-13.png" alt=""/>浸白兰地黑车厘子
                    </li>
                </ul>
                <div class="pro-details-explain">
                    {{item.details}}
                </div>
                <ul class="details-distribution">
                    <li><i class="fa fa-snowflake-o" aria-hidden="true"></i>保鲜条件：{{item.preserve}}</li>
                    <li class="det-start"><img src="image/product_details/sweet.jpg" alt=""/>参考甜度：
                        <div class="det-st">
                            <div class="star-after">
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                            </div>
                            <!--<div class="star-before">
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            </div>-->
                        </div>
                    </li>
                </ul>
            </div>
            <div class="details-cont-right" >
                <div class="details-box">
                    <img :src="url">
                    <p class="details-price">￥<span>{{price.toFixed(2)}}</span>/{{size}}</p>
                    <ul class="details-options">
                        <li>
                            <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                            约{{cm}} x {{cm}}</li>
                        <li><i class="fa fa-users" aria-hidden="true"></i>
                        适合 {{num}} 人分享</li>
                        <li>
                            <i class="fa fa-spoon" aria-hidden="true"></i>
                            <i class="fa fa-spoon" aria-hidden="true"></i>
                             含 {{can}} 套餐具（蜡烛需单独订购）</li>
                        <li>
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        最迟明天早上09:30送达</li>
                    </ul>
                </div>
                <dl class="dl-size" >
                    <dt>商品规格</dt>
                    <dd >
                        <ul>
                            <li  v-for="(sizeList,i) in sizeLists" :key="sizeList.i" >
                                <a href="javascript:;" @click="getsize(i)" active>{{sizeList.size}}</a>
                            </li>
                            
                        </ul>
                    </dd>
                    
                </dl>
                <button @click="addCart">加入购物车</button>
            </div>
        </div>
        <!--详情图-->
        <div>
            <img src="image/product_details/99df612a99bf0b174200f4101a5acf7b.jpg" alt="" />
            <img src="image/product_details/ca93f3db0a4f2e93048c3b4c53291c82.jpg" alt="" />
            <img src="image/product_details/716c3fec4465920106215542d6643e5b.jpg" alt="" />
            <img src="image/product_details/148a57b708c23c54149a3af2f3fcc672.jpg" alt=""/>
        </div>
        <!-- 底部无缝轮播图-->
        <div class="details-recommend">
            <h2>商品推荐</h2>
            <ul>
                <li><img src="image/product/0d607c3efdc5ef65e01d5f931b70cf5a.jpg"></li>
                <li><img src="image/product/eff950e4c6ee3cb8abcf7da002ecb619.jpg"></li>
                <li><img src="image/product/0d607c3efdc5ef65e01d5f931b70cf5a.jpg"></li>
                <li><img src="image/product/eff950e4c6ee3cb8abcf7da002ecb619.jpg"></li>
            </ul>
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
            imgList:[
                {url:"http://127.0.0.1:3000/details/6fed220363e362cbc413bbcf3424205a.jpg",index:1},
                {url:"http://127.0.0.1:3000/details/20a778bab29014f0d363d6ea9c537e36.jpg",index:2},
                {url:"http://127.0.0.1:3000/details/532b8e6cc09ea5febe9ac88f2d208cf3.jpg",index:3}
            ],
            ImgUrl:"http://127.0.0.1:3000/details/6fed220363e362cbc413bbcf3424205a.jpg",
            list:[],
            pid:this.$route.query.pid,
            info:{},
            uid:this.$route.query.uid,
            sizeLists:[
                {
                    size:"1磅",
                    items:[
                        {id:1,price:198.00},
                        {id:2,cm:"15cm"},
                        {id:3,num:"2~3"},
                        {id:4,can:"5"},
                        {id:5,url:"http://127.0.0.1:3000/details/size01.jpg"}
                    ]
                },
                {
                    size:"2磅",
                    items:[
                        {id:1,price:298.00},
                        {id:2,cm:"20cm"},
                        {id:3,num:"3~4"},
                        {id:4,can:"10"},
                        {id:5,url:"http://127.0.0.1:3000/details/size02.jpg"}
                    ]
                },
                {
                    size:"3磅",
                    items:[
                        {id:1,price:398.00},
                        {id:2,cm:"25cm"},
                        {id:3,num:"5~6"},
                        {id:4,can:"15"},
                        {id:5,url:"http://127.0.0.1:3000/details/size03.jpg"}
                    ]
                },
                {
                    size:"5磅",
                    items:[
                        {id:1,price:798.00},
                        {id:2,cm:"30cm"},
                        {id:3,num:"8~10"},
                        {id:4,can:"20"},
                        {id:5,url:"http://127.0.0.1:3000/details/size05.jpg"}
                    ]
                },
            ],
            cm:"15",
            num:"2~3",
            can:"5",
            url:"http://127.0.0.1:3000/details/size01.jpg",
            price:198.00,
            size:"2磅"
           
        }
    },
    
    methods:{
        getUrl(imgUrl){
            this.ImgUrl=imgUrl;
        },
        //详情页的加载
        loadList(){
            var pid=this.pid;
            //console.log(pid);
            var url="http://127.0.0.1:3000/details?pid="+pid;
            this.axios.get(url).then(result=>{
                console.log(result.data.data);
                this.list=result.data.data;
                
            })
        },
        //添加购物车
        addCart(){
            console.log(123);
            console.log(this.list);
            this.info=this.list[0],
            console.log(this.info);
            var pid=this.info.pid;
            var price=this.info.price;
            var pic=this.info.pic;
            var pname=this.info.pname;
            var size=this.info.size;
            var uid=this.uid;
            console.log(uid);
            console.log(pid+":"+price+":"+uid);
            //2.发送ajax请求
            var url="http://127.0.0.1:3000/addCart?pid="+pid;
            url+=" &pname="+pname+"&price="+price+"&pic="+pic;
            url+=" &size="+size+"&uid="+uid;
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    alert("添加成功");
                }else{
                    alert("请登录");
                }
            })
        },
        getsize(i){
            this.price=this.sizeLists[i].items[0].price;
            this.cm=this.sizeLists[i].items[1].cm;
            this.num=this.sizeLists[i].items[2].num;
            this.can=this.sizeLists[i].items[3].can;
            this.url=this.sizeLists[i].items[4].url;
            this.size=this.sizeLists[i].size;
        }
        
    },
    created(){
        this.loadList();
    },
    //2. 将header.vue设置为当前组件的子组件
        components:{
        myHeader,
        myfooter
        }
    }

</script>
<style scoped>
    *{
        margin:0px;
        padding:0px;
        color:#684029;
        font-size:12px;
    }
    
    ul{list-style:none;padding:0;}
    .pro-details{
        width:1200px;
        margin:20px auto;
    }
    /*图片样式*/
    .details-img{
        margin-bottom:20px;
    }
    .details-img img{
        width:100%;
        height:100%;
    }
    /*大图样式*/
    .img-lg{
        width:924px;
        height:520px;
        display:inline-block; 
    }
    /*小图样式*/
    ul.img-sm{
        display:inline-block; 
        margin-left:50px;      
        position:relative;
        right:0px;
        bottom:0px;
    }
    .img-sm-item{
        width:90px;
        height:50px;
        margin-bottom:20px;
        border:1px solid #ccc;
    }
    .img-sm-item:hover{
        border:1px solid #c27a50;
        cursor:pointer;
    }
    /*左边详情*/
    .details-cont-left{
        width:600px;
        padding-left:50px;
        display:inline-block;
    }
    h1{
        font-size:20px;     
    }
    p{
        height:17px;
        color:#ff3933;
        font-size:12px;
        line-height:17px;
    }
    /*商品小标题*/
    .pro-details-label{
        height:20px; 
        margin:20px 0px;   
    }
    .pro-details-label a{
        font-size:12px;
        padding:0px 10px;
        text-align:center;
        border:1px solid #b49f74;
        border-radius:10px;
        margin-right:5px;
        color:#b49f74;
        text-decoration:none;
    }
    /*商品简介*/
    .details-constituent li{
        display:inline-block;
    }
    .details-constituent img{
        width:50px;
        height:50px;
    }
    .pro-details-explain{
        margin-top:14px;
        width:500px;
    }
    .details-distribution li{
        height:34px;
        line-height:34px;
    }
    .details-distribution i{
        font-size:20px;
        color:#b2e4f5;
        margin-right:10px;
    }
    /*甜度星级样式*/
    .det-star{
        position: relative;
    }
    .det-st{
        position: relative;
        left: 20rpx;
        display:inline-block;
       
    }
    .det-st i{
        font-size:14px;
         color:#684029;
    }
    .star-after{color:#e2e2e2;}
    .star-before{
        position: absolute;
        top:0;
        left:0;
        overflow: hidden;   /*溢出隐藏*/
        color:#f19e38;
        width:60%;
    }
    /*右边详情*/
    .details-cont-right{
        width:600px;
        display:inline-block;
    }
    /*规格图片*/
    .details-box img{
        width:300px;
        height:170px;
    }
    /*提示*/
    .details-options{
        margin-left:30px;
    }
    .details-options li{
        height:25px;
        line-height:25px;
    }
    /*价格样式*/
    .details-price{
        color:#c69c6d;
        font-size:18px;
        display:inline-block;
        position:relative;
        top:70px;
        right:-40px;
    }
    .details-price span{
        font-size:26px;
        color:#c69c6d;
    }
    /*规格样式*/
    .dl-size,.dl-size ul{
        margin-top:10px;
    }
    dl ul li{
        display:inline-block;
        margin-right:20px;        
    }
    dl a{
        display:inline-block;
        width:60px;
        height:30px;
        border:1px solid #e7e0dd;
        text-decoration:none;
        text-align:center;
        line-height:30px;
    }
    dl a:hover{
        color:#684029;
        border:1px solid #684029;
    }
    button{
        height:30px;
        font-size:13px;
        border:1px solid #684029;
        color:#fff;
        background:#684029;
        text-align:center;   
        margin-top:10px;
        padding:0px 10px;
    }
    /*商家推荐*/
    h2{
        font-size:18px;
        color:#684029;
        height:50px;
        line-height:50px;
        border-bottom:2px solid #b49f74;   
    }
    .details-recommend ul{
        margin:20px 0px 40px 0px;
        display:flex;
        list-style:none;
        justify-content:space-between;
    }
    .details-recommend ul li{
        width:252px;
        height:252px;
        border:1px solid red;
    }
    .details-recommend img{width:100%;height:100%;}
</style>
