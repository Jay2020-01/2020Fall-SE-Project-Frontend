<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header height="70px" direction="horizontal">
      <el-row type="flex" class="row-bg">
        <el-col :span="4" :offset="1">
          <div class="grid-content head-box1 bg-purple" @click="home">
            <!-- 头像区域 -->
            <el-avatar :size="50" class="fa fa-coffee"></el-avatar>
            <span class="site-name">咖啡学术</span>
          </div>
        </el-col>
        <el-col :span="5" :offset="6">
          <div class="grid-content head-box2 bg-purple-light">
            <!-- 搜索框 -->
            <!-- <el-input
              placeholder="搜索内容"
              v-model="input"
              clearable
            ></el-input> -->
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content head-box3 bg-purple">
            <!-- <div>
              <el-button size="medium" @click="logout">退出</el-button>
            </div> -->
            <!-- 这里是右上角的头像 -->
            <el-dropdown
              style="height: 60px; display: flex; align-items: center"
              @visible-change="get_user_info"
            >
              <span class="el-dropdown-link">
                <div style="display: flex; align-items: center">
                  <el-avatar :size="40" :src="imageUrl" />
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div v-if="isLogin">
                  <el-dropdown-item disabled>{{ username }}</el-dropdown-item>
                  <el-dropdown-item disabled>{{
                    mail_address
                  }}</el-dropdown-item>
                  <!-- <el-divider></el-divider> -->
                  <!-- <el-dropdown-item >个人信息</el-dropdown-item> -->
                  <el-divider>
                    <i class="el-icon-mobile-phone" />
                  </el-divider>
                  <el-dropdown-item @click.native="toPersonalCenter"
                    >个人空间</el-dropdown-item
                  >
                  <el-dropdown-item style="color: red" @click.native="logout"
                    >退出登录</el-dropdown-item
                  >
                </div>
                <div v-if="!isLogin" style="">
                  <el-dropdown-item
                    @click.native="toRegister"
                    style="color: red; margin-bottom: 10px; font-size: 16px"
                    >注册</el-dropdown-item
                  >
                  <el-dropdown-item
                    style="font-size: 16px"
                    @click.native="toLogin"
                    >登录</el-dropdown-item
                  >
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import store from "../store/index.js";
export default {
  data() {
    return {
      // 右上角头像
      username: "username",
      mail_address: "123123@126.com",
      imageUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      // 判断是否登录
      isLogin: false,
    };
  },
  created: function () {
    this.getMyInfo();
  },
  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    toLogin() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    home() {
      this.$router.push("/");
    },
    toPersonalCenter() {
      window.sessionStorage.clear();
      this.$router.push("/personal_center");
    },
    getMyInfo() {
      if (store.getters.isLoggedIn) {
        axios.get("http://106.13.138.133:18090/user/my_info/").then((res) => {
          console.log(res);
          this.username = res.data.data.userName;
          this.mail_address = res.data.data.mail;
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #ffffff;
  margin-bottom: 5px;
  color: #333;
  text-align: left;
  line-height: 60px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px #ddd;
}

.el-aside {
  padding-top: 40px;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
  border-right: 1px solid #eee;
}

.el-main {
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

// 顶栏内容样式
.head-box1 {
  display: flex;
}
.el-avatar {
  margin: 5px 5px 5px 0;
  color: #ea6f5a;
  font-size: 23px;
  background-color: #ffffff;
}
.site-name {
  font-size: 25px;
  color: #ea6f5a;
}
.head-box3 {
  display: flex;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
  // 居右对齐
  justify-content: flex-end;
  // border: 1px solid red;
}

// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
.grid-content {
  border-radius: 4px;
  min-height: 60px;
}
.row-bg {
  margin: 5px 0;
  // background-color: #f9fafc;
}

// 右上角头像
.el-dropdown-menu__item {
  text-align: center;
}
</style>
