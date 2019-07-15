<template id="tplIndex">
  <div id="app-index">
    <myHeader></myHeader>
    <!--轮播图-->
    <div class="container-fluid p-0 mt-2" id="top">
      <div data-ride="carousel" id="demo" class="carousel">
        <!--1.要轮播的图片 -->
        <div class="carousel-inner">
          <div class="carousel-item  active">
            <img src="image/banner/banner1.jpg" alt="" class="w-100"/>
          </div>
          <div class="carousel-item">
            <img src="image/banner/banner2.jpg" alt="" class="w-100"/>
          </div>
          <div class="carousel-item">
            <img src="image/banner/banner3.jpg" alt="" class="w-100"/>
          </div>            
          <div class="carousel-item">
            <img src="image/banner/banner4.jpg" alt="" class="w-100"/>
          </div>
          <div class="carousel-item">
            <img src="image/banner/banner5.jpg" alt="" class="w-100"/>
          </div>
          <div class="carousel-item">
            <img src="image/banner/banner6.jpg" alt="" class="w-100"/>
          </div>
          <div class="carousel-item">
            <img src="/image/banner/banner7.jpg" alt="" class="w-100"/>
          </div>
        </div>
        <!--2.左右小箭头 -->
        <a href="#demo" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#demo" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        <!--3.轮播指示器 -->
        <ul class="carousel-indicators">
          <li data-slide-to="0" data-target="#demo" class="active"></li>
          <li data-slide-to="1" data-target="#demo"></li>
          <li data-slide-to="2" data-target="#demo"></li>
          <li data-slide-to="3" data-target="#demo"></li>
          <li data-slide-to="4" data-target="#demo"></li>
          <li data-slide-to="5" data-target="#demo"></li>
          <li data-slide-to="6" data-target="#demo"></li>
        </ul>      
      </div>
    </div>
    <!--中间内容-->
    <section class="content-box">
      <!--分类： 新品 生日 儿童 聚会 活动专区-->
      <div class="proHome">
        <a href="#new">
          <img src="image/index/d349da941efba219856d5983958bdd81.jpg" alt="" title="新品"/></a>
        <a href="#birthday">
          <img src="image/index/b6f731149b7076b524114c0d7c387da0.png" alt="" title="生日"/></a>
        <a href="#child">
          <img src="image/index/0b331caf72a856549a98cf94d22cf3b3.png" alt="" title="儿童"/></a>
        <a href="#party">
          <img src="image/index/78c8a0592d41612c1f01ebe226d8b399.png" alt="" title="聚会"/></a>
        <a href="#active">
          <img src="image/index/82e473d51470b7151981ba05c81f5b6d.png" alt="" title="活动"/></a>
      </div>
      <!--1.新品专区-->
      <div id="new">
        <h4>新品<span> / 专区</span></h4>
        <div class="pro-banner">
          <router-link to="/product">
            <img src="image/index/new.jpg" alt=""/> 
          </router-link>
        </div>
        <ul class="product-list">
          <li class="pro-item" v-for="list in lists.slice(0,4)" :key="list.id">
            <router-link to="/details/pid=list.p_id">
            <img :src="list.pic" alt="" :title="list.pname"  @click="jumpInfo" :data-pid="list.pid"/>
            </router-link >
            <h6 class="ell">{{list.pname}}</h6>
            <p class="ell">{{list.subtitle}}</p>
            <div class="pro-content">
              <a href="">聚会&gt;</a>
              <a href="">新品&gt;</a>
            </div>
            <div class="cart-info">
              <span>￥{{list.price.toFixed(2)}}/{{list.size}}</span>
              <a href="javascript:;">加入购物车</a>
            </div> 
          </li>
        </ul>
      </div>
      <!--2.生日专区-->
      <div id="birthday">
        <h4>生日<span> / 专区</span></h4>
        <div class="pro-banner">
          <router-link to="/product">
            <img src="image/index/birthday.jpg" alt=""/> 
          </router-link>
        </div>
        <ul class="product-list">
          <li class="pro-item" v-for="list in lists.slice(4,8)" :key="list.id">
            <router-link to="/details/pid=list.p_id" target="_blank">
            <img :src="list.pic" alt="" :title="list.pname"/>
            </router-link>
            <h6 class="ell">{{list.pname}}</h6>
            <p class="ell">{{list.subtitle}}</p>
            <div class="pro-content">
              <a href="">聚会&gt;</a>
              <a href="">新品&gt;</a>
            </div>
            <div class="cart-info">
              <span>￥{{list.price.toFixed(2)}}/{{list.size}}</span>
              <a href="javascript:;">加入购物车</a>
            </div> 
          </li>
        </ul>
      </div>
      <!--3.儿童专区-->
      <div id="child">
        <h4>儿童<span> / 专区</span></h4>
        <div class="pro-banner">
          <router-link to="/product">
            <img src="image/index/children.jpg" alt=""/> 
          </router-link>
        </div>
        <ul class="product-list">
          <li class="pro-item" v-for="list in lists.slice(8,12)" :key="list.id">
            <router-link to="/details/pid=list.p_id" target="_blank">
            <img :src="list.pic" alt="" :title="list.pname"/>
            </router-link>
            <h6 class="ell">{{list.pname}}</h6>
            <p class="ell">{{list.subtitle}}</p>
            <div class="pro-content">
              <a href="">聚会&gt;</a>
              <a href="">新品&gt;</a>
            </div>
            <div class="cart-info">
              <span>￥{{list.price.toFixed(2)}}/{{list.size}}</span>
              <a href="javascript:;">加入购物车</a>
            </div> 
          </li>
        </ul>
      </div>
      <!--4.聚会专区-->
      <div id="party">
        <h4>聚会<span> / 专区</span></h4>
        <div class="pro-banner">
          <router-link to="/product">
            <img src="image/index/juhui.jpg" alt=""/> 
          </router-link>
        </div>
        <ul class="product-list">
          <li class="pro-item" v-for="list in lists.slice(12,16)" :key="list.id">
            <router-link to="/details/pid=list.p_id" target="_blank">
            <img :src="list.pic" alt="" :title="list.pname"/>
            </router-link>
            <h6 class="ell">{{list.pname}}</h6>
            <p class="ell">{{list.subtitle}}</p>
            <div class="pro-content">
              <a href="">聚会&gt;</a>
              <a href="">新品&gt;</a>
            </div>
            <div class="cart-info">
              <span>￥{{list.price.toFixed(2)}}/{{list.size}}</span>
              <a href="javascript:;">加入购物车</a>
            </div> 
          </li>
        </ul>
      </div>
      <!--5.活动专区-->
      <div id="active-content">
        <ul>
          <!--活动-->
          <li class="active">
            <h4>店铺活动<span>/往这儿瞅</span></h4>
              <router-link to="/activity" target="_blank">
                <img src="image/index/6D364BC6263777A977CF90DF0C162701.jpg" alt=""/>
              </router-link>
          </li>
          <!--客服-->
          <li class="kefu">
            <h4>客服<span>/联系我们</span></h4>
            <router-link to="/kefu" target="_blank">
              <img src="image/index/dea6a02ac712f5fc042a93d5cfe2c24a.jpg" alt=""/>
            </router-link>
          </li>
        </ul> 
      </div>
    </section>
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
          lists:[],
          uid:this.$route.query.uid
      }
    }, 
    methods: {
        jumpInfo(e){
            var pid=e.target.dataset.pid;
            this.$router.push({path:"/details/pid="+pid,query:{pid:pid}});
            console.log(pid);
            console.log("用户uid="+this.uid);
        },
        load(){
          //this->当前组件对象
          this.axios.get("http://localhost:3000/index").then(res=>{
            console.log(res.data.data);
            console.log(this.uid);
            this.lists=res.data.data
            console.log("用户uid="+this.uid);
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
<style>
*{margin:0;padding:0;}
  /*文本溢出隐藏不换行 */
  .ell{
    overflow: hidden;   /*溢出隐藏*/
    white-space: nowrap;  /*不换行*/
    text-overflow:ellipsis; /*补省略号*/
  }
  /*轮播图*/
  /*左右小箭头的样式*/
  .carousel-control-prev,
  .carousel-control-next{
    width:2%;height:20%;
    background:rgba(0,0,0,0.3);
    top:40%;
    border-radius:0.2rem;
  }
  .carousel-control-prev{left:1rem;}
  .carousel-control-next{right:1rem;}
  /*轮播指示器的样式*/
  .carousel-indicators li{
    width:10px;height:10px;
    border-radius:50%;
    background:#fff;
  }
  .carousel-indicators .active {
    background-color: #ff8d01;
  }
  /*商品内容框*/
  .content-box{
    width:1200px;
    margin:0 auto;
    padding:0px 42px;
  }
  /*分类小标题*/
  .proHome{
    width:1124px;
    margin:26px -4px 0px -4px;
    text-align:center;
    
  }
  /*小图片*/
  .proHome img{
    width:200px;
    height:100px;
    margin:6px 12px;
    box-shadow:2px 2px 2px 2px #bbb;
  }
  #new,#child,#birthday,#party,#active{
    width:1116px;
    padding-top:50px;
    
  }
  .pro-banner img{
    margin:0px 8px 20px 8px;
  }
  /*标题*/
  h4{
    font-size:26px;
    color:#724228;
    margin:0px 8px 20px 8px;
  }
  h6{
    font-size:16px;
    height:22px;
    margin:10px 0px 0px 0px;
    color:#000;
  }
  ul.product-list p{
    margin:0px;
    font-size:14px;
    color:#616161;
    height:24px;
    line-height:24px;
  }
  h4 span{
    font-size:14px;
  }
  /*商品列表*/
  ul.product-list{
    width:1116px;
    list-style:none;
  }
  ul.product-list li{
    width:263px;
    display:inline-block;
    margin:0px 8px;
  }
  ul.product-list li>a{
    display:inline-block;
    background:#fafafa;
    border-radius:10px;
  }
  ul.product-list img{
    transition:1s;
  }
  ul.product-list img:hover{
    transform:scale(1.1,1.1);
  }
  /*小标题的样式*/
  .pro-content a{
    font-size:12px;
    padding:0px 6px 0px 8px;
    text-align:center;
    border:1px solid #bb9772;
    border-radius:10px;
    margin:8px 3px;
    color:#bb9772;
  }
  .cart-info{
    padding-top:14px;
    margin-top:6px;
    border-top:1px dashed #d5bfa7;
    color:#bb9772;
    font-size:14px;
  }
  /*加入购物车按钮*/
  .cart-info a{
    height:20px;
    color:#fff;
    
    background:#643e28;
    padding:0px 10px;
    text-align:center;
    text-decoration:none;
    float: right;
  }
  #active-content{
    width:1116px;
  }
  #active-content ul{
    width:1116px;
    list-style:none;
  }
  #active-content ul li{
    width:542px;
    margin:0px 8px;
    display:inline-block;
    
  }
  #active-content ul li img{
    width:542px;
    height:252px;
    border-radius:5px;
  }
</style>