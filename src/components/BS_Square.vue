<template>
  <div id="square" class="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <!--<link href="files/广场/styles.css" type="text/css" rel="stylesheet"/>-->
    <div style='margin-top:25px;margin-left: 900px;width:500px' v-model="username">
      <img src="../assets/images/1.png" @click="routeuserpage(username)"/>
      <template >
        <span style="margin-top:-10px;margin-left:10px">{{username}}</span>
      </template>
    </div>
    <!-- Unnamed (矩形) -->
    <div id="u28" class="ax_default _二级标题" style="margin-top:-10px ">
        <p><span>BrainStorming</span></p>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u29" class="ax_default _二级标题" style="margin-top:-10px ">
        <p><span>Round Table Conference</span></p>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u30" class="ax_default _二级标题" style="margin-top:-10px ">
        <p><span>&quot;Yes and&quot;</span></p>
    </div>

    <!-- Unnamed (线段) -->
    <div id="u31" class="ax_default _线段" style="margin-left:-30px ">
      <img id="u31_img" class="img " src="../assets/images/广场/u31.svg"/>
    </div>

    <!-- Unnamed (线段) -->
    <div id="u32" class="ax_default _线段">
      <img id="u32_img" class="img " style="margin-left:0px;margin-top: 50px"src="../assets/images/广场/u31.svg"/>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u35" class="ax_default _三级标题">
      <div id="u35_div" class=""></div>
      <div id="u35_text" class="text ">
        <p><span>#Topic1</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u36" class="ax_default _三级标题">
      <div id="u36_div" class=""></div>
      <div id="u36_text" class="text ">
        <p><span>#Topic2</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u37" class="ax_default _三级标题">
      <div id="u37_div" class=""></div>
      <div id="u37_text" class="text ">
        <p><span>#Topic3</span></p>
      </div>
    </div>

    <div  style="margin-top:160px;margin-left:850px" >
      <el-button type="primary" v-model="username" @click="routepostpot(username)" round>Add Topic</el-button>
    </div>
    <!-- Unnamed (组合) -->
    <template>
      <el-table
        :data="topicList"
        style="width: 80%;top:50px;left:100px">
        <el-table-column
          label="Time"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date | format('MM-dd hh:mm') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Theme"
          width="200px">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.context }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Description"
          width="200px">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-tag>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click='routethemepage(scope.row.topicid,scope.row.context,scope.row.description)'>Join in</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!-- Unnamed (形状) -->
    <div id="u55" class="ax_default icon" @click="routesignin">
      <img id="u55_img" class="img " src="../assets/images/广场/u55.svg"/>
      <div id="u55_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>



    <!-- 排序 (矩形) -->
    <div id="u60" class="ax_default paragraph" data-label="排序">
      <div id="u60_div" class=""></div>
      <div id="u60_text" class="text ">
        <p><span @click.prevent='orderPots()' ></span></p>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.filter('format', function(value, arg) {
    function dateFormat(date, format) {
      if (typeof date === "string") {
        var mts = date.match(/(\/Date\((\d+)\)\/)/);
        if (mts && mts.length >= 3) {
          date = parseInt(mts[2]);
        }
      }
      date = new Date(date);
      if (!date || date.toUTCString() == "Invalid Date") {
        return "";
      }
      var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
      };
      format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
        var v = map[t];
        if (v !== undefined) {
          if (all.length > 1) {
            v = '0' + v;
            v = v.substr(v.length - 2);
          }
          return v;
        } else if (t === 'y') {
          return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
      });
      return format;
    }
    return dateFormat(value, arg);
  });

export default {
  data(){
    return{
      order:'DESC',
      topicList:[],
      username:this.$route.query.name,
    }
  },
  props:{
    "id":String,
  },
  methods:{
    orderPots:async function(){
      if(this.order==='DESC'){
        this.order='ASC';
      }
      else{
        this.order='DESC';
      }
      this.queryData();
    },
    routepostpot:function(name){
      console.log("name");
      console.log(name);
      this.$router.push({path: '/postpot',query:{name:name}});
    },
    routesignin:function(){
      this.$router.push({path: '/signin'});
    },
    routeuserpage:function(name){
      console.log("routeuserpage.name");
      console.log(name);
      this.$router.push({path: '/userpage',query:{name:name}});
    },
    routethemepage:function(id,theme,desc){
      // console.log(id);
      // let params = {
      //   id:this.id,
      //   try:'123',
      // };
      // this.$router.push({path: '/themepage',params: params});
      // console.log("id");
      //console.log(id);
      // localStorage.setItem("topicid",id);
      this.$router.push({path: '/themepage',query:{id:id,theme:theme,desc:desc,name:name}});
    },
    queryData:async function(){
      var ret = await this.$axios.post('http://localhost:8080/topic/getAllTopic',{
        order:this.order,
      }).then(response=>{
        this.topicList=response.data.topicList;
        console.log("this.topicList");
        console.log(this.topicList);
      }).catch(function (error) {
          console.log("error.response:"+error);
        });
      console.log("this.$route.query.name");
      console.log(this.$route.query.name);
    },
  },
  mounted:function(){
    this.queryData();
  }
}
</script>

<style scoped>
@import "../assets/files/广场/styles.css";
</style>
