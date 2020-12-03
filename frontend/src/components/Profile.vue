<template>
  <div>
    <!-- 第一行 -->
    <el-row class="basic-info" :gutter="10">
      <!-- 左边人物详情 -->
      <el-col :span="14" :offset="2">
        <el-card shadow="hover">
          <el-col :span="6" class="avator_zone">
            <img
              src="../assets/avator.jpg"
              style="width: 90%; margin: auto; display: block"
            />
          </el-col>
          <el-col :span="18" class="info_zone" style="padding-left: 10px">
            <el-row class="info_name">
              <el-col :span="18">
                <span @click="center">赵东岩</span>
              </el-col>
              <el-col class="follow_btn" :span="6">
                <el-button icon="fa fa-plus-square-o">
                  <span style="margin-left: 5px"> 关 注 </span>
                </el-button>
              </el-col>
            </el-row>

            <el-divider class="divider"></el-divider>

            <!-- 
              待完成：
                编辑按钮
              待完善：
                基本信息块右边未填满
                mail和homepage不换行
             -->
             <!-- 完成编辑按钮啦
              -->
            <el-row></el-row>
            <el-row  v-if="basic_flag==false">
              <i class="el-icon-edit" @click="change_basic_flag" style="float:right"></i>
              <el-row class="info_line">
                <i class="fa fa-id-card-o info_icon"></i><span>教授</span>
              </el-row>

              

              <el-row class="info_line">
                <i class="fa fa-institution info_icon"></i>
                <span> Peking University </span>
              </el-row>

              <el-row class="info_line">
                <i class="fa fa-institution info_icon"></i>
                <span> 北京大学计算机科学与技术学院 </span>
              </el-row>

              <el-row class="info_line">
                <i class="fa fa-phone info_icon"></i>
                <span>(86) 10-82529252</span>
              </el-row>

              <el-row class="info_line">
                <i class="fa fa-envelope-o info_icon"></i>
                <span>zhaodongyan@pku.edu.cn</span>
              </el-row>

              <el-row class="info_line">
                <i class="fa fa-internet-explorer info_icon"></i>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.icst.pku.edu.cn/zhaodongyan/en/"
                  style="color: black"
                >
                  www.icst.pku.edu.cn/zhaodongyan/en/
                </a>
              </el-row>

              <el-row class="info_line">
                <i class="fa fa-location-arrow info_icon"></i>
                <span>
                  Room 408, No.128 North Zhongguancun Street, Haidian District,
                  Beijing 100080, China
                </span>
              </el-row>
            </el-row>
          </el-col>

          <i class="el-icon-close" @click="change_basic_flag" style="float:right" v-if="basic_flag==true"></i>
           <el-form v-if="basic_flag==true" style="float:left" label-position="right" label-width="100px">
             
              <el-form-item label="姓名：" >
                <el-input v-model="edit_list" style="width:500px"></el-input>
              </el-form-item>
              <el-form-item label="职业：" >
                <el-input v-model="edit_list" style="width:500px"></el-input>
              </el-form-item>
              <el-form-item label="电话：" >
                <el-input v-model="edit_list" style="width:500px"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：" >
                <el-input v-model="edit_list" style="width:500px"></el-input>
              </el-form-item>
              <el-form-item label="单位：" >
                <el-input v-model="edit_list" style="width:500px"></el-input>
              </el-form-item>
              <el-form-item label="地址：" >
                <el-input v-model="edit_list" style="width:500px"></el-input>
              </el-form-item>
              <el-form-item label="个人主页：" >
                <el-input v-model="edit_list" style="width:500px"></el-input>
              </el-form-item>
              <el-form-item label="性别：" >
                <el-input v-model="edit_list" style="width:500px"></el-input>
              </el-form-item>
              <el-button  v-if="basic_flag==true" @click="edit_basic">保存</el-button>
           </el-form>

        </el-card>
      </el-col>
      <!-- 右边关系网络 -->
      <el-col class="relation_net" :span="6">
        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 关系网络</span>
          </div>
          <div>
            <img
              src="../assets/relationship_net.png"
              style="width: 250px; margin: auto; display: block"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row class="research-field" :gutter="10">
      <el-col :span="14" :offset="2">
        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 研究领域</span>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 作者统计 </span>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 第三行 -->
    <el-row class="introduction" :gutter="10">
      <el-col :span="14" :offset="2">
        <el-card shadow="hover" class="box-card" >
          <div slot="header" class="clearfix">
            <span> 工作经历 </span><i class="el-icon-edit" @click="change_work_flag" style="float:right" v-if="work_flag==false"></i>
            <i class="el-icon-close" @click="change_work_flag" style="float:right" v-if="work_flag==true"></i>
          </div>
          <p v-if="work_flag==false">
            Professor in Peking University, Aug.2007 ~ now, Peking University
            arrowAssociate Professor in Peking University, Aug.2001 ~ July 2007
            , Peking University arrowAssistant Professor in Peking University,
            Aug.1996 ~ July 2001 , Peking University arrowAssistant Researcher
            in Peking University, July.1994 ~ July 1996 , Peking University
          </p>
          
           <el-form v-if="work_flag==true" style="float:left" label-width="100px">
              <el-form-item  >
                <el-input v-model="edit_list" style="width:500px" type="textarea"></el-input>
              </el-form-item>
              <el-button  v-if="work_flag==true" @click="edit_work">保存</el-button>
           </el-form>

        </el-card>

      


        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 教育背景 </span><i class="el-icon-edit" @click="change_edu_flag" style="float:right"  v-if="edu_flag==false"></i>
            <i class="el-icon-close" @click="change_edu_flag" style="float:right" v-if="edu_flag==true"></i>
          </div>
          <p  v-if="edu_flag==false">
            Ph.D., Computer Science, Peking University, Beijing, China, 2000
            <br />
            M.S., Computer Science, Peking University, Beijing, China, 1994 B.
            <br />
            S., Computer Science, Peking University, Beijing, China, 1991
          </p>
          <el-form v-if="edu_flag==true" style="float:left" label-width="100px">
              <el-form-item  >
                <el-input v-model="edit_list" style="width:500px" type="textarea"></el-input>
              </el-form-item>
              <el-button  v-if="edu_flag==true" @click="edit_edu">保存</el-button>
           </el-form>
        </el-card>

        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 个人简介 </span><i class="el-icon-edit" @click="change_profile_flag" style="float:right"  v-if="profile_flag==false"></i>
            <i class="el-icon-close" @click="change_profile_flag" style="float:right" v-if="profile_flag==true"></i>
          </div>
          <p style="text-indent: 2em"  v-if="profile_flag==false">
            My major research interests include Natural Language Processing,
            Semantic Data Management and Knowledge-based Intelligent System.
            Recently, I am interested in several research topics including
            Information Extraction, Knowledge Graph, Question Answering &
            Reading Comprehension, Dialogue System and Knowledge-based
            Intelligence applications.
          </p>
          <p style="text-indent: 2em"  v-if="profile_flag==false">
            I am a distinguished member of China Computer Federation (CCF), the
            secretary-general of CCF TCCI (Technical Committee on Chinese
            Information Technology), a member of CCF Task Force on Big Data, a
            member of CCF Network and Data Communications, a senior member of
            CIPS Social Media Processing Committee. I undertook 15 national
            research projects (include National Natural Science Foundation of
            China, National Hi-Tech Project) and is/was the PI in 7 of them. I
            also undertook 8 provincial and ministerial level scientific
            research projects, and was the PI in 4 of them.
          </p>
          <p style="text-indent: 2em"  v-if="profile_flag==false">
            I published over 100 referred papers (more than 40 of them are top
            ranked by CCF, such as ACL, AAAI, IJCAI, KDD, WWW, SIGMOD, VLDB; AI,
            TODS, VLDB Journal, TKDE etc.), obtained 20 patents, and won 7
            official awards in national and provincial/ministerial level,
            including National Awards of Scientific and Technological Process,
            Second Prize (Ranking the first one). I also won China Youth Science
            and Technology Award (2007) and Special Award of Technological
            Innovation titled "Honor of Science and Technology" by Beijing
            Municipal Government (2007).
          </p>
          <el-form v-if="profile_flag==true" style="float:left" label-width="100px">
              <el-form-item  >
                <el-input v-model="edit_list" style="width:500px" type="textarea"></el-input>
              </el-form-item>
              <el-button  v-if="profile_flag==true" @click="edit_pro">保存</el-button>
           </el-form>

        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span> 相似作者 </span>
          </div>

          <div class="similar_author_pics">
            <el-row v-for="o in 3" :key="o">
              <el-col :span="8" v-for="o in 3" :key="o">
                <img src="../assets/avator.jpg" class="similar_author_pic" />
                <span> Name </span>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col></el-row
    >

    <!-- 第四行 -->
    <el-row class="work" :gutter="10">
      <el-col :span="14" :offset="2" class="left">
        <el-card shadow="hover" class="paper box-card">
          <div slot="header" class="clearfix">
            <span> 论文 </span>
          </div>
        </el-card>

        <el-card shadow="hover" class="project box-card">
          <div slot="header" class="clearfix">
            <span> 科研项目 </span>
          </div>
        </el-card>
      </el-col>

      <!-- 待完成：菜单浮动 -->
      <el-col :span="3" class="right">
        <el-menu>
          <el-menu-item index="1" @click="goto('.basic-info')">
            <!-- <i class="el-icon-user"></i> -->
            <span slot="title">基本信息</span>
          </el-menu-item>
          <el-menu-item index="2" @click="goto('.research-field')">
            <!-- <i class="el-icon-menu"></i> -->
            <span slot="title">研究领域</span>
          </el-menu-item>
          <el-menu-item index="3" @click="goto('.introduction')">
            <!-- <i class="el-icon-document"></i> -->
            <span slot="title">背景与经历</span>
          </el-menu-item>
          <el-menu-item index="4" @click="goto('.paper')">
            <!-- <i class="el-icon-document"></i> -->
            <span slot="title">论文</span>
          </el-menu-item>
          <el-menu-item index="5" @click="goto('.project')">
            <!-- <i class="el-icon-document"></i> -->
            <span slot="title">科研项目</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>



