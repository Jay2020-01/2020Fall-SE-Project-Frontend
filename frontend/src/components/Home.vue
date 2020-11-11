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
            <el-input
              placeholder="搜索内容"
              v-model="input"
              clearable
            ></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content head-box3 bg-purple">
            <div>
              <el-button size="medium" @click="logout">退出</el-button>
            </div>
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
export default {
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    home(){
      this.$router.push("/");
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
  // 居右对齐
  justify-content: flex-end;
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
</style>
