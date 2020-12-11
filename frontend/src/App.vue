<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    var _this = this;
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        console.log(err);
        if (err.response.status === 401) {
          console.log("request error, token error");
          _this.$store.dispatch("logout").then(() => {
            // _this.$router.push("/login");
          });
        } else {
          _this.$message({
            showClose: true,
            message: "您未被授权访问该页面",
            type: "error",
          });
          window.history.go(-1);
        }
        throw err;
      });
    });
  },
};
</script>

<style>
</style>
