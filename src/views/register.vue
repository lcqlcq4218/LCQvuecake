<template id="tplRegister">
    <div id="app-register">
        <myHeader></myHeader>
        <div class="register-bg"> 
          <div class="register">
            <h2>用户注册</h2>
            <!-- 用户名 -->
            <div class="input">
              <i class="fa fa-user-circle" aria-hidden="true"></i>
              <input type="text" v-model="uname" placeholder="请输入用户名" autofocus required maxlength="8" minlength="3">
            </div>
            <!-- 密码 -->
            <div class="input">
              <i class="fa fa-expeditedssl" aria-hidden="true"></i>
              <input type="password" v-model="upwd" placeholder="输入密码" required maxlength="10" minlength="6">
            </div>
            <!-- 再次确认密码 -->
            <div class="input">
              <i class="fa fa-expeditedssl" aria-hidden="true"></i>
              <input type="password" v-model="pwd" placeholder="再次确认密码" required maxlength="10" minlength="6">
            </div>
            <!-- 验证码 -->
            <div class="getCode">
                <input type="text" placeholder="输入验证码" class="text" v-model="code">
                  <canvas style="width:50px;height:30px;background: #482618"></canvas>
            </div>
            <!-- 手机号 -->
            <div class="input">
              <i class="fa fa-mobile" aria-hidden="true"></i>
              <input type="text" placeholder="输入手机号" name="phone" v-model="phone">
            </div>
            <!-- 错误提示 -->
            <p>{{text}}</p>
            <input type="button" class="reg" value="注册" @click="btnReg"><br>   
              <div class="ji">
                <input type="checkbox" checked>记住密码
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
            uname:"",
            upwd:"",
            pwd:"",
            code:"",
            phone:"",
            text:""
        }
    },
    methods:{
      btnReg(){
        //1.获取用户输入的内容
        var uname=this.uname;
        var upwd=this.upwd;
        var pwd=this.pwd;
        var code=this.code;
        var phone=this.phone;
        
        console.log(uname,upwd,pwd,code,phone);
        //2.验证输入的内容格式
        //验证用户名如果失败提示错误信息
        var ureg=/^\s*[a-z0-9]{3,8}\s*$/i;
        if(!ureg.test(uname)){
          this.text="用户名格式不正确";
          console.log(this.text);
          return;
        }
        //验证密码如果失败提示错误信息
        var preg=/^\s*[0-9]{6,10}\s*$/;
        if(!preg.test(upwd)){  
            this.text="密码格式不正确";
            return;
        }
        var url="http://127.0.0.1:3000/register?uname="+uname+"&upwd="+upwd+"&phone="+phone;
        console.log(url);
        this.axios.get(url).then(reault=>{
          if(result.data.code==1){
            console.log("注册成功");
          }else{
            alert("注册失败");
          }
        })
      },
      
    },
    created(){

    },
    //2. 将header.vue设置为当前组件的子组件
    components:{
      myHeader,
      myfooter
    }
}
</script>
<style scoped>
    /* 登录页面样式 */
    .register-bg{
        width:100%;
        height:780px;
        background:url(loginbg.jpg) no-repeat;    /*背景*/
        background-size:100% 100%; 
        color:#684029;
    }
    /*登录框内容*/
  .register{ 
    padding:28px 42px;
    position:absolute;
    top:50%;
    left:70%;
    transform:translate(-50%,-50%);
    background-color:rgba(237,237,241,0.6);
  } 
  
  /*表头*/
  h2{
    height:40px;
    font-size:18px;
    color:#482618;
    text-align:center;
    line-height:40px;
    margin:0px; 
  }
  /*输入框*/
  .input{
    height:44px;
    border:1px solid #ccc;
    background:#eaebee;
    margin:5px 0px;
    outline: none;
  }
  .input i{
    margin-left:10px;
    font-size:20px;
    line-height:40px;
  }
  .input input{
    width:250px;
    height:40px;
    border:0px;
    margin-left:10px; 
    color:#684029;
    background:#eaebee;
  }
  .getCode .text{
    width:200px;
    height:40px;
  }
  .getCode .code{
    height:40px;
    padding: 0px 10px;
    color:aqua;
    background:#97816c62;
    margin-left:20px;
    font-weight: bold;
    font-family: initial;
    border:0px;
  }
  .getCode i{margin-left:20px;}
  /*错误提示文字*/
  p{
    width:100%;
    height:22px;
    margin:10px 0px;
    font-size:12px;
    line-height:22px;
    color:red;
  }
  /*登录按钮*/
   .reg{
    background:#684029;
    color:#fff;
    border:0px;
    width:100%;
    padding: 10px;
  }
  /*下方记住密码*/
  .register-bot div{
    display:inline-block;
    text-align:left;
    font-size:12px;

  }
  
</style>