<style scoped src = "../assets/css/profile.css">
</style>

<script>
export default {
  data(){
    return{
      academic_home_id:'',
      list:{},//保存从后端返回的信息
      user_id:'',
      basic_flag:false,
      work_flag:false,
      edu_flag:false,
      profile_flag:false,
      edit_list:{},//复制上文list，用于保存更改的内容
    }
  },
  created(){
            //alert(1);
            const _this=this;
            axios.post('/ajax/profile/view/'+_this.academic_home_id).then(function (resp) {
                     //console.log(resp.data);
                     _this.list=resp.data;
                 })
        },
  methods: {
    goto(pos) {
      document.querySelector(pos).scrollIntoView();
    },
    center() {
      this.$router.push("/personal_center");
    },
    edit_basic(){
      alert('basic');
      this.basic_flag=!this.basic_flag;
      const _this=this;
      axios.post('/ajax/profile/modify/'+_this.academic_home_id+'/'+_this.user_id+'/'+_this.edit_list).then(function (resp) {
                     //console.log(resp.data);
      })
    },
    edit_work(){
      alert('work');
      this.work_flag=!this.work_flag;
      const _this=this;
      axios.post('/ajax/profile/modify/'+_this.academic_home_id+'/'+_this.user_id+'/'+_this.edit_list).then(function (resp) {
                     //console.log(resp.data);
      })
    },
    edit_edu(){
      alert('edu');
      this.edu_flag=!this.edu_flag;
      const _this=this;
      axios.post('/ajax/profile/modify/'+_this.academic_home_id+'/'+_this.user_id+'/'+_this.edit_list).then(function (resp) {
                     //console.log(resp.data);
      })

    },
    edit_pro(){
      alert('pro');
      this.profile_flag=!this.profile_flag;
      const _this=this;
      axios.post('/ajax/profile/modify/'+_this.academic_home_id+'/'+_this.user_id+'/'+_this.edit_list).then(function (resp) {
                     //console.log(resp.data);
      })

    },
    change_basic_flag(){
      this.basic_flag=!this.basic_flag;
    },
    change_work_flag(){
      this.work_flag=!this.work_flag;
    },
    change_edu_flag(){
      this.edu_flag=!this.edu_flag;
    },
    change_profile_flag(){
      this.profile_flag=!this.profile_flag;
    }
  },
};
</script>