<template>
  <div id="publishtopic" class="">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <!-- description (组合) -->
    <div style='margin-top: -260px' id="u61" class="ax_default" data-label="description" data-left="106" data-top="296" data-width="859" data-height="487">

      <!-- Unnamed (矩形) -->
      <div id="u62" class="ax_default box_1" style="z-index:-1">
        <div id="u62_div" class=""></div>
        <div id="u62_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- userimg (图片 ) -->
      <div id="u63" class="ax_default image" data-label="userimg">
        <img id="u63_img" class="img " src="../assets/images/发表主题/userimg_u63.svg"/>
        <div id="u63_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- 主题输入框context (文本框) -->
      <div id="u64" class="ax_default text_field" data-label="主题输入框context">
        <el-input id="u64_input" type="text" value="" class="u64_input" name='context' v-model='context'/>
      </div>

      <!-- 发言框 (矩形) -->
      <div id="u65" class="ax_default box_1" data-label="发言框">

      </div>

      <!-- 问题描述 (文本域) -->
      <div id="u73" class="ax_default text_area" data-label="问题描述" style="z-index:0">
        <el-input id="u73_input" class="u73_input" name='description' v-model='description' type="textarea"
                  style="margin-top:-50px;width:90%;left:0%"
                  :rows="2"
                  :autosize="{ minRows: 10}"
                  placeholder="Please input your comment."
                  ></el-input>
      </div>

      <!-- add (形状) -->
      <div id="u74" class="ax_default icon" data-label="add">
        <img id="u74_img" class="img " style='margin-top: 10px;margin-left:-5px' src="../assets/images/发表主题/add_u74.svg"/>
      </div>

      <!-- tag (文本框) -->
      <div id="u76" class="ax_default text_field" data-label="tag">
          <el-input id="u76_input" type="text" value="" class="u76_input" name='tag' v-model='tag'/>
      </div>
      <!-- Unnamed (矩形) -->
      <div id="u75" class="ax_default primary_button">
        <el-button @click="handle(name)">Submit</el-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      token:'',
      context:'',
      description:'',
      tag:'',
      name:'',
    }
  },
  methods:{
    handle:async function(){
      var ret = await this.$axios.post('topic/publishtopic',{
        context:this.context,
        description:this.description,
        tag:this.tag,
      }).then(response=>{
        console.log(response);
        alert(response.data.msg);
        console.log("handle.this.name");
        console.log(this.name);
        // this.$router.push({path: '/square'});
        this.$router.push({path: '/square',query:{name:this.name}});
      })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted:function() {
    this.name=this.$route.query.name;
    console.log("mounted.this.name");
    console.log(this.name);
  }
}
</script>

<style scoped>
  @import "../assets/files/发表主题/styles.css";
</style>
