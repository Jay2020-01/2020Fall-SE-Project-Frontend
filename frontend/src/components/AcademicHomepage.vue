<template>
  <div>
    <!-- 上面部分:搜索专家行 -->
        <el-row style="margin-bottom: 10px;">
          <!-- 根据名字检索的可能是该用户的card -->
          <el-input
            class="search-input"
            placeholder="请输入内容"
            v-model="input"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-row>
    <!-- 中间部分 -->
    <el-row :gutter="20">
      <!-- 左边竖列:搜索按钮及搜索结果 -->
      <el-col :span="16" style="">
        
        <el-row>
          <el-col :span="12" v-for="(item, index) in person_list" :key="index">
            <el-card class="box-card_1" shadow="hover">
              <div style="line-height: 10px" @click="click_name(item)">
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
                  <h4>{{ item.person }}</h4>
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
                  ><span style="color: #409eff">{{ item.hIndex }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>论文数：</span
                  ><span style="color: #409eff">{{ item.paperNum }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>引用数：</span
                  ><span style="color: #409eff">{{ item.reference }}</span>
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
                  ><span style="font-style: italic">{{ item.occupation }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>单位：</span
                  ><span style="font-style: italic">{{ item.company }}</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <!-- 右边竖列:需要绑定的信息 -->
      <el-col :span="8">
        <div style="">
          <el-card style="">
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
                <h4>{{ this.person_now.person }}</h4>
              </div>
              <!-- 指数 -->
              <div style="">
                <span
                  >h-index：<span style="color: #409eff">{{
                    this.person_now.hIndex
                  }}</span></span
                >
                <el-divider direction="vertical"></el-divider>
                <span
                  >论文数：<span style="color: #409eff">{{
                    this.person_now.paperNum
                  }}</span></span
                >
                <el-divider direction="vertical"></el-divider>
                <span
                  >引用数：<span style="color: #409eff">{{
                    this.person_now.reference
                  }}</span></span
                >
              </div>
              <br />
              <!-- 单位&身份 -->
              <div style="">
                <span>身份：{{ this.person_now.occupation }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>单位：{{ this.person_now.company }}</span>
              </div>
              <br />
              <el-button type="primary" @click="dialogFormVisible = true"
                >绑定</el-button
              >
              <el-dialog width="35%" title="请输入邮箱" :visible.sync="dialogFormVisible">
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
                    <el-input v-model="dynamicValidateForm.email" style="width: 50%; float: left"></el-input>
                    <el-button type="primary">发送验证码</el-button>
                  </el-form-item>
                  <el-form-item
                    prop="email"
                    label="验证码"
                  >
                    <el-input v-model="dynamicValidateForm.email" style="width: 50%; float: left"></el-input>
                  </el-form-item>
                </el-form>

                <div slot="footer" class="dialog-footer" style="display: flex; align-items: center; justify-content: center">
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
      <!-- 展示了8个card后分页 -->
      <div>
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="8"
          :total="total"
          @current-change="page"
        >
        </el-pagination>
      </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      input: "",
      //user:{person:'何铭凯',hIndex:'6000',paperNum:'81',reference:'132732',occupation:'博士',company:'北京航空航天大学北京航空航天大学'},
      person_list: [
        {
          person: "何铭凯",
          hIndex: "60",
          paperNum: "81",
          reference: "132732",
          occupation: "教授",
          company: "北京航空航天大学",
          id: "1",
        },
        {
          person: "何明凯",
          hIndex: "0",
          paperNum: "2",
          reference: "0",
          occupation: "教授",
          company: "北京航空航天大学",
          id: "1",
        },
        {
          person: "何铭凯",
          hIndex: "81",
          paperNum: "402",
          reference: "59997",
          occupation: "教授",
          company: "北京航空航天大学",
          id: "1",
        },
        {
          person: "何铭凯",
          hIndex: "81",
          paperNum: "402",
          reference: "59997",
          occupation: "教授",
          company: "北京航空航天大学",
          id: "1",
        },
        {
          person: "何铭凯",
          hIndex: "81",
          paperNum: "402",
          reference: "59997",
          occupation: "教授",
          company: "北京航空航天大学",
          id: "1",
        },
        {
          person: "何铭凯",
          hIndex: "81",
          paperNum: "402",
          reference: "59997",
          occupation: "教授",
          company: "北京航空航天大学",
          id: "1",
        },
        {
          person: "何铭凯",
          hIndex: "81",
          paperNum: "402",
          reference: "59997",
          occupation: "教授",
          company: "北京航空航天大学",
          id: "1",
        },
        {
          person: "何铭凯",
          hIndex: "81",
          paperNum: "402",
          reference: "59997",
          occupation: "教授",
          company: "北京航空航天大学",
          id: "1",
        }
      ],
      person_now: "",
      user_id: "",
      academic_home_id: "",
      user_name: "xxx",
      person_list2: [],
      total: 15, //替换成真数据
      dialogFormVisible: false,
      formLabelWidth: "120px",
      dynamicValidateForm: {
        email: "",
      },
    };
  },
  // mounted:function() {
  //         //alert("!!!")
  //         this.person_now=this.person_list[0];
  //         const _this=this;
  //             axios.get('http://localhost:8088/ajax/personal_center/academic_homepage/search'+_this.user_name).then(function (resp) {
  //                 //console.log(resp.data);
  //                 _this.person_list2=resp.data;
  //             })
  //     },
  created() {
    //alert(1);
    this.person_now = this.person_list[0];
    const _this = this;
    axios
      .get(
        "/ajax/personal_center/academic_homepage/search/" +
          _this.user_name +
          "/1/8"
      )
      .then(function (resp) {
        //console.log(resp.data);
        _this.person_list2 = resp.data;
      });
  },
  methods: {
    click_name(item) {
      //this.person_now=item;
      const _this = this;
      axios
        .post("/ajax/personal_center/academic_homepage/view/" + _this.item.id)
        .then(function (resp) {
          //console.log(resp.data);
          _this.person_now = resp.data;
          // _this.academic_home_id=_this.person_now.id
        });
    },
    page(current_page) {
      //alert(current_page)
      this.person_now = this.person_list[0];
      const _this = this;
      axios
        .get(
          "/ajax/personal_center/academic_homepage/search/" +
            _this.user_name +
            "/" +
            current_page +
            "/8"
        )
        .then(function (resp) {
          //console.log(resp.data);
          _this.person_list2 = resp.data;
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      const _this = this;
      axios
        .post(
          "/ajax/personal_center/academic_homepage/bind/" +
            _this.user_id +
            "/" +
            _this.person_now.id +
            "/" +
            _this.dynamicValidateForm.email
        )
        .then(function (resp) {
          //console.log(resp.data);
        });
      alert(this.dynamicValidateForm.email);
      this.dialogFormVisible = false;
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
</style>