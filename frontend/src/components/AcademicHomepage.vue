<template>
  <div>
    <!-- 上面部分:搜索专家行 -->
    <el-row style="margin-bottom: 10px">
      <!-- 根据名字检索的可能是该用户的card -->
      <el-input
        class="search-input"
        placeholder="请输入您要认领的门户"
        v-model="key_word"
        @keyup.enter.native="init();getPersonList()"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="init();getPersonList()"
        ></el-button>
      </el-input>
    </el-row>
    <!-- 中间部分 -->
    <div class="empty_content" v-if="totalCount==0">
      <p><span>暂无门户结果</span></p>
      <img src="../assets/findPortalEmpty.png">
    </div>
    <el-row :gutter="20" v-if="totalCount>0">
      <!-- 左边竖列:搜索按钮及搜索结果 -->
      <el-col :span="16" style="">
        <el-row>
          <el-col :span="12" v-for="item in person_list" :key="item.aid" @click.native="clickHandler(item,index)">
            <el-card
              class="box-card_1"
              shadow="hover"
             >             
             <!-- @click.native="click_name(item.aid)" -->
              <div style="line-height: 10px">
                <!-- 头像 -->
                <div style="float: left; height: 120px">
                  <img
                    src="../assets/coffeelogo.png"
                    alt="头像"
                    style="width: 80px; height: 80px"
                  />
                </div>

                <!-- 名字 -->
                <div
                  style="
                    line-height: 20px;
                    padding: 0px;
                    margin: -20px 0px -10px 90px;
                    text-align: left;
                  "
                >
                  <h4>{{ item.name }}</h4>
                </div>
                <!-- 指数 -->
                <div
                  style="
                    line-height: 20px;
                    padding: 0px;
                    margin: 0px 0px 0px 90px;
                    text-align: left;
                    font-size: 13px;
                  "
                >
                  <span>h-index：</span
                  ><span style="color: #409eff">{{ item.h_index }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>论文数：</span
                  ><span style="color: #409eff">{{ item.n_pubs }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>引用数：</span
                  ><span style="color: #409eff">{{ item.n_citation }}</span>
                </div>
                <br />
                <!-- 地址&身份 -->
                <div
                  style="
                    line-height: 20px;
                    padding: 0px;
                    margin: 0px 0px 0px 90px;
                    text-align: left;
                    font-size: 13px;
                  "
                >
                  <span>身份：</span
                  ><span style="font-style: italic">{{ item.position }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>单位：</span
                  >
                  <span style="font-style: italic" v-if="item.orgination">{{ item.orgination}}</span>
                  <span style="font-style: italic" v-else-if="item.orgs&&item.orgs[0]">{{ item.orgs[0]}}</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <!-- 右边竖列:需要绑定的信息 -->
      <el-col :span="8">
        <div style="" v-if="totalCount>0">
          <el-card style="" >
            <div style="line-height: 20px">
              <!-- 头像 -->
              <div>
                <img
                  src="../assets/coffeelogo.png"
                  alt="头像"
                  style="width: 80px; height: 80px"
                />
              </div>
              <!-- 名字 -->
              <div style="">
                <h4  @click="gotoProfile">{{ this.person_now.name }}</h4>
              </div>
              <!-- 指数 -->
              <div style="">
                <span
                  >h-index：<span style="color: #409eff">
                    {{ this.person_now.h_index }}
                  </span></span
                >
                <el-divider direction="vertical"></el-divider>
                <span
                  >论文数：<span style="color: #409eff">{{
                    this.person_now.n_pubs
                  }}</span></span
                >
                <el-divider direction="vertical"></el-divider>
                <span
                  >引用数：<span style="color: #409eff">{{
                    this.person_now.n_citation
                  }}</span></span
                >
              </div>
              <br />
              <!-- 单位&身份 -->
              <div style="">
                <span v-if="person_now.position">身份：{{ this.person_now.position }}</span>
                <el-divider direction="vertical" v-if="person_now.position&&((person_now.orgs&&person_now.orgs[0])||person_now.orgination)"></el-divider>
                <span v-if="person_now.orgination">单位：{{ this.person_now.orgination}}</span>
                <span v-else-if="person_now.orgs&&person_now.orgs[0]">单位：{{ this.person_now.orgs[0]}}</span>
              </div>
              <br />
              <el-button type="primary" @click="dialogFormVisible = true"
                >绑定</el-button
              >
              <el-dialog
                width="35%"
                title="请输入邮箱"
                :visible.sync="dialogFormVisible"
              >
                <el-form
                  :model="dynamicValidateForm"
                  ref="dynamicValidateForm"
                  label-width="100px"
                  class="demo-dynamic"
                >
                  <el-form-item
                    prop="email"
                    label="邮箱"
                    :rules="[
                      {
                        required: true,
                        message: '请输入邮箱地址',
                        trigger: 'blur',
                      },
                      {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: ['blur', 'change'],
                      },
                    ]"
                  >
                    <el-input
                      v-model="dynamicValidateForm.email"
                      style="width: 50%; float: left"
                    ></el-input>
                    <el-button
                      type="primary"
                      @click="sendEmail(dynamicValidateForm.email)"
                      >发送验证码</el-button
                    >
                  </el-form-item>
                  <el-form-item prop="code" label="验证码">
                    <el-input
                      v-model="dynamicValidateForm.code"
                      style="width: 50%; float: left"
                    ></el-input>
                  </el-form-item>
                </el-form>

                <div
                  slot="footer"
                  class="dialog-footer"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button
                    type="primary"
                    @click="submitForm('dynamicValidateForm')"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </div>
            <div></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <!-- 分页部分 -->
    <el-row style="margin-top: 10px">
      <el-col :span="12" :offset="6">
        <div >
          <el-button v-if="(totalCount||(pageNum>0&&totalCount==0))&&pageNum" @click="prepage()">上一页</el-button>
          <el-button v-if="totalCount" @click="nextpage()">下一页</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import store from "../store/index.js";
export default {
  data() {
    return {
      key_word: "",
      pageNum: 0,//当前页数
      pageSize: 8,
      person_list: [],
      person_now:[],
      curNum:0,
      user:[],
      totalCount: 0,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      dynamicValidateForm: {
        email: "",
        code: "",
      },
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    gotoProfile(){
      this.$router.push({
        path: '/profile',
        query: {
          aid: this.person_now.aid
        }
      })
    },
    getUserInfo(){
      var url = "http://106.13.138.133:18090/user/my_info";
      axios.get(url).then((res)=>{
        this.user = res.data.data;
      });
    },
    getPersonList() {
      console.log(this.key_word);
      var url =
        "http://106.13.138.133:18090/portal/personal_center/academic_homepage/search/" +
        this.key_word +
        "/" +
        this.pageNum +
        "/" +
        this.pageSize;
      axios.get(url).then((res) => {
        this.person_list = res.data.data.content;
        this.totalCount = res.data.data.numberOfElements;
      });
    },
    init(){
      this.pageNum=0;
    },
    clickHandler(data,num){
      this.person_now = data;
      this.curNum = num;
    },
    sendEmail(email) {
      var data = Qs.stringify({
        mail: email,
      });
      console.log(data);
      var url =
        "http://106.13.138.133:18090/portal/personal_center/academic_homepage/bind";
      axios.post(url, data).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            message: "邮件发送成功",
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = Qs.stringify({
            userId: this.user.id,
            aid: this.person_now.aid,
            email: this.dynamicValidateForm.email,
            code: this.dynamicValidateForm.code,
          });
          console.log(this.person_now.aid);
          var url =
            "http://106.13.138.133:18090/portal/personal_center/academic_homepage/check";
          axios.post(url, data).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                message: "绑定成功",
                type: "success",
              });
            } else {
              this.$message({
                message: res.data.message,
                type: "error",
              });
            }
          });
        } else {
          console.log("绑定失败！");
          return false;
        }
      });
      this.dialogFormVisible = false;
    },
    prepage(){
      if(this.pageNum>0){
        this.pageNum--;
        this.getPersonList();
      }
      console.log(this.pageNum);
    },
    nextpage(){
      if(this.pageNum>=0&&this.totalCount>0){
        this.pageNum++;
        this.getPersonList();
        console.log(this.pageNum);
      }
    },
  },
};
</script>
<style scoped >
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.search-input {
  margin: 0 10px 5px 10px;
  width: 27%;
  float: left;
}

.box-card_1 {
  margin: 0 10px 15px 10px;
  /* width: 48%; */
  height: 120px;
  /* float: left; */
  /* padding:10px */
}
/* .left{
      width: 60%px;
  } */
/* position:fixed;right:20px */

/* card边框样式 */
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}

/* 空结果显示 */
.empty_content{
  width: 80%;
  padding-top: 70px;
  text-align: center;
  font-size: 1.77777778em;
  color: #000e28;
  font-style: italic;
  font-weight: lighter;
  margin-top: -100px;
}
.empty_content img{
  width: 50%;
}
</style>