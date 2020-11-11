<template>
  <div>
    <el-row class="person-row">
      <!--学者表格区域-->
      <el-col class="person-col" span="18" offset="0">
        <el-table
          :data="personList"
          style="width: 100%"
          :default-sort = "{prop: 'person', order: 'descending'}">
          <el-table-column
            prop="person"
            label="专家名"
            sortable>
          </el-table-column>
          <el-table-column
            prop="hIndex"
            label="h指数"
            sortable>
          </el-table-column>
          <el-table-column
            prop="paperNum"
            label="论文数"
            sortable>
          </el-table-column>
          <el-table-column
            prop="reference"
            label="引用数"
            sortable>
          </el-table-column>
          <el-table-column label="操作" width="130px">
            <template>
              <!--查看按钮-->
              <el-button type="primary" size="mini" icon="el-icon-search"></el-button>
              <!--关注按钮-->
              <el-button type="warning" size="mini" icon="el-icon-star-off"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <!-- 备用栏 -->
      <el-col class="card-col" span="4" offset="1">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>备用栏</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      personList:[{
        person:'何恺明',hIndex:'60',paperNum:'81',reference:'132732'
        },{
        person:'何明凯',hIndex:'0',paperNum:'2',reference:'0'
        },{
        person:'陶哲轩',hIndex:'81',paperNum:'402',reference:'59997'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
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

.box-card {
  width: 100%;
  height: 300px;
}
</style>
