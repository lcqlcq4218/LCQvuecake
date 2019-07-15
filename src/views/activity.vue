<template id="tplActivity">
    <div id="app-activity">
        <myHeader></myHeader>
        <div class="container mt-4 mb-3"> 
            <!-- 活动-->
            <div >
                <p class="h3">新用户专享</p>
                <p>发布时间：2019-03-09</p>
            </div>
            <hr/>
            <div>
                <img src="image/index/activity.jpg" alt="" class="w-100"/>
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
            
        }
    },
    //2. 将header.vue设置为当前组件的子组件
    components:{
      myHeader,
      myfooter
    }
}
</script>
<style scoped>
    .h3{font-size:24px;color:#684029;}
    p{font-size:12px;color:#8c8c8c;}
</style>