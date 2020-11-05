<template>
  <div class="register_container" background>
    <div class="register_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 注册表单区域 -->
      <el-form :model="registerForm" class="register_form" label-width="0px">
        <!-- 用户名 -->
        <el-form-item label>
          <el-input v-model="registerForm.username" prefix-icon="fa fa-user" placeholder="用户名"></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label>
          <el-input v-model="registerForm.email" prefix-icon="fa fa-envelope" placeholder="邮箱"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label>
          <el-input v-model="registerForm.password" show-password prefix-icon="fa fa-lock" placeholder="密码"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns" label>
          <el-button type="primary">注册</el-button>
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
      // 注册表单的数据绑定对象
      registerForm: {
        username: "",
        password: "",
        email:""
      },
    };
  },
};
</script>

<style lang="less" scoped>
.register_container {
  // 设置背景图片
  background-image: url("../assets/backgroud.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  background-color: #2b4b6b;
  height: 100%;
}

.register_box {
  width: 400px;
  height: 350px;
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

.register_form {
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
