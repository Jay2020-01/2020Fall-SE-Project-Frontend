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
        } else if (err.response.status === 404) {
          _this.$message({
            showClose: true,
            message: "网络错误",
            type: "error",
          });
        } else {
          console.log(err.response)
          _this.$message({
            showClose: true,
            message: err.response.statusText,
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
