<template>
  <div id="Register" class="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <!--<link href="files/用户名注册/styles.css" type="text/css" rel="stylesheet"/>-->

    <!-- Unnamed (矩形) -->
    <div id="u11" class="ax_default label">
      <div id="u11_div" class=""></div>
      <div id="u11_text" class="text ">
        <p><span>User ID</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u12" class="ax_default _一级标题">
      <div id="u12_div" class=""></div>
      <div id="u12_text" class="text ">
        <p><span>Rregister for BrainStorming</span></p>
      </div>
    </div>

    <!-- 用户名 (文本框) -->
    <div id="u13" class="ax_default text_field" data-label="用户名">
      <div id="u13_div" class=""></div>
      <input id="u13_input" type="text" value="" class="u13_input"/>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u14" class="ax_default label">
      <div id="u14_div" class=""></div>
      <div id="u14_text" class="text ">
        <p><span>Age</span></p>
      </div>
    </div>

    <!-- 年龄 (文本框) -->
    <div id="u15" class="ax_default text_field" data-label="年龄">
      <div id="u15_div" class=""></div>
      <input id="u15_input" type="number" value="" class="u15_input"/>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u16" class="ax_default label">
      <div id="u16_div" class=""></div>
      <div id="u16_text" class="text ">
        <p><span>Gender</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u17" class="ax_default label">
      <div id="u17_div" class=""></div>
      <div id="u17_text" class="text ">
        <p><span>&nbsp;Account</span></p>
      </div>
    </div>

    <!-- 账号 (文本框) -->
    <div id="u18" class="ax_default text_field" data-label="账号">
      <div id="u18_div" class=""></div>
      <input id="u18_input" type="text" value="" class="u18_input" v-model='name'/>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u19" class="ax_default label">
      <div id="u19_div" class=""></div>
      <div id="u19_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- 密码 (文本框) -->
    <div id="u20" class="ax_default text_field" data-label="密码">
      <div id="u20_div" class=""></div>
      <input id="u20_input" type="password" v-model="password" value="" class="u20_input"/>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u21" class="ax_default label">
      <div id="u21_div" class=""></div>
      <div id="u21_text" class="text ">
        <p><span>Repassword</span></p>
      </div>
    </div>

    <!-- 密码验证 (文本框) -->
    <div id="u22" class="ax_default text_field" data-label="密码验证">
      <div id="u22_div" class=""></div>
      <input id="u22_input" type="password" value="" class="u22_input" name='password' v-model='password'/>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u23" class="ax_default label">
      <div id="u23_div" class=""></div>
      <div id="u23_text" class="text ">
        <p><span>Password</span></p>
      </div>
    </div>

    <!-- 性别 (下拉列表) -->
    <div id="u24" class="ax_default droplist" data-label="性别">
      <div id="u24_div" class=""></div>
      <select id="u24_input" class="u24_input">
        <option class="u24_input_option" value="Please check your gender ">Please check your gender </option>
        <option class="u24_input_option" value="Male">Male</option>
        <option class="u24_input_option" value="Female">Female</option>
      </select>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u25" class="ax_default primary_button">
      <el-button type="primary" @click="handle">Register</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:'',
      password:''
    }
  },
  methods:{
    handle:async function(){
      await this.$axios.post("user/register",{
        name:this.name,
        password:this.password,
      }).then(function (response) {
        console.log(response);
          alert(response.data.msg)
      }
        )
        .catch(function (error) {
        console.log(error.response);
      });
      this.$router.push({path: '/signin'});
    },
  }
}
</script>

<style>
  @import "../assets/files/用户名注册/styles.css";

</style>

