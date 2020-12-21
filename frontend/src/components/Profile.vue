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
              </el-col>
              <el-col class="follow_btn" :span="6">
                <el-button icon="fa fa-plus-square-o" @click="followScholar()">
                  <span style="margin-left: 5px"> 关 注 </span>
                </el-button>
              </el-col>
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

              <el-row class="info_line" v-if="author.orgs">
                <i class="fa fa-institution info_icon"></i>
                <span v-if="author.orgs">{{author.orgs[0]}}</span>
              </el-row>
              <el-row class="info_line" v-else-if="author.orgination">
                <i class="fa fa-institution info_icon"></i>
                <span >{{author.orgination}}</span>
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
        columns:['对象','H指数','论文数','引用数'],
        rows:[{'对象':this.author.name,'H指数':this.author.h_index,'论文数':this.author.n_pubs,'引用数':this.author.n_citation},
        {'对象':'平均数','H指数':6.06,'论文数':33.89,'引用数':854.77},
        ]
      };
    },
  },
  created() {
    this.getAuthorInfo();
  },
  methods: {
    getAuthorInfo() {
      var data = Qs.stringify({
        aid:this.$route.query.aid,
      });
      var url = "http://106.13.138.133:18090/portal/profile/view/";
      axios
        .post(url,data)
        .then((res) => {
          this.author=res.data.data.author;
          this.papers=res.data.data.papers;
          this.name=res.data.data.author.name;
          this.phone=res.data.data.author.phone;
          this.email=res.data.data.author.email;
          if(res.data.data.author.orgs){
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
    followScholar() {
      if (!store.getters.isLoggedIn) {
        this.$message({
          showClose: true,
          message: "请先登录",
          type: "warning",
        });
        return;
      }
      var data = Qs.stringify({
        person_id: this.$route.query.aid,
      });
      // console.log(data);
      axios
        .post("http://106.13.138.133:18090/follow/follow_scholar/", data)
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              showClose: true,
              message: "已关注",
              type: "success",
            });
          } else {
            this.$message({
              showClose: true,
              message: res.data.message,
              type: "warning",
            });
          }
        });
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
//研究领域样式
.research-field .el-card {
    min-height: 0px;
}
//论文表格样式
.paper-row {
  // margin-top: 30px;
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