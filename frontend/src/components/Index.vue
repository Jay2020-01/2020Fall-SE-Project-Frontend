<template>
  <div>
    <!-- 放置主页大logo -->
    <el-row class="logo-row">
      <el-col class="logo-col" span="12" offset="6">
        <el-avatar :size="100" class="fa fa-coffee"></el-avatar>
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
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <!-- 下方几个跳转按钮(先占位) -->
    <el-row class="link-row"> </el-row>
    <!-- 咨询卡片 -->
    <el-row gutter="20" class="card-row">
      <el-col class="card-col" span="6" offset="3">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>学术排名</span>
          </div>
          <div v-for="o in 3" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>
      <el-col class="card-col" span="6">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>人才专家</span>
          </div>
          <div v-for="o in 3" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>
      <el-col class="card-col" span="6">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>科技资讯</span>
          </div>
          <div v-for="o in 3" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      select: "1",
    };
  },
  methods: {
    search() {
      this.$router.push("/search");
    },
  }
};
</script>

<style lang="less" scoped>
// logo样式
.logo-row {
  margin-top: 70px;
  // border: 1px green solid;
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
.search-col {
  height: 80px;
  display: flex;
  align-items: center;
  // border: 1px blue solid;
}

.search-input {
  border: 1px solid #c5c5c5;
  border-radius: 27px;
}

.el-select {
  width: 130px;
}

/deep/ .el-input__inner {
  height: 55px;
  border: none;
  font-size: 16px;
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

// 跳转按钮样式
.link-row {
  margin-top: 20px;
  height: 80px;
  // border: 1px red solid;
}

// 卡片样式
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}

/deep/ .el-card__header {
  // 卡片标题
  background-color: #ea6f5a;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

/deep/ .el-card__body {
  // 卡片内容
  display: flex;
  flex-direction: column;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
  height: 50px;
  // border: 1px red solid;
  display: flex;
  align-items: center;
}

.box-card {
  width: 100%;
  height: 300px;
}
</style>