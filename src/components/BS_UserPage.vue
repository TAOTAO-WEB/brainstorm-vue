<template >
  <div id="userpage">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <!--<link href="files/用户界面/styles.css" type="text/css" rel="stylesheet"/>-->
      <!-- Unnamed (矩形) -->

    <!-- Unnamed (图片 ) -->
    <div id="u2" class="ax_default image">
      <img id="u2_img" class="img " src="../assets/images/用户界面/regen/u2.svg"/>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u3" v-model="username" style="width:800px;margin-top: -30px">
        <h1><span>User:{{username}}</span></h1>
    </div>

    <!--标签栏-->
    <div style="padding-top:200px;width:90%;padding-left:5%">
      <el-tabs type="border-card" >
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i>Themes I have published</span>
          <!--      发布的主题-->
            <template>
              <el-table
                :data="topicList"
                style="width:100%;left:50px">
                <el-table-column
                  label="Time"
                  width="180">
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="">{{ scope.row.date | format('MM-dd hh:mm') }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Theme"
                  width="200px">
                  <template slot-scope="scope">
                    <span style="">{{ scope.row.context }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Context"
                  width="200px">
                  <template slot-scope="scope">
                    <span style="">{{ scope.row.description }}</span>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click='routethemepage(scope.row.topicid,scope.row.context,scope.row.description)'>Join in</el-button>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot-scope="scope">
                    <el-tag>{{scope.row.tag}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" circle size="mini" @click='deletetopic(scope.row.topicid)'></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
        </el-tab-pane>



        <el-tab-pane label="Comments I have published">
          <template>
            <el-table
              :data="commentList"
              style="width: 80%;margin-left: 5%">
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
                label=""
                prop="">
                <template slot-scope="props">
                  <el-button type="danger" icon="el-icon-delete" circle size="mini" @click='deletecomment(props.row.commentid)'></el-button>
                </template>
              </el-table-column>
              <el-table-column
                label=""
                prop="">
                <template slot-scope="props">
                  <el-button type="primary" size="mini"  @click='routethemepageofcomment(props.row.topicid)'>Go to Themepage</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
<!--          <template>-->
<!--            <el-table-->
<!--              :data="commentList"-->
<!--              style="width: 80%;left:90px">-->
<!--              <el-table-column-->
<!--                label="Time"-->
<!--                width="180">-->
<!--                <template slot-scope="scope">-->
<!--                  <i class="el-icon-time"></i>-->
<!--                  <span style="">{{ scope.row.date | format('MM-dd hh:mm') }}</span>-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                label="Theme"-->
<!--                width="200px">-->
<!--                <template slot-scope="scope">-->
<!--                  <span style="">{{ scope.row.context }}</span>-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                label="Context"-->
<!--                width="200px">-->
<!--                <template slot-scope="scope">-->
<!--                  <span style="">{{ scope.row.description }}</span>-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column>-->
<!--                <template slot-scope="scope">-->

<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column>-->
<!--                <template slot-scope="scope">-->

<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column>-->
<!--                <template slot-scope="scope">-->

<!--                </template>-->
<!--              </el-table-column>-->
<!--            </el-table>-->
<!--          </template>-->
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        topicList:[],
        commentList:[],
        topiccomment:'',
        username:this.$route.query.name,
      }
    },
    methods:{
      routethemepageofcomment:function(id){
        this.$router.push({path: '/themepage',query:{id:id}});//不完整
      },
      routethemepage:function(id,theme,desc,name){
        this.$router.push({path: '/themepage',query:{id:id,theme:theme,desc:desc,name:name}});//不完整
      },
      getusertopic:async function(){
        await this.$axios.get("topic/getPersonalTopic").then(response=> {
          console.log("response.data.topicList");
          console.log(response.data.topicList);
          this.topicList=response.data.topicList;})
          .catch(function (error) {
            console.log(error.response);
          });
        console.log("this.$route.query.name")
        console.log(this.$route.query.name)
      },
      getusercomment:async function(){
        await this.$axios.get("comment/getPersonalComment")
          .then(response=>{
        //     console.log("commentresponse")
        //     console.log(response)
        //     console.log("commentresponse.data.commentList");
        //     console.log(response.data.commentList);
            this.commentList=response.data.commentList;
          }).catch(function (error) {
            console.log("commentresponseerror")
            console.log(error);
          });
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
      deletetopic:async function(id){
        var ret = await this.$axios.post("topic/deleteTopic",{
          topicid:id,
        }).then(response=> {
          console.log(response);
          console.log("删除该主题帖成功");})
          .catch(function (error) {
            console.log(error);
          });
        this.getusertopic();
      },
      deletecomment:async function(id){
        var ret = await this.$axios.post("comment/deleteComment",{
          commentid:id,
        }).then(response=> {
          console.log(response);
          console.log("删除该评论成功");})
          .catch(function (error) {
            console.log(error);
          });
        this.getusercomment();
      },
    },
    mounted:function(){
      this.getusertopic();
      this.getusercomment();
    }
}


</script>

<style scoped>
@import '../assets/files/用户界面/styles.css';
</style>
