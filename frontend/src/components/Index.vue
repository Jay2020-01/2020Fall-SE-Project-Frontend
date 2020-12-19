<template>
  <div>
    <!-- 放置主页大logo -->
    <el-row class="logo-row">
      <el-col class="logo-col" :span="12" :offset="6">
        <el-avatar :size="100" class="fa fa-coffee"></el-avatar>
        <span class="site-name">学术搜索</span>
      </el-col>
    </el-row>
    <!-- 放置主页大搜索框 -->
    <el-row class="search-row">
      <el-col class="search-col" :span="10" :offset="7">
        <el-input
          class="search-input input-with-select"
          placeholder="请输入内容"
          v-model="input"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="搜索论文" value="1"></el-option>
            <el-option label="搜索专家" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <!-- 下方几个跳转按钮(先占位) -->
    <el-row class="link-row"> </el-row>
    <!-- 咨询卡片 -->
    <el-row :gutter="20" class="card-row">
      <el-col class="card-col" :span="6" :offset="3">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>学术排名</span>
          </div>
          <div v-for="(item,index) in h_index" :key="index" class="text item_2" v-show="index<5">
            <!-- <span style="background-color: #f2f6fc;
                    line-height: 20px;
                    border-radius: 4px;
                    border: 2px solid #ebeef5;">{{index+1}}</span>  -->
            <span>{{item.name}}</span>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-col" :span="6">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>人才专家</span>
          </div>
          <div v-for="(item,index) in person" :key="index" class="text item_2" v-show="index<5">
            <!-- <span style="background-color: #f2f6fc;
                    line-height: 20px;
                    border-radius: 4px;
                    border: 2px solid #ebeef5;">{{index+1}}</span>  -->
            <span>{{item.name}}</span>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-col" :span="6">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>科技资讯</span>
          </div>
          <div v-for="(item,index) in paper" :key="index" class="text item_2" v-show="index<5">
            <!-- <span style="background-color: #f2f6fc;
                    line-height: 20px;
                    border-radius: 4px;
                    border: 2px solid #ebeef5;">{{index+1}}</span>  -->
            <span>{{item.title}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- {{h_index}} -->
  </div>
</template>

<script>
import Qs from "qs";
import axios from "axios";
import store from "../store/index.js";
export default {
  data() {
    return {
      input: "",
      select: "1",
      paper:[],
      person:[],
      h_index:[],
    };
  },
  created() {
    //alert("1");
    this.get_paper();
    this.get_person();
    this.get_h_index();
    //alert("2");
  },
  methods: {
    get_paper(){
      var url = "http://106.13.138.133:18090/search/hotPaper";
      axios.get(url).then((res)=>{
        //console.log('get data from url');
        //console.log(res.data.data);
        this.paper = res.data.data;
      });
      //console.log('post 1 finish');
    },
    get_person(){
      var url = "http://106.13.138.133:18090/search/hotAuthorByC";
      axios.get(url).then((res)=>{
        //console.log('get data from url');
        //console.log(res.data.data);
        this.person = res.data.data;
      });
      //console.log('post 1 finish');
    },
    get_h_index(){
      var url = "http://106.13.138.133:18090/search/hotAuthorByH";
      axios.get(url).then((res)=>{
        //console.log('get data from url');
        //console.log(res.data.data);
        this.h_index = res.data.data;
      });
      //console.log('post 1 finish');
    },
    search() {
      if(this.select == 1) {  // 搜索论文
        this.$router.push({
          path: '/search/paper',
          query: {
            key_word: this.input
          }
        })
      }else{
        this.$router.push({
          path: '/search/person',
          query: {
            key_word: this.input
          }
        })
      }
    },
  }
};
</script>

<style lang="less" scoped>
// logo样式
.logo-row {
  margin-top: 70px;
  // border: 1px green solid;
}

.logo-col {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   border: 1px red solid;
}

.logo-img {
  height: 100px;
}

.el-avatar {
  color: #ea6f5a;
  font-size: 50px;
  background-color: rgba(255, 255, 255, 0);
}
.site-name {
  font-size: 50px;
  color: #ea6f5a;
}

// 搜索栏样式
.search-col {
  height: 80px;
  display: flex;
  align-items: center;
  // border: 1px blue solid;
}

.search-input {
  border: 1px solid #c5c5c5;
  border-radius: 27px;
}

.el-select {
  width: 130px;
}

/deep/ .el-input__inner {
  height: 55px;
  border: none;
  font-size: 16px;
}

/deep/ .el-input-group__prepend {
  border: none;
  border-radius: 27px 0 0 27px;
}
/deep/ .el-input-group__append {
  border: none;
  border-radius: 0 27px 27px 0;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

// 跳转按钮样式
.link-row {
  margin-top: 20px;
  height: 80px;
  // border: 1px red solid;
}

// 卡片样式
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}

/deep/ .el-card__header {
  // 卡片标题
  background-color: #ea6f5a;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

/deep/ .el-card__body {
  // 卡片内容
  display: flex;
  flex-direction: column;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 20px;
  height: 30px;
  //border: 1px red solid;
  display: flex;
  align-items: center;


  //margin-bottom: 10px;
  // height: 50px;
   text-align: left;
   line-height:17px
  // margin: 0px 0px 0px 0px;
  //border: 1px red solid;
  //display: flex;
  //align-items: center;
}
.item_2 {
  margin-bottom: 35px;
  height: 10px;
  //border: 1px red solid;
  display: flex;
  align-items: center;


  //margin-bottom: 10px;
  // height: 50px;
   text-align: left;
   line-height:17px
  // margin: 0px 0px 0px 0px;
  //border: 1px red solid;
  //display: flex;
  //align-items: center;
}
.box-card {
  width: 100%;
  height: 300px;
}
</style>