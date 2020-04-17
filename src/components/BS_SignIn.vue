<template>
  <div id="signin" class="">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
  <!--<link href="files/登录/styles.css" type="text/css" rel="stylesheet"/>-->

    <!-- Unnamed (矩形) -->
    <div id="u0" class="ax_default _一级标题" >
      <div id="u0_div" class=""></div>
      <div id="u0_text" class="text " style='margin-top: -100px;margin-left:-20px'>
        <h1><span>Welcome to BrainStorming</span></h1>
      </div>
    </div>



    <!-- Unnamed (矩形) -->
    <div id="u3" class="ax_default _三级标题">
      <div id="u3_div" class=""></div>
      <div id="u3_text" class="text " style='margin-top: -140px;margin-left:-20px'>
        <p><span>User Id</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u4" class="ax_default _三级标题">
      <div id="u4_div" class=""></div>
      <div id="u4_text" class="text " style='margin-top: -130px;margin-left:-20px'>
        <p><span>Password</span></p>
      </div>
    </div>

    <!-- userid (文本框) -->
    <div id="u5" data-label="userid" style='margin-top: -130px;margin-left:-20px'>
      <el-input id="u5_input" type="text" value=""name='name' v-model='name'/>
    </div>

    <!-- password (文本框) -->
    <div id="u6" style='margin-top: -130px;margin-left:-20px'>
      <el-input id="u6_input" type="password" value=""  name='password' v-model='password'/>
    </div>


    <!-- Unnamed (矩形) -->
    <div id="u9" class="ax_default primary_button" style='margin-top: -100px;margin-left:-20px'>
      <el-button type="primary" @click="signin">Sign in</el-button>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u10" class="ax_default primary_button" style='margin-top: -100px;margin-left:-20px'>
      <el-button  @click="regis">Register</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'',
      password:'',
      token:'',
      access:'',
    }
  },
  methods:{
    signin:async function(){
      var ret = await this.$axios.post("user/signup",{
        name:this.name,
        password:this.password,
      }).then(response=> {
        console.log(response);
        alert(response.data.msg);
        if(response.data.msg==='登录成功'){
          console.log(this.token);
          window.localStorage.setItem('token', response.data.token);
          // this.$store.commit('set_token', this.token);
          window.location.pathname = '/';
          console.log("this.name");
          console.log(this.name);
          this.$router.push({path: '/square',query:{name:this.name}});
          }
        else{
          this.name='';
          this.password='';
        }
        }).catch(function (error) {
          console.log("error:"+error);
        });
    },
    regis:async function(){
      this.$router.push({path: '/register'})
      // await this.$axios.post("user/register",{
      //   name:this.name,
      //   password:this.password,
      // }).then(function (response) {
      //     console.log(response)
      //     alert(response.data.msg)
      //   }
      // )
      //   .catch(function (error) {
      //     console.log(error.response);
      //   });
    }
  },
}
</script>

<style scoped>
  @import "../assets/files/登录/styles.css";
</style>
