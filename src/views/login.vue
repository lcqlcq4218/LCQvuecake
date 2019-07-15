<template>
  <div id="app-login">
    <div class="login-bg">
      <!-- 输入框内容 -->
      <div id="log" class="">
        <div class="login-top">
          <h2>账号密码登录</h2> | <h2>手机号登录</h2>
        </div>
        <form method="post" action="" class="">
          <input type="text" name="uname" v-model="uname" placeholder="请输入您的账号" autofocus required maxlength="8" minlength="2"><br>
          <input type="password" name="upwd" v-model="upwd" placeholder="输入密码" required maxlength="10" minlength="6"><br>
          <p class="p1">{{text}}</p>
          <input type="button" class="sub" value="登录" @click="btnLogin"><br>      
        </form>
        <div class="login-bot">
          <div class="ji">
            <input type="checkbox" checked>记住密码
          </div>
          <div class="wang">
            <router-link to="/notFound">忘记密码？</router-link>
            <router-link to="/register">立即注册</router-link>
          </div>
        </div> 
      </div>
    </div>
    <myfooter></myfooter>
   </div> 
  </div>
  
</template>
<script>
//1.先引入header.vue组件对象，临时命名为myHeader，将来组件标签就是<my-header>
//import myHeader from '@/components/header.vue'
import myfooter from '@/components/footer.vue'
  export default {
    data(){
      return {
          uname:"",
          upwd:"",
          text:"",
          uid:""
      }
    },
    methods: {
      btnLogin(){
        //功能：获取用户的输入的用户名和密码
        //如果验证通过，发送ajax请求给服务器程序并获得返回结果
        //1.获用户输入的用户名和密码
        var u=this.uname;
        var p=this.upwd;
        //2.验证输入的内容格式
        //验证用户名如果失败提示错误信息
        var ureg=/^\s*[a-z0-9]{3,8}\s*$/i;
        if(!ureg.test(u)){
          this.text="用户名格式不正确";
          return;
        }
        //验证密码如果失败提示错误信息
        var preg=/^\s*[0-9]{6,10}\s*$/;
        if(!preg.test(p)){  
            this.text="密码格式不正确";
            return;
        }
        //发送ajax请求
        var url="http://127.0.0.1:3000/login?uname="+u+"&upwd="+p;
        //var obj={uname:u,upwd:p};
        this.axios.get(url).then(result=>{
          if(result.data.code==1){
            //返回用户uid
            this.uid=result.data.data;
            console.log(this.uid);
            sessionStorage.setItem("uid",this.uid);
            sessionStorage.setItem("uname",this.uname);
            //跳转首页
            //this.$router.push('/index');
            this.$router.push({path:'/index',query:{uid:this.uid}});
            alert("欢迎回来！"+u);
          }else{
            this.text="用户名或密码有误";
          }
        })
        //4:失败 显示提示框
        //5:成功 跳转index
      }
    },
    //2. 将header.vue设置为当前组件的子组件
    components:{
     
      myfooter
    }
    
  }
</script>
  
<style scoped>
  /*背景图片*/
  div.login-bg{
    width:100%;
    height:780px;
    background:url(loginbg.jpg) no-repeat;
    background-size:100% 100%; 
    color:#684029;
    
    } 
  /*登录框内容*/
  #log{ 
    border:1px solid #ccc; 
    padding:28px 42px;
    position:absolute;
    top:40%;
    left:70%;
    transform:translate(-50%,-50%);
    background-color:rgba(237,237,241,0.6);
  } 
  form{
    text-align:center;
  }
  /*表头*/
  .login-top h2{
    width:150px;
    height:40px;
    font-size:18px;
    color:#482618;
    text-align:center;
    line-height:40px;
    display:inline-block;
    margin:0px; 
  }
  /*输入框*/
  form input{
    width:300px;
    height:40px;
    margin-bottom:10px;
    outline:none;
    border:1px solid #b49f74;
  }
  /*错误提示文字*/
  form .p1{
    width:300px;
    height:22px;
    margin:10px 0px;
    font-size:12px;
    line-height:22px;
    color:red;
  }
  /*登录按钮*/
  form .sub{
    background:#684029;
    color:#fff;
    border:0px;
  }
  /*下方记住密码*/
  .login-bot div{
    display:inline-block;
    text-align:left;
    font-size:12px;
    
  }
  .login-bot input{
    margin:0;
    vertical-align:middle;
  }
  .wang{
    width:230px;
    text-align:right;
  }
  .wang a{
    margin-left:61px;
    color:#684029;
    text-decoration:none;
  }
  
</style>