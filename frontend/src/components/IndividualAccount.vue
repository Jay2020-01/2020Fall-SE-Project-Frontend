<template>
  <div>
    <el-row :gutter="20">
      <!-- 左边修改信息列 -->
      <el-col :span="12">
        <el-card
        class="box-card"
        style=""
        shadow="hover"
      >
        <h1 style="margin: -40px 0 0 40px; height: 120px; width: 100px">
          基本信息
        </h1>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          style="margin: 0 0 0 0px; width: 460px"
        >
          <el-form-item label="昵称" prop="nickname">
            <el-input v-model="ruleForm.nickname"></el-input>
          </el-form-item>
          <el-form-item label="姓氏" prop="family_name">
            <el-input v-model="ruleForm.family_name"></el-input>
          </el-form-item>
          <el-form-item label="名字" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="ruleForm.gender">
              <input type="radio" value="Male" v-model="ruleForm.gender" />男
              <!-- <p>&nbsp;&nbsp;&nbsp;&nbsp;</p> -->
              <input type="radio" value="Female" v-model="ruleForm.gender" />女
            </el-radio-group>
          </el-form-item>
          <el-form-item label="职业" prop="occupation">
            <el-select
              v-model="ruleForm.occupation"
              placeholder="请选择"
              style="width: 360px"
            >
              <el-option
                v-for="item in options"
                :key="item.occupation"
                :label="item.label"
                :value="item.occupation"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="单位" prop="institution">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="ruleForm.institution"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <!-- <el-button style="float:left;margin: 20px 0 35px 60px " @click="modifyInfo('ruleForm')">展示</el-button> -->
        <el-row>
          <el-button
            style="float: left; margin: 10px 0 25px 100px"
            @click="modifyInfo('ruleForm')"
            >保存</el-button
          >
        </el-row>
      </el-card>
      </el-col>
      <!-- 右边头像及修改密码列 -->
      <el-col :span="12">
        <!-- 修改头像行 -->
        <el-row>
          <el-card
        class="box-card"
        style=""
        shadow="hover"
      >
        <div
          class="avatar_box"
          style="
            width: 100px;
            height: 100px;
            border: 1px solid #eee;
            border-radius: 50%;
            transform: translate(250%, 0%);
          "
        >
          <img
            src="../assets/coffeelogo.png"
            style="
              width: 100px;
              height: 100px;
              magrin: 0 0 -10px 0;
              border-radius: 50%;
            "
          />
        </div>
      </el-card>
        </el-row>
        <!-- 修改密码行 -->
        <el-row style="margin-top: 15px">
          <el-card
        class="box-card"
        style=""
        shadow="hover"
      >
        <h1 style="margin: -40px 0 0 40px; height: 120px; width: 100px">
          密码管理
        </h1>
        <div v-if="flag == false">
          <el-form
            :model="pwdForm"
            :rules="rules"
            ref="pwdForm"
            label-width="100px"
            class="demo-ruleForm"
            style="margin: 0 0 0 40px; width: 460px"
          >
            <el-form-item label="旧密码" prop="old">
              <el-input
                placeholder="请输入密码"
                v-model="pwdForm.old"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="new">
              <el-input
                placeholder="请输入密码"
                v-model="pwdForm.new"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirm">
              <el-input
                placeholder="请输入密码"
                v-model="pwdForm.confirm"
                show-password
              ></el-input>
            </el-form-item>
            <router-link
              :to="{ path: '/personal_center/academic_homepage' }"
              style="text-decoration: none"
            >
              <el-form-item style="margin: 20px 0 0px 20px"
                >忘记密码？</el-form-item
              >
            </router-link>
          </el-form>
        </div>
        <div v-else>
          <h4>密码用于保护账号信息和登录安全</h4>
        </div>
        <div v-if="flag == false">
          <el-button
            style="float: left; margin: 20px 0 30px 60px"
            @click="
              change_flag();
              resetForm('pwdForm');
            "
            >取消</el-button
          >
          <el-button
            style="float: left; margin: 20px 0 30px 20px"
            @click="modifyPwd('pwdForm')"
            >保存</el-button
          >
        </div>
        <div v-else>
          <el-button
            style="float: left; margin: 45px 0 30px 60px"
            @click="change_flag"
            >修改</el-button
          >
        </div>
      </el-card>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
export default {
  data() {
    return {
      flag: true,
      ruleForm: {
        nickname: "",
        family_name: "",
        name: "",
        gender: "Male",
        occupation: "教授",
        institution: "",
      },
      pwdForm: {
        new: "",
        old: "",
        confirm: "",
      },
      rules: {
        nickname: [{ required: true, trigger: "blur" }],
        family_name: [{ required: true, trigger: "blur" }],
        name: [{ required: true, trigger: "blur" }],
        occupation: [{ required: true, trigger: "blur" }],
        new: [{ required: true, trigger: "blur" }],
        old: [{ required: true, trigger: "blur" }],
        confirm: [{ required: true, trigger: "blur" }],
      },
      options: [
        {
          occupation: "教授",
          label: "教授",
        },
        {
          occupation: "副教授",
          label: "副教授",
        },
        {
          occupation: "助理教授",
          label: "助理教授",
        },
        {
          occupation: "研究员",
          label: "研究员",
        },
        {
          occupation: "博士后",
          label: "博士后",
        },
        {
          occupation: "博士生",
          label: "博士生",
        },
        {
          occupation: "研究生",
          label: "研究生",
        },
        {
          occupation: "其他",
          label: "其他",
        },
      ],
    };
  },
  created: function () {
    this.getMyInfo();
  },
  methods: {
    getMyInfo() {
      axios.get("http://106.13.138.133:18090/user/my_info/").then((res) => {
        console.log(res);
        this.ruleForm.nickname = res.data.data.userName;
        this.ruleForm.family_name = res.data.data.familyName;
        this.ruleForm.name = res.data.data.name;
        this.ruleForm.gender = res.data.data.gender;
        this.ruleForm.occupation = res.data.data.occupation;
        this.ruleForm.institution = res.data.data.institution;
      });
    },
    modifyInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = Qs.stringify(this.ruleForm);
          console.log(data);
          axios
            .post("http://106.13.138.133:18090/user/change_info/", data)
            .then((res) => {
              console.log(res);
              if (res.data.code == 200) {
                this.$message({
                  message: res.data.message,
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
          alert("提交失败!");
          return false;
        }
      });
    },
    modifyPwd(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.pwdForm.new != this.pwdForm.confirm) {
            this.$message({
              message: "密码不一致",
              type: "error",
            });
            this.resetForm("pwdForm");
            return false;
          }

          var data = Qs.stringify({
            old_pwd: this.pwdForm.old,
            new_pwd: this.pwdForm.new,
          });
          axios
            .post("http://106.13.138.133:18090/user/change_password/", data)
            .then((res) => {
              if (res.data.code == 200) {
                this.$message({
                  message: res.data.message,
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
          alert("提交失败!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    change_flag() {
      this.flag = !this.flag;
    },
  },
};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  /* width: 480px; */
}
p {
  display: inline;
}
/* card边框样式 */
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}
</style>