<template>
  <div>
    <!-- 第一行 -->
    <el-row class="basic-info" :gutter="10">
      <!-- 左边人物详情 -->
      <el-col :span="14" :offset="2">
        <el-card shadow="hover">
          <el-col :span="6" class="avator_zone">
            <img
              src="../assets/default.jpg"
              style="width: 90%; margin: auto; display: block"
            />
          </el-col>
          <el-col :span="18" class="info_zone" style="padding-left: 10px">
            <el-row class="info_name">
              <el-col :span="18">
                <span >{{author.name}}</span>
                <svg class="icon bindsign" aria-hidden="true" v-if="bind">
                  <use xlink:href="#icon-bind">
                    <symbol id="icon-bind" viewBox="0 0 1024 1024">
                      <path d="M509.9 129.1c51.9 0 102.2 10.1 149.5 30.2 45.7 19.3 86.8 47 122.1 82.3s63 76.4 82.3 122.1c20 47.3 30.2 97.6 30.2 149.5s-10.1 102.2-30.2 149.5c-19.3 45.7-47 86.8-82.3 122.1s-76.4 63-122.1 82.3c-47.3 20-97.6 30.2-149.5 30.2S407.7 887 360.4 866.9c-45.7-19.3-86.8-47-122.1-82.3s-63-76.4-82.3-122.1c-20-47.3-30.2-97.6-30.2-149.5S136 410.9 156 363.6c19.3-45.7 47-86.8 82.3-122.1s76.4-63 122.1-82.3c47.3-20 97.6-30.1 149.5-30.1m0-64c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.6-448-448-448z"></path>
                      <path d="M444.3 710.8L248 514.5l45.3-45.3 151 151.1 282.2-282.2 45.3 45.2z"></path>
                    </symbol>
                  </use>
                </svg>
              </el-col>
              <!-- <el-col class="follow_btn" :span="6">
                <el-button icon="fa fa-plus-square-o"> -->
                <div class="button_div">
                  <button @click="sendMssage()"
                    class="follow_button" >
                    <div>
                      <i class="el-icon-message"></i>
                      <span>私信</span>
                    </div>
                  </button>
                  <button  v-if="!followed" @click="follow()"
                    class="follow_button" >
                    <div>
                      <span>{{follow_content}}</span>
                    </div>
                  </button>
                  <button  v-if="followed" @click="unfollow()"
                    class="followed_button" >
                    <div>
                      <span style="font-size:16px">{{followed_content}}</span>
                    </div>
                    <span class="follow_count">{{followCount}}</span>
                  </button>
                </div>
                  <!-- <span style="margin-left: 5px"> 关 注 </span> -->
                <!-- </el-button> -->
              <!-- </el-col> -->
            </el-row>

            <el-divider class="divider"></el-divider>

            <el-row></el-row>
            <el-row v-if="flag == false">
              <i
                class="el-icon-edit"
                @click="changeFlag"
                style="float: right"
              ></i>
              <el-row class="info_line" v-if="author.position">
                <i class="fa fa-id-card-o info_icon"></i><span>{{author.position}}</span>
              </el-row>

              <el-row class="info_line" v-if="author.orgination">
                <i class="fa fa-institution info_icon"></i>
                <span >{{author.orgination}}</span>
              </el-row>
              <el-row class="info_line" v-else-if="author.orgs&&author.orgs[0]">
                <i class="fa fa-institution info_icon"></i>
                <span v-if="author.orgs&&author.orgs[0]">{{author.orgs[0]}}</span>
              </el-row>
              

              <el-row class="info_line" v-if="author.phone">
                <i class="fa fa-phone info_icon"></i>
                <span>{{author.phone}}</span>
              </el-row>

              <el-row class="info_line" v-if="author.email">
                <i class="fa fa-envelope-o info_icon"></i>
                <span>{{author.email}}</span>
              </el-row>

              <el-row class="info_line" v-if="author.address">
                <i class="fa fa-location-arrow info_icon"></i>
                <span>{{author.address}}</span>
              </el-row>

              <el-row class="info_line" v-if="author.homepage">
                <i class="fa fa-internet-explorer info_icon"></i>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style="color: black"
                >
                  {{author.homepage}}
                </a>
              </el-row>

              <el-row class="info_line" v-if="author.sex">
                <i class="fa fa-child info_icon"></i>
                <span>
                  {{author.sex}}
                </span>
              </el-row>
            </el-row>
          </el-col>

          <i
            class="el-icon-close"
            @click="changeFlag"
            style="float: right"
            v-if="flag == true"
          ></i>
          <el-form
            v-if="flag == true"
            style="float: left"
            label-position="right"
            label-width="100px"
          >
            <el-form-item label="姓名：">
              <el-input v-model="name" style="width: 500px"></el-input>
            </el-form-item>
            <el-form-item label="电话：">
              <el-input v-model="phone" style="width: 500px"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">
              <el-input v-model="email" style="width: 500px"></el-input>
            </el-form-item>
            <el-form-item label="单位：">
              <el-input v-model="orgination" style="width: 500px"></el-input>
            </el-form-item>
            <el-form-item label="地址：">
              <el-input v-model="address" style="width: 500px"></el-input>
            </el-form-item>
            <el-form-item label="个人主页：">
              <el-input v-model="homepage" style="width: 500px"></el-input>
            </el-form-item>
            <el-form-item label="性别：">
              <el-input v-model="sex" style="width: 500px"></el-input>
            </el-form-item>
            <el-button v-if="flag == true" @click="edit">保存</el-button>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 作者统计 </span>
          </div>
          <ve-radar
            :data="chartData2"
          ></ve-radar>
        </el-card>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row class="research-field" :gutter="10" >
      <el-col :span="14" :offset="2">
        <el-card shadow="hover" class="box-card" >
          <div slot="header" class="clearfix">
            <span> 研究领域</span>
          </div>
          <div v-if="chartData1.rows.length">
            <ve-wordcloud
              :data="chartData1"
              :settings="chartSettings1"
              height="250px"
            ></ve-wordcloud>
          </div>
          <!-- <div v-for="item in author.tags" :key="item.t">
            <span>{{item.t}}</span>
          </div> -->
        </el-card>
      </el-col>
    </el-row>

    <!-- 第三行 -->
    <el-row class="introduction" :gutter="10">
      <el-col :span="14" :offset="2">
        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 工作经历 </span
            ><i
              class="el-icon-edit"
              @click="changeFlag"
              style="float: right"
              v-if="flag == false"
            ></i>
            <i
              class="el-icon-close"
              @click="changeFlag"
              style="float: right"
              v-if="flag == true"
            ></i>
          </div>
          <div v-if="flag == false"> 
            <p>{{author.work}}</p>
          </div>

          <el-form
            v-if="flag == true"
            style="float: left"
            label-width="100px"
          >
            <el-form-item>
              <el-input
                v-model="workInfo"
                style="width: 500px"
                type="textarea"
              ></el-input>
            </el-form-item>
            <el-button v-if="flag == true" @click="edit">保存</el-button>
          </el-form>
        </el-card>

        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 教育背景 </span
            ><i
              class="el-icon-edit"
              @click="changeFlag"
              style="float: right"
              v-if="flag == false"
            ></i>
            <i
              class="el-icon-close"
              @click="changeFlag"
              style="float: right"
              v-if="flag == true"
            ></i>
          </div>
          <p v-if="flag == false">
            {{author.edu}}
          </p>
          <el-form
            v-if="flag == true"
            style="float: left"
            label-width="100px"
          >
            <el-form-item>
              <el-input
                v-model="eduInfo"
                style="width: 500px"
                type="textarea"
              ></el-input>
            </el-form-item>
            <el-button v-if="flag == true" @click="edit">保存</el-button>
          </el-form>
        </el-card>

        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 个人简介 </span
            ><i
              class="el-icon-edit"
              @click="changeFlag"
              style="float: right"
              v-if="flag == false"
            ></i>
            <i
              class="el-icon-close"
              @click="changeFlag"
              style="float: right"
              v-if="flag == true"
            ></i>
          </div>
          <p style="text-indent: 2em" v-if="flag == false">
            {{author.expertInfo}}
          </p>
          <el-form
            v-if="flag == true"
            style="float: left"
            label-width="100px"
          >
            <el-form-item>
              <el-input
                v-model="profileInfo"
                style="width: 500px"
                type="textarea"
              ></el-input>
            </el-form-item>
            <el-button v-if="flag == true" @click="edit">保存</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <!-- 第四行 -->
    <el-row class="paper-row" :gutter="10">
      <el-col :span="14" :offset="2" class="left">
        <el-card shadow="hover" class="paper box-card">
          <div slot="header" class="clearfix">
            <span> 论文 </span>
          </div>
          <div class="box" v-for="item in papers" :key="item.pid">
            <div class="title-zone">
              <div class="title-line">
                <span class="paper-title" @click="gotoPaper(item.pid)">
                  {{item.title}}
                </span>
              </div>
            </div>
            <div class="person-zone">
              <span class="person">
                {{ item.authors[0].name + ", et al." }}
              </span>
            </div>
            <div class="time-zone">
              <div class="time">
                <span>发表时间：</span>
                {{ item.year }}
              </div>
            </div>
            <div class="reference-zone">
              <div class="reference">
                <span>被引用:</span>
                <strong>{{ item.n_citation }}</strong>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>



