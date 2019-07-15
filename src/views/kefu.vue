<template id="tplKefu">
    <div id="app-kefu"> 
        <myHeader></myHeader>
        <div class="container">
            <div class="h3">客服小姐姐</div>
            <hr/>
            <div class="">
                    <img src="image/kefu/1b21b0f279a117b242c09ac2807f7d43.jpg" alt="" class="w-100"/>
                    <img src="image/kefu/e549bb1bfbee240ceacfe6b0ff379e66.jpg" alt="" class="w-100"/>
                    <img src="image/kefu/b85f8aa79f8252a78d8f68c67d971e92.jpg" alt="" class="w-100"/>
                    <img src="image/kefu/0cc6cf6d5ffdf26fc598c8d595b10ad7.jpg" alt="" class="w-100"/>
                    <a href="">
                        <img src="image/kefu/c65a470676c52ae2dd274129bd18a5be.jpg" alt="" class="w-100"/>
                    </a>
                    <img src="image/kefu/0cc6cf6d5ffdf26fc598c8d595b10ad7.jpg" alt="" class="w-100"/>
                    <img src="image/kefu/0cc6cf6d5ffdf26fc598c8d595b10ad7.jpg" alt="" class="w-100"/>
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
    
</style>