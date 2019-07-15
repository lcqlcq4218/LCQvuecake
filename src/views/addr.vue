<template>
    <div class="app-addr">
        <myHeader></myHeader>
        <div class="shop-addr">
            <!-- 送货地址 -->
            <h2>配送信息</h2>
            <div class="addr-msg">
                <div><i>*</i><span>所在地区：</span> <input type="text"></div>
                <div><i>*</i><span>详细地址：</span> <input type="text"></div>
                <div><i>*</i><span>收货人：</span> <input type="text"></div>
                <div><i>*</i><span>手机号：</span> <input type="text"></div>
                <div><i>*</i><span>配送时间：</span>
                    <input type="text">
                    <p>配送时间受实时路况影响，会前后15分钟的误差，请谅解。</p>
                </div>
                <div><i>*</i><span>配送方式：</span><input type="text"></div>
            </div>
            <!-- 订单信息 -->
            <div class="order-msg">
                <ul class="cartHead">
                    <li class="cart-list-pro">商品</li>
                    <li class="cart-list-birth">生日牌</li>
                    <li class="cart-list-price">单价</li>
                    <li class="cart-list-num">数量</li>
                    <li class="cart-list-money">金额</li>             
                </ul>
                <table class="cartBody">                
                        <tr class="goods-list" v-for="(item,i) in cartLists" :key="item.id">
                            <td class="goods-img">
                                <a href="#"><img :src="item.pic"></a>
                            </td>
                            <td class="goods-cake">
                                <a href="#">{{item.pname}}</a>
                                <p>规格：{{item.size}}</p>
                                <p><img src="image/product/canju.png">赠送10套餐具</p>
                            </td>
                            <td class="goods-birth">happy birthday!</td>
                            <td class="goods-price">￥{{item.price.toFixed(2)}}</td>
                            <td class="goods-num">{{item.count}}</td>
                            <td class="goods-money">￥{{(item.price*item.count).toFixed(2)}}</td>
                        </tr>
                </table>
                <p class="pay-active">
                    <span>[送优惠券]</span>消费任意金额获赠实付满50元减10元面包优惠券，限5月8日到7月31日使用。
                </p>
                <div class="order-text">
                    <label for="">订单留言：</label>
                    <textarea name="memo" id="action-add-memo" cols="30" rows="10" maxlength="200" placeholder="请留下您对订单或商品的特殊要求，200字以内"></textarea>
                </div>
                <!-- 支付详情 -->
                <div class="pay">
                    <div class="pay-item">
                        <p>支付方式</p>
                        <p><a href="javascript:;">在线支付</a></p>
                        <p><a href="javascript:;">余额：0.00元</a></p>
                        <p><a href="javascript:;">代金卡：无</a></p>
                    </div>
                    
                    <div class="pay-box">
                        <ul class="pay-money-list">
                            <li><b>商品金额：</b>￥{{totalPrice.toFixed(2)}}</li>
                            <li><b>配送费：</b>￥0.00</li>
                            <li><b>优惠抵扣：</b><span>-￥100.00</span></li>
                            <li><b>积分抵扣：</b><span>-￥0.00</span></li>
                            <li><b>代金卡抵扣：</b><span>-￥0.00</span></li>
                        </ul>
                        <p>您总共需要支付：<span>￥{{(totalPrice-100).toFixed(2)}}</span></p>
                        <div><a href="javascript:;" @click="gopay">去支付</a></div>
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
export default{
        data(){
            return{
                cartLists:[],
                paylist:[]
            }
        },
        methods:{
            //一、加载购物车
            loadList(){
                //this->当前组件对象
                //获得用户uid
                var uu=sessionStorage.getItem("uid");
                this.paylist=sessionStorage.getItem("paylist");
                console.log(this.paylist);
                //this.cartLists=paylist;
                //1.创建变量保存url
                var url="http://localhost:3000/cartList?uid="+uu;
                //2.发送ajax请求
                this.axios.get(url).then(result=>{
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
            gopay(){
                console.log(111);
            }
        },
        computed:{
        totalPrice(e){
            var total=0;
            this.cartLists.forEach((item,i)=>{
                    total+=item.count*item.price;
            })
            return total;
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
    a{
        color:#684029;
        text-decoration: none;
        display: inline-block;
    }
    .shop-addr{
        width:1200px;
        margin:0 auto;
        margin-top:40px; 
        color:#684029;
        font-size:14px;
        
    }
    h2{
        font-size:16px;
        color:#684029;
        padding: 10px 20px;
        background:#fafafa;
        border:1px solid #ccc;
    }
    .addr-msg{
        margin-top:20px;
        border:1px solid #ccc;
        padding: 20px;
    }
    ul{
        list-style:none;
    }
    .addr-msg div{
       margin:10px 0px;
    }
    .addr-msg div i{
        color:red;
        margin-right:5px;
    }
    .addr-msg div span{
        width:100px;
        display: inline-block;
    }
    .addr-msg div input{
        outline: none;
    }
    .addr-msg div p{
        display: inline-block;
        margin-left:10px;
    }
    /*购物车头部*/
    ul.cartHead{
        height:40px;
        margin-top:30px;
        background:#fafafa;
        display:flex;
        flex-wrap:nowrap;
        justify-content:around;  
        border:1px solid #ccc;       
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
    /*价格*/
    .goods-price{
        text-align:center;
        color:#684029;
        font-size:13px;
    }
    /*数量*/
    .goods-num{width:150px;}
    /*优惠券*/
    .shop-addr .pay-active{
        padding: 5px 30px;
        border:1px solid #b49f74;
        margin-bottom: 10px;
        color:#a38b5b;
    }
    .shop-addr .pay-active span{
        margin-right:5px;
        color:red;
    }
    /*订单留言*/
    textarea{
        width:900px;
        height:100px;
    }
    .order-text{
        border:1px solid #ccc;
        padding:20px 30px;
        display: flex;
    }
    .order-text .text{
        padding:20px;
    }
    .order-text label{
        align-self: flex-start;
    }
    /*支付详情*/
    .order-msg .pay{
        padding: 20px 30px;
        border:1px solid #ccc;
        display: flex;
        justify-content: space-between;
        margin:20px 0px 40px 0px;
    }
    .order-msg .pay .pay-item p{
        margin:5px 0px;
    }
    
    .order-msg .pay .pay-item p:nth-child(2)>a{
        border:2px solid #684029;
        padding:5px 0px;
        width:100px;
        text-align: center;
        display: inline-block;
    }
    /* 金额详情 */
    .pay-item,.pay-box{
        display: flex;
        flex-direction: column; 
    }
    .pay-box .pay-money-list b{
        width:100px;
        display: inline-block;
        font-weight:normal;
    }
    .pay-box .pay-money-list li{
        margin: 4px 0px;
    }
    .pay-box p{
        border-top:2px solid rgb(211, 206, 206);
        padding:5px 0px; 
    }
    .pay-box p span{
        font-size:26px;
        color:red; 
    }
    .pay-box div{
        color: #fff;
        background: #ece8e2;
        text-align: center;
        font-size:18px;
        transition: 0.5s;
        text-align: center;
        width:150px;
        margin: 0 auto;
        border-radius: 20px;
    }
    .pay-box a{
        font-weight: 400;
        width:100px;
        height:40px;
        line-height: 40px;
        border-radius: 20px;
        transition: 0.5s;
    }
    .pay-box a:hover{
        background:#bb561b;
        width:150px;
        color: #fff;
    }
    .pay-box .pay-money-list li span{
        color: red;
    }
</style>