<style scoped src = "../assets/css/profile.css">
</style>

<script>
import axios from "axios";
import Qs from "qs";
import store from "../store/index.js";
export default {
  data() {
    this.chartSettings1={
      sizeMin: 30,
      sizeMax: 60,
    },
    this.chartSettings2={
      
    }
    return {
      target_user_id: -1,
      followed:"",
      bind:"",
      followCount:"",
      follow_content:'+关注',
      followed_content:'已关注',
      author:{},
      papers:{},
      user_id: "",
      flag: false,
      name:"",
      phone:"",
      email:"",
      orgination:"",
      address:"",
      homepage:"",
      sex:"",
      workInfo:"",
      eduInfo:"",
      profileInfo:"",
      chartData1: {
        columns: ["t", "w"],
        rows: [
        ],
      },
    };
  },
  computed:{
    chartData2(){
      return{
        columns:['对象','H指数','论文数','引用数','L指数','影响力','活跃度'],
        rows:[
        {'对象':'平均水准','H指数':6.06,'论文数':33.89,'引用数':854.77,'L指数':Math.log(6.06).toFixed(3),'影响力':Math.log(854.77).toFixed(3),'活跃度':Math.log(33.89).toFixed(3)},
        {'对象':'顶峰水准','H指数':250,'论文数':2500,'引用数':450000,'L指数':Math.log(250).toFixed(3),'影响力':Math.log(450000).toFixed(3),'活跃度':Math.log(2500).toFixed(3)},
        {'对象':this.author.name,'H指数':this.author.h_index,'论文数':this.author.n_pubs,'引用数':this.author.n_citation,'L指数':Math.log(this.author.h_index).toFixed(3),'影响力':Math.log(this.author.n_citation).toFixed(3),'活跃度':Math.log(this.author.n_pubs).toFixed(3)},
        ]
      };
    },
  },
  created() {
    this.getAuthorInfo();
    this.getFollowStatus();
  },
  methods: {
    getAuthorInfo() {
      console.log("get author info")
      var data = Qs.stringify({
        aid:this.$route.query.aid,
      });
      var url = "http://106.13.138.133:18090/portal/profile/view/";
      axios
        .post(url,data)
        .then((res) => {
          // console.log("res data");
          // console.log(res);
          this.author=res.data.data.author;
          this.papers=res.data.data.papers;
          this.target_user_id=res.data.data.author.user_id;
          this.name=res.data.data.author.name;
          this.phone=res.data.data.author.phone;
          this.email=res.data.data.author.email;
          if(res.data.data.author.orgination){
            this.orgination=res.data.data.author.orgination;
          }
          else if(res.data.data.author.orgs&&res.data.data.author.orgs[0]){
            this.orgination=res.data.data.author.orgs[0];
          }
          else{
            this.orgination=res.data.data.author.orgination;
          }
          this.address=res.data.data.author.address;
          this.homepage=res.data.data.author.homepage;
          this.sex=res.data.data.author.sex;
          this.profileInfo=res.data.data.author.expertInfo;
          this.workInfo=res.data.data.author.work;
          this.eduInfo=res.data.data.author.edu;
          if(res.data.data.author.tags){
            this.chartData1.rows=res.data.data.author.tags;
          }
          this.bind=res.data.data.author.user_id;
        });
    },
    getFollowStatus(){
      var params={
        person_id:this.$route.query.aid,
      };
      var url = "http://106.13.138.133:18090/follow/isFollow";
      axios.get(url,{params}).then((res)=>{
        this.followed=res.data.data;
      })
      this.getFollowCount();
    },
    getFollowCount(){
      var params={
        person_id:this.$route.query.aid,
      };
      var url= "http://106.13.138.133:18090/follow/followerNum";
      axios.get(url,{params}).then((res)=>{
        this.followCount=res.data.data;
      });
    },
    // goto(pos) {
    //   document.querySelector(pos).scrollIntoView();
    // },
    // center() {
    //   this.$router.push("/personal_center");
    // },
    edit() {
      var data = JSON.stringify({
        aid:this.$route.query.aid,
        expertName:this.name,
        phoneNumber:this.phone,
        email:this.email,
        orgination:this.orgination,
        address:this.address,
        homepage:this.homepage,
        sex:this.sex,
        expertInfo:this.profileInfo,
        work:this.workInfo,
        edu:this.eduInfo
      });
      var url="http://106.13.138.133:18090/portal/profile/modify";
      axios.post(url,data,{headers: {'Content-Type': 'application/json;'}}).then((res)=>{
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            message: "修改成功",
            type: "success",
          });
        } else {
          this.$message({
            message: res.data.message,
            type: "warning",
          });
        }
      });
      this.flag = !this.flag;
      this.getAuthorInfo();
    },
    changeFlag() {
      this.flag = !this.flag;
    },
    gotoPaper(pid) {
      this.$router.push("/details_paper/" + pid);
    },
    getPersonList() {
      console.log("get data");
      var url = "http://106.13.138.133:18090/notice/get_person_list/" + localStorage.getItem('user_id') ;
      axios.get(url).then((res)=>{
        console.log("get data");
        console.log(res);
      })
    },
    getMssageContent() {
      console.log("get message content");
      var url = "http://106.13.138.133:18090/notice/get_message_content/" + localStorage.getItem('user_id') + '/' + "?target_user_id=" + this.target_user_id;
      axios.get(url).then((res)=>{
        console.log("get data message content");
        console.log(res);
      })
    },
    sendMssage() {
      console.log("send message");
      console.log(this.target_user_id);
      var data = Qs.stringify({
        content:"测试数据测试数据",
        target_user_id: this.target_user_id,
      });
      var url="http://106.13.138.133:18090/notice/post_message/" + localStorage.getItem('user_id');
      axios.post(url, data).then((res)=>{
        console.log(res);
        console.log("获取到了数据")
      });
    },
    follow () {
      this.followed=!this.followed;
      if (!store.getters.isLoggedIn) {
        this.$message({
          message: "请先登录",
          type: "warning",
        });
        return;
      }
      var data = Qs.stringify({
        person_id: this.$route.query.aid,
      });
      var url="http://106.13.138.133:18090/follow/follow_scholar/";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              message: "关注成功",
              type: "success",
            });
          } else {
            this.$message({
              message: res.data.message,
              type: "warning",
            });
          }
        });
    },
    unfollow () {
      this.followed=!this.followed;
      if (!store.getters.isLoggedIn) {
        this.$message({
          message: "请先登录",
          type: "warning",
        });
        return;
      }
      var data = Qs.stringify({
        person_id: this.$route.query.aid,
      });
      var url = "http://106.13.138.133:18090/follow/remove_scholar/";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              message: "已取消关注",
              type: "success",
            });
          } else {
            this.$message({
              message: res.data.message,
              type: "warning",
            });
          }
        });
      
    },
  },
};
</script>

