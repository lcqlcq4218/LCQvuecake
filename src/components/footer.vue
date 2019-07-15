<template id="tplFooter">
    <div id="app-footer">
        <footer>
        <div class="footer-box">
            <!-- logo-->
            <div class="logo">
                <a href="#">DREAM HOUSE</a>
            </div>
            <div class="footer-nav">
                <div class="">
                    <p>购物指南</p>
                    <p><a href="">订购帮助</a></p>
                    <p><a href="">会员注册协议</a></p>
                    <p><a href="">蛋糕预订说明</a></p>
                </div>
                <div class="">
                    <p class="">关于我们</p>
                    <p><a href="" target="_blank">联系我们</a></p>
                    <p><a href="">产品理念</a></p>
                    <p><a href="">食品安全科普</a></p>
                </div>
                <div class="">
                    <p class="">配送方式</p>
                    <p><a href="">配送范围说明</a></p>
                    <p><a href="">产品理念</a></p>
                    <p><a href="">食品安全科普</a></p>
                </div>
                <!--<ul class="">
                    <li id="">
                        <a href="">
                            <div class="weibo">
                                <img src="image/index/erweima.png" alt="" />
                            </div>
                        </a>
                    </li>
                    <li id="weixin">
                        <a href="">
                            <div class="weixin">
                                <img src="image/index/erweima.png" alt=""/>
                            </div>
                        </a>
                    </li>
                    <li id="app">
                       
                    </li>
                </ul>-->
            </div>
            <div class="foot-text">
                <p>订购专线：400 666 8888（服务时间 08:00–22:00）</p>
                <p>客服电话：021-23099721（全国） | kefu@xueluoge.com（邮）</p>
                <p>温馨提示：蛋糕请提前5小时预订，当日22点以后订单，于次日8点开始审核</p>
                <p>当日蛋糕配送截止下单时间：16:50</p>
                <p>网站注册公司名称: 北京雪落阁食品有限公司 地址: 北京市北京经济技术开发区兴海二街5号院3号楼</p>
            </div>
        </div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    /*脚部样式*/
    footer{
        background:#333;
    }
    a{text-decoration:none;}
    .footer-box{
        width:1200px;
        margin:0 auto;
       
        color:#fff;
        font-size:12px;
        text-align:center;
        padding-bottom:30px;
    }
    /*logo样式*/
    .logo a{
        height:80px;
        color:#fff;
        font-size:30px;
        display:block;
        margin:0 auto;
        line-height:80px;
    }
    .footer-box .footer-nav div{
        list-style:none;
        display:inline-block;
        width:399px;
        height:150px;
        
        margin:0px;padding:0px;
    }
    .footer-nav p{
        margin:0px;padding:0px;
        height:20px;
        line-height:20px;
    }
    .footer-nav p a{
        color:#fff;   
    }
</style>