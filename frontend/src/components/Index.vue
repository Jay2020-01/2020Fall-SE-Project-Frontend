<template>
  <div>
    <!-- 放置主页大logo -->
    <el-row class="logo-row">
      <el-col class="logo-col" span="12" offset="6">
          <el-avatar :size="100" class="fa fa-coffee"></el-avatar>
        <!-- <img class="logo-img" src="../assets/logo.png" alt /> -->
        <span class="site-name">学术搜索</span>
      </el-col>
    </el-row>
    <!-- 放置主页大搜索框 -->
    <el-row class="search-row">
      <el-col class="search-col" span="10" offset="7">
        <el-input
          class="search-input input-with-select"
          placeholder="请输入内容"
          v-model="input"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="所有学科" value="1"></el-option>
            <el-option label="计算机科学" value="2"></el-option>
            <el-option label="经济管理" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      select: "",
    };
  },
};
</script>

<style lang="less" scoped>
// logo样式
.logo-row {
  margin-top: 70px;
}

.logo-col {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   border: 1px red solid;
}

.logo-img {
  height: 100px;
}

.el-avatar {
  color: #ea6f5a;
  font-size: 50px;
  background-color: rgba(255, 255, 255, 0);
}
.site-name {
  font-size: 50px;
  color: #ea6f5a;
}

// 搜索栏样式
.search-row {
  height: 50px;
}

.search-input {
  border: 1px solid #c5c5c5;
  border-radius: 27px;
}

.el-select {
  width: 100px
}

/deep/ .el-input__inner {
  height: 55px;
  border: none;
  font-size: 18px;
}

/deep/ .el-input-group__prepend {
  border: none;
  border-radius: 27px 0 0 27px;
}
/deep/ .el-input-group__append {
  border: none;
  border-radius: 0 27px 27px 0;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>