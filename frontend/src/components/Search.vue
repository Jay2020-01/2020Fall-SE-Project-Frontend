<template>
  <div>
    <!-- 搜索框 -->
    <el-row class="search-row">
      <el-col class="search-col" span="12" offset="4">
        <el-input class="search-input input-with-select" clearable placeholder="请输入内容" v-model="input">
          <el-select v-model="activeValue" slot="prepend" placeholder="请选择">
            <el-option label="所有学科" value="1"></el-option>
            <el-option label="计算机科学" value="2"></el-option>
            <el-option label="经济管理" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <!-- 搜索结果 -->
    <el-row class="result-row">
      <el-col class="result-col" span="24">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="专家" name="person" ><router-view></router-view></el-tab-pane>
          <el-tab-pane label="论文" name="paper" ><router-view></router-view></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
      return {
        input: '',
        activeValue:"1",
        activeName:"person"
    }
  },

  methods: {
    handleClick(tab, event) {
      this.$router.push("/search/"+tab.name);
    }
  }
};
</script>

<style lang="less" scoped>
// 搜索栏样式
.search-row{
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

/deep/ .el-input-group__prepend {
  border: none;
  border-radius: 5px 0 0 5px;
}
/deep/ .el-input-group__append {
  border: none;
  border-radius: 0 5px 5px 0;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

//搜索结果样式
.result-row{
  margin-top: 8px;
}
.result-col{
  line-height: 10px;
}



</style>
