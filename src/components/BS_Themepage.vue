<template>
  <div id="themepage" class="">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
  <!--<link href="files/帖子/styles.css" type="text/css" rel="stylesheet"/>-->
    <!-- Unnamed (矩形) -->
    <div id="u78" class="ax_default _一级标题">
      <div id="u78_div" class=""></div>
      <div id="u78_text" class="text " v-model="topictheme">
        <h1><span>Theme: {{topictheme}}</span></h1>
      </div>
    </div>
    <template v-model="topicdesc" >
      <p style="margin-top: 120px;margin-left: 100px">Describe: {{topicdesc}}</p>
    </template>
    <template>
      <el-table
        :data="commentList"
        style="width: 80%;margin-top: 50px;margin-left: 10%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="Comment Details:" v-bind="showCommentDetails(props.row.commentid)">
                <span>{{topiccomment}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="Time">
          <template slot-scope="props">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ props.row.date | format('MM-dd hh:mm') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Comment"
          prop="context">
        </el-table-column>
        <el-table-column
          label="User Name"
          prop="username">
        </el-table-column>
      </el-table>
    </template>

    <!-- Unnamed (组合) -->
    <template>
      <el-input
        type="textarea"
        style="width:80%;left:10%;max-height:300px;margin-top:500px"
        :rows="10"
        placeholder="Please input your comment."
        v-model="textarea">
      </el-input>
      <el-button type="primary" style="margin-left:80%;margin-top:10px" @click="addcomment">Submit</el-button>
    </template>
  </div>
</template>
<script>
export default {
  data(){
    return{
      textarea:'',
      themeusername:'',
      commentList:[],
      topiccomment:'',
      topicList:[],
      topicid:'',
      topictheme:'',
      topicdesc:'',
    }
  },
  methods:{
    showComment:async function(){
      // let topicid=this.$route.params.id;
      // console.log(this.$route.params.id);
      // console.log(this.$route.params.try);
      console.log(this.$route.query.id);

      await this.$axios.post("comment/getTopicComment",{
        topicid:this.$route.query.id,
      }).then(response=>{
        this.topictheme=this.$route.query.theme;
        this.topicdesc=this.$route.query.desc;
        console.log(this.$route.query.theme);
          console.log(this.$route.query.desc);
        this.commentList=response.data;
        console.log("commentList");
        console.log(response.data);
      }).catch(function(error){
        console.log(error);
    });

        // var ret=await this.$axios.get("topic/getPersonalTopic",{
        //   token:this.token,
        // }).then(response=> {
        //   console.log(response);
        //   this.topicList=response.data.topicList;})
        //   .catch(function (error) {
        //     console.log(error.response);
        //   });
    },
    showCommentDetails:async function(id){
      await this.$axios.post("comment/showComment",{
        commentid:id,
      }).then(response=>{
        console.log("response.data");
        console.log(response.data);
        console.log("response.data.comment");
        console.log(response.data.comment);
        console.log("response.data.comment.context");
        console.log(response.data.comment.context);
        this.topiccomment=response.data.comment.context;
      }).catch(function(error){
        console.log(error);
      });
    },
    routeuserpage:function(){
      this.$router.push({path: '/userpage'});
    },
    addcomment:async function(){
      await this.$axios.post("comment/publishcomment",{
        topicid:this.$route.query.id,
        context:this.textarea,
      }).then(response=>{
        alert("评论成功");
        this.textarea='';
        this.showComment();
      }).catch(function(error){
        console.log(error);
      });
    },
  },
  mounted:function(){
    this.showComment();
  }
}
</script>

<style scoped>
  @import "../assets/files/帖子/styles.css";
</style>