<style lang="less" scoped>

//关注与取消关注按钮样式
.button_div {
  display: flex;
  align-items: center;
}
button{
  outline:none;
}
.follow_button{
  color: #f56c6c;
  background: #fef0f0;
  border: #fbc4c4 solid;
  border-radius: 20px;
  padding: 12px 23px;
  text-align: center;
  font-size: 16px;
  margin-left: 25px;
  height: 50px;
  width: 110px;
}
.follow_button:hover{
  background:#ff9999;
  color:#fef0f0;
}
.followed_button{
  color:#fef0f0;
  background: #f56c6c;
  border: #fbc4c4 solid;
  border-radius: 20px;
  padding: 12px 23px;
  text-align: center;
  font-size: 16px;
  margin-left: 25px;
  height: 50px;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.followed_button:hover{
  background:#ff9999;
  color:#fef0f0;
}
// .follow_count::before{
//   border-color: #fff;
//   display: inline-block;
//   border-right: 1px solid #fff;
//   border-right-color: #fff;
//   content: "";
//   margin: 0 5px;
//   position: relative;
//   height: 15px;
// }

//

//认领标志样式
.bindsign{
  vertical-align: middle;
  font-size: 18px;
  font-weight: 700;
  margin-left: 6px;
}

.icon{
  width: 1em;
  height: 1em;
  fill: currentColor;
}
//研究领域样式
.research-field .el-card {
    min-height: 0px;
}
//论文表格样式
.paper-row {
  // margin-top: 30px
  margin-top: 0px;
}
.box {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  top: -2px;
  line-height: 18px;
  width: calc(100% - 49px);
  background-color: transparent;
  border-bottom: 1px solid #d5d5d5;
  /*在父容器中输入display: flex就是启动了flex布局*/
}

//标题样式
.title-zone {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 0;
  margin-top: 15px;
}
.title-line {
  line-height: 22px;
  text-align: start;
}
.paper-title {
  color: #000;
  line-height: 22px;
  margin-bottom: 0;
  vertical-align: middle;
  cursor: pointer;
}

// 作者样式
.person-zone {
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
}

.person {
  color: #067c08;
  cursor: pointer;
}

//发表时间样式
.time-zone {
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.time {
  font-size: 13px;
  color: #444;
  margin: 5px 0 0;
}

//引用样式
.reference-zone {
  flex-wrap: wrap;
  font-size: 12px;
  margin-top: 5px;
  border-top: 1px dashed #dfdfdf;
  padding: 6px 0 3px;
}
.reference {
  color: #067c08;
  text-align: start;
}


/* card边框样式 */
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}
.el-card{
  line-height: 22px;
}
</style>