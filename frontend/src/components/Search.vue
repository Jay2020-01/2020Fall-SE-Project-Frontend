<template>
  <div>
    <!-- 搜索框 -->
    <el-row class="search-row">
      <el-col class="search-col" :span="12" :offset="6">
        <el-input
          class="search-input input-with-select"
          clearable
          placeholder="请输入内容"
          v-model="input"
          @keyup.enter.native="handleClick"
        >
          <el-select v-model="activeValue" slot="prepend" placeholder="请选择">
            <el-option label="搜索论文" value="1"></el-option>
            <el-option label="搜索专家" value="2"></el-option>
          </el-select>
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="handleClick"
          ></el-button>
        </el-input>
      </el-col>
    </el-row>
    <!-- 搜索结果 -->
    <el-row class="result-row">
      <el-col class="result-col" :span="22" :offset="1">
        <!-- 路由占位符 -->
        <router-view />
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="论文" name="paper" ><router-view></router-view></el-tab-pane>
          <el-tab-pane label="专家" name="person" ><router-view></router-view></el-tab-pane>
        </el-tabs> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      activeValue: "1",
      activeName: "paper",
    };
  },
  mounted() {
    this.createSearch();
  },
  methods: {
    createSearch() {
      this.input = this.$route.query.key_word;
      var paths = this.$route.path.split("/");
      var path = paths.pop();
      if (path == "paper") {
        this.activeValue = "1";
      } else {
        this.activeValue = "2";
      }
    },
    handleClick() {
      if (this.input.length != 0) {
        if (this.activeValue == 1) {
          // 搜索论文
          this.$router.push({
            path: "/search/paper",
            query: {
              key_word: this.input,
            },
          });
        } else {
          this.$router.push({
            path: "/search/person",
            query: {
              key_word: this.input,
            },
          });
        }
      }
      location.reload();
    },
  },
};
</script>

<style lang="less" scoped>
//tab样式
// 取消下方横线
/deep/.el-tabs__nav-wrap::after {
  position: static !important;
}
/deep/ .el-tabs__nav {
  left: 20%;
}
/deep/.el-tabs__active-bar {
  background-color: #ea6f5a;
}
/deep/.el-tabs__item.is-active {
  color: #ea6f5a;
}
/deep/.el-tabs__item:hover {
  color: #ea6f5a;
}
// 搜索栏样式
.search-row {
  margin-top: 5px;
}
.search-col {
  height: 80px;
  width: 800px;
  display: flex;
  align-items: center;
  // border: 1px blue solid;
}

.search-input {
  border: 1px solid #c5c5c5;
  border-radius: 5px;
}

.el-select {
  width: 150px;
}

/deep/ .el-input__inner {
  height: 45px;
  border: none;
  font-size: 16px;
}


.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.input-with-select:hover {
  border: 1px solid #ea6f5a;
  // background: #fff;
}

/deep/ .el-input-group__prepend {
  border: none;
  border-radius: 10px 0 0 10px;
  background-color: #f6f6f6;
}

.input-with-select {
  background-color: #fff;
}

/deep/ .el-input-group__append {
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #fff;
}

//搜索结果样式
.result-row {
  margin-top: 8px;
}
.result-col {
  line-height: 10px;
}
</style>
