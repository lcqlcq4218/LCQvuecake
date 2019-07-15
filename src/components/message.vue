<template>
    <div id="app-message">  
        <myHeader></myHeader>
        <div class="message">
            <ul>
                <li>订单</li>
                <li>物流</li>
                <li>通知</li>
            </ul>
            <video controls  autoplay>
                <source src="cake1.mp4" />
            </video>
                 
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
            return{}
        },
        methods:{

        },
        //2. 将header.vue设置为当前组件的子组件
        components:{
            myHeader,
            myfooter
        }
    }
    
</script>
<style scoped>
    .message{
        width:1200px;
        margin:0 auto;
        height: 1000px;
        padding-top:20px;
        color:#b49f74; 
    }
    .message ul{
        list-style: none;
    }
    .message ul li{
        display: inline-block;
        width:100px;
        text-align: center;
        border-left:1px solid #b49f74;
    }
    .message ul li:hover{
        color:#684029;
        border-left:1px solid #684029;
    } 
    video{
        width:900px;
        height:600px;
        border:1px solid #ddd;
    }
</style>