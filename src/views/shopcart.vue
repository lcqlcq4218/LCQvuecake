<template id="tplShopcart">
    <div id="app-shopcart">
        <myHeader></myHeader>
        <div class="cart">
                <!--购物车详情-->
                <div class="cart-list" v-if="cartLists.length>0">
                    <!--列表头部-->                                  
                    <ul class="cartHead">
                        <li class="cart-list-xuan">
                            <input type="checkbox" :checked="allcb" @click="selectAll">全选
                        </li>
                        <li class="cart-list-pro">商品</li>
                        <li class="cart-list-birth">生日牌</li>
                        <li class="cart-list-price">价格</li>
                        <li class="cart-list-num">数量</li>
                        <li class="cart-list-money">金额</li>
                        <li class="cart-list-del" >删除</li>               
                    </ul>                   
                    <!--购物车内容-->
                    <table class="cartBody" v-if="cartLists.length>0">                
                        <tr class="goods-list" v-for="(item,i) in cartLists" :key="item.id">
                            <td class="goods-xuan">
                                <input type="checkbox" :checked="item.cb" :data-i="i" @click="modifyItem">
                            </td>
                            <td class="goods-img">
                                <a href="#"><img :src="item.pic"></a>
                            </td>
                            <td class="goods-cake">
                                <a href="#">{{item.pname}}</a>
                                <p>规格：{{item.size}}</p>
                                <p><img src="image/product/canju.png">赠送10套餐具</p>
                            </td>
                            <td class="goods-birth">
                                <select >
                                    <option>生日快乐</option>
                                    <option>happy birthday!</option>
                                    <option>天天开心呦！</option>
                                    <option>身体健康</option>
                                </select>
                            </td>
                            <td class="goods-price">￥{{item.price.toFixed(2)}}</td>
                            <td class="goods-num">
                                <div class="num">
                                    <button @click="goodSub(i)">-</button>
                                    <input type="text" :value="item.count">
                                    <button @click="goodAdd(i)">+</button>
                                </div>                             
                            </td>
                            <td class="goods-money">￥{{(item.price*item.count).toFixed(2)}}</td>
                            <td class="goods-del">
                                <a href="#" :data-id="item.id" :data-idx="i" @click="delItem">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </a>
                            </td>
                        </tr>
                    </table>
                    <!--card脚部-->
                    <div class="cartFooter">
                        <ul class="footer-list">
                            <li>
                                <input type="button" value="删除选中商品" @click="delCart">
                                商品金额：￥{{totalPrice.toFixed(2)}}
                            </li>
                            <li>
                                活动优惠：￥0.00
                            </li>
                            <li>
                                <span>合计：￥{{totalPrice.toFixed(2)}}</span>
                            </li>
                            <li>
                                <div><a href="#" @click="paymoney">去结算</a></div>
                            </li>
                        </ul>                   
                    </div>
                </div>
                <div class="noCart" v-else>
                        亲，您的购物车空空如也喔。。。赶快去购买疯狂购物吧！(*^__^*) 嘻嘻……
                </div>
            <div class="details-recommend">
                <h2>商品推荐</h2>
                <div class="one">
                    <ul>
                        <li><a href="javascript:;">
                        <img src="image/product/0d607c3efdc5ef65e01d5f931b70cf5a.jpg" alt="">
                        <span>巴西挂耳咖啡盒装</span>
                        </a></li>
                        
                        <li><a href="javascript:;">
                        <img src="image/product/eff950e4c6ee3cb8abcf7da002ecb619.jpg" alt="">
                        <span>丹麦组合</span></a></li>
                        
                        <li><a href="javascript:;"><img src="image/product/0d607c3efdc5ef65e01d5f931b70cf5a.jpg" alt=""><span>耶加雪菲挂耳咖啡盒装</span></a></li>
                        <li><a href="javascript:;"><img src="image/product/eff950e4c6ee3cb8abcf7da002ecb619.jpg" alt=""><span>家常面包套餐</span></a></li>
                    </ul>
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
            cartLists:[],
            cb:false,
            allcb:false, //保存全选复选框的状态
            uid:this.$route.query.uid,
            paylist:[]
        }
    },
    methods:{
        //一、加载购物车
        loadList(){
            var uu=sessionStorage.getItem("uid");
            var uname=sessionStorage.getItem("uname");
            console.log("用户名："+uname+"用户id："+uu);
            //1.创建变量保存url
            var url="http://localhost:3000/cartList?uid="+uu;
            //2.发送ajax请求
            this.axios.get(url).then(result=>{
                //1.判断如果没有登录显示出错信息
                if(result.data.code==-1){
                   alert("请登录");
                   //this.$router.push('/login');
                }
                console.log(result.data.data);
                var rows=result.data.data;
                //2.为每一个商品对象添加属性cb 选中状态
                for(var item of rows){
                    item.cb=false;
                }
                //3.将最终数组赋值 cartLists 列表 
                this.cartLists=rows;
            })
        },
        //二、删除购物车中的一个商品
        delItem(e){
            //e事件对象，e.target 触发事件对象
            //target.dataset 自定义属性集合
            //1.获取当前购物车id
            var id=e.target.dataset.id;
            var idx=e.target.dataset.idx;   //下标
            console.log(id);
            //2.发送ajax请求
            var url="http://127.0.0.1:3000/";
            url+="delCartItem?id="+id;
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    //3.获得返回结果判断是否删除成功
                    alert("删除成功");
                    //4.删除cartLists对应购物车商品对象
                    //将数组中对应下标的商品删除
                    //splice(数组下标，个数);
                    this.cartLists.splice(idx,1);
                }
            })
        },
        //三、删除购物车选中的商品
        delCart(){
            //0.创建空字符串，为了后续拼接字符串
            var html="";
            //1.遍历数组中的元素
            for(var item of this.cartLists){
                //2.判断cb==true
                if(item.cb){
                    //3.保存id：拼接字符串
                    html+=item.id+",";
                }
            }
            //3.1截取字符串
            html=html.substring(0,html.length-1);
            //4.发送ajax请求删除多个商品
            var url="http://127.0.0.1:3000/";
            url+="delCart?ids="+html;
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    alert("删除成功");
                    //页面重新加载
                    this.loadList();
                }
            })
        },
        //四、单个商品的复选框
        modifyItem(e){
            //修改
            //1.获取当前元素下标
            var idx=e.target.dataset.i;
            //2.将下标对象数组中的元素cb修改当前复选状态
            var checked=e.target.checked;
            //3.将数组中对应的cb状态修改
            this.cartLists[idx].cb=checked;
            //4.统计购物车种商品选中的数量==cartLists.length
            //5.将全选状态修改为true否则为false
            var count=0;
            for(var item of this.cartLists){
                if(item.cb){
                    count++;
                }
            }
            if(count==this.cartLists.length){
                this.allcb=true;
            }else{
                this.allcb=false;
            }
        },
        //五、全选的复选框
        selectAll(e){
            //1.获取当前全选复选框的状态
            var cb=e.target.checked;
            //2.修改全选状态
            this.allcb=cb;
            //3.依据全选状态修改数组中cb的值
            for(var item of this.cartLists){
                item.cb=cb;
            }
        },
        //商品数量+
        goodAdd(i){
            //获得当前商品的数量
            this.cartLists[i].count++;
            console.log(this.cartLists[i]);
            var uid=this.cartLists[i].uid;
            var pid=this.cartLists[i].pid;
            console.log(uid,pid);
           
            var url="http://127.0.0.1:3000/goodAdd?uid="+uid+"&pid="+pid;
            this.axios.get(url).then(result=>{
            })
        },
        //商品数量-
        goodSub(i){
            if(this.cartLists[i].count<=1){
                return;
            }
            this.cartLists[i].count--;
            var uid=this.cartLists[i].uid;
            var pid=this.cartLists[i].pid;
            var url="http://127.0.0.1:3000/goodSub?uid="+uid+"&pid="+pid;
            this.axios.get(url).then(result=>{
            })
        },
        paymoney(){
           var shopcount=0;
           this.cartLists.forEach((item,i)=>{
                if(item.cb){
                    shopcount+=1;
                    this.paylist.push(this.cartLists[i]);
                    sessionStorage.setItem("paylist",this.paylist);
                   console.log(this.paylist);
                }  
            })
            //console.log(shopcount);
            if(shopcount>0){
                this.$router.push('/addr');
            }else{
                alert("你还没有选中商品");
            }        
        },
        mybanner(){
            
        }
    },
    computed:{
        totalPrice(){
            var total=0;
            this.cartLists.forEach((item,i)=>{
                if(item.cb){
                    total+=item.count*item.price;
                }  
            })
            return total;
        }
    },
    created(){
        this.loadList();   
        this.mybanner();
    },
    //2. 将header.vue设置为当前组件的子组件
    components:{
      myHeader,
      myfooter
    }
}
</script>
<style scoped>
    *{margin:0;padding:0;}
    .cart{
        width:1200px;
        margin:0 auto;
        padding:0px;
    }
    ul{
        margin:0px;
        padding:0px;
        
        list-style:none;  
    }
    /*购物车头部*/
    ul.cartHead{
        height:40px;
        margin-top:30px;
        background:#fafafa;
        display:flex;
        flex-wrap:nowrap;
        justify-content:around;         
   }
   ul.cartHead li{
       line-height:40px;
       color:#684029;
       font-size:13px;
       text-align:center;     
   }
   .cart-list-xuan{width:60px;padding-left:20px;}
   .cart-list-pro{width:420px;}
   .cart-list-birth{width:300px;}
   .cart-list-price{width:130px;}
   .cart-list-num{width:120px;}
   .cart-list-money{width:130px;}
  
   /*购物车内容*/
   table.cartBody{
       width:1200px;     
       margin-top:30px;
       border:1px solid #b49f74;
   }
   tr{
       height:134px;
       border-bottom:1px dashed #b49f74;
   }
   
   .goods-xuan{
       text-align:right;
   }
   /*商品图片*/
   .goods-img{
       width:154px;
       text-align:right;
       padding-right:10px;
   }
   .goods-img img{
       width:82px;
       height:82px;
       border:1px solid #efefef;   
   }
   /*商品信息*/
   .goods-cake{width:300px;}
    .goods-cake a{
        font-size:14px;
        color:#684029;
    }
    .goods-cake a:hover{
        text-decoration:none;
        color:#b49f74;
    }
    .goods-cake p{
        font-size:13px;
        color:#b49f74;
        margin:0px;
    }
    .goods-cake p img{
        width:35px;
        height:35px;
        margin-right:10px;
        border:1px solid #efefef;
    }
    /*生日牌*/
    .goods-birth{width:300px;}
    .goods-birth select{
        width:230px;
        height:30px;
        font-size:13px;
        background:#fff;
        border:1px solid #684029;
        outline: none;
    }
    /*价格*/
    .goods-price{
        text-align:center;
        color:#684029;
        font-size:13px;
    }
    /*数量*/
    .goods-num{width:150px;}
    .num{
        width:96px;
        height:24px;
        border:1px solid #684029;
    }
    .goods-num button{
        width:22px;
        height:22px;
        border:0px;
        background:#fff;
        outline: none; 
    }
    .goods-num input{
        width:50px;
        height:22px;
        font-size:13px;
        text-align:center;
        position:relative;
        top:-2px;
        border:1px solid #684029;
        border-top:0px;
        border-bottom:0px;
        outline: none;
    }
    /*金额*/
    .goods-money{
        width:100px;
        color:red;
        font-size:13px;
    }
    /*删除*/
    .goods-del a{
        text-decoration:none;
        color:#684029;
        transition: 1s;
    }
    .goods-del a:hover{
        color:#b49f74;
        display: inline-block;
    }
    /*购物车空空*/
    .noCart{
        margin-top:40px;
        padding-top:40px;
        height:300px;
        text-align:center;
        color:#ccc ;  
    }
   /*购物车脚步*/
   .cartFooter{
       width:1200px;
       height:250px;
       margin:30px 0px;
       padding:40px 40px;
       font-size:13px;
       text-align:right;
       color:#684029;
       border:1px solid #b49f74;
   }
   .cartFooter ul li{height:35px;line-height:35px;}
   .cartFooter ul li:nth-child(2){color:#fe7500;}
   .cartFooter input{
       height:40px;
       font-size:13px;
       color:#fff;
       line-height:40px;
       padding:0px 20px;
       position:relative;
       float:left;
       border:0px;
       background:#684029;
       
   }
   .cartFooter span{
       display:inline-block;
       width:200px;
       border-top:2px solid #b49f74;
    }
    .cartFooter li div{
        width:200px;
        height:40px;
        border-radius: 20px;
        background: #efefef;
        color:#fff;
        text-align: center;
        
    }
    .cartFooter a{
        display:inline-block;
        width:100px;
        height:40px;
        
        font-size:18px;
        color:#684029;
        line-height:40px;
        text-align:center;
        text-decoration:none;
        transition: 0.5s;
        margin: 0 auto;
    }
    .cartFooter a:hover{
        width:200px;
        background:#bb561b;
        width:150px;
        color: #fff;
    }
    /*商家推荐*/
    h2{
        font-size:18px;
        color:#684029;
        height:50px;
        line-height:50px;
        border-bottom:2px solid #b49f74;   
    }
    /*.details-recommend ul{
        margin:20px 0px 40px 0px;
        display:flex;
        list-style:none;
        justify-content:space-between;
    }
    .details-recommend ul li{
        width:252px;
        height:252px;
        border:1px solid red;
    }*/
    .one{
        margin:50px auto;
        height:250px;
        width:1200px;
        overflow:hidden;
        position:relative; 
    }
    .one ul{
        height:250px;
        width:100000px;
        position:absolute;
        left:0;
        } /*ul width的宽不能过小*/
    .one ul li{
        display:block;
        float:left;
        margin:5px;
        height:250px;
        border-radius:5px;
        position:relative; 
        width:250px;
    }
    .one ul li a{
        display:inline-block;
        height:250px;
    } 
    .one ul li img{
        border-radius:5px;
        display:block; 
        width:100%;
        height:100%;
    }
    .one ul li a span{
        height:0;
        display:block;
        background:rgba(0,0,0,0.4);
        position:absolute;
        bottom:0;color:#fff;
        font-size:0px;}
    .one ul li a:hover span{
        width:250px;
        height:100px;
        line-height:100px;
        font-size:20px;
        text-align:center;
        transition:all 0.7s;
    }
</style>