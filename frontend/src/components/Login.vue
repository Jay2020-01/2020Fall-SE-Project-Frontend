<template>
  <div class="login_container" background>
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录表单区域 -->
      <el-form :model="loginForm" class="login_form" label-width="0px">
        <!-- 用户名 -->
        <el-form-item label>
          <el-input v-model="loginForm.username" prefix-icon="fa fa-user" placeholder="用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label>
          <el-input v-model="loginForm.password" show-password prefix-icon="fa fa-lock" placeholder="密码"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns" label>
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.login_container {
  // 设置背景图片
  background-image: url("../assets/backgroud.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

.login_form {
  position: absolute;
  bottom: 5px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  // 居右对齐
  justify-content: flex-end;
}
</style>
