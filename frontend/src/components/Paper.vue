<template>
  <div>
    <!-- 日期选择器 -->
    <el-row class="date-row">
      <el-col class="date-col" span="1" offset="0">
        <div class="block">
          <el-date-picker
            v-model="activeDate"
            type="monthrange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
            :picker-options="pickerOptions"
            size="mini">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>

    <el-row class="paper-row">
      <!--论文表格区域-->
      <el-col class="paper-col" span="18" offset="0">
        <el-table
          :data="paperList"
          style="width: 100%"
          :default-sort = "{prop: 'name', order: 'descending'}">
          <el-table-column
            prop="paper"
            label="论文名"
            sortable>
          </el-table-column>
          <el-table-column
            prop="person"
            label="作者"
            sortable>
          </el-table-column>
          <el-table-column
            prop="time"
            label="发表时间"
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
              <!--收藏按钮-->
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
      activeDate: '',
      paperList:[{
        paper:'An Inverse Theorem for an Inequality of Kneser',person:'陶哲轩',time:'2019',reference:'0'
        },{
        paper:'Finite time blowup for a supercritical defocusing nonlinear Schrödinger system',person:'陶哲轩',time:'2018',reference:'2'
        },{
        paper:'AN INTEGRATION APPROACH TO THE TOEPLITZ SQUARE PEG PROBLEM',person:'陶哲轩',time:'2017',reference:'3'
      }],
      pickerOptions: {
        shortcuts: [{
          text: '本月',
          onClick(picker) {
            picker.$emit('pick', [new Date(), new Date()]);
          }
        }, {
          text: '本年至今',
          onClick(picker) {
            const end = new Date();
            const start = new Date(new Date().getFullYear(), 0);
            picker.$emit('pick', [start, end]);
          }
          }, {
          text: '最近半年',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 6);
            picker.$emit('pick', [start, end]);
          }
          }, {
          text: '最近三年',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 36);
            picker.$emit('pick', [start, end]);
          }
          }, {
          text: '最近五年',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 60);
            picker.$emit('pick', [start, end]);
          }
          }, {
          text: '最近十年',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setMonth(start.getMonth() - 120);
            picker.$emit('pick', [start, end]);
          }
        }]
        },      
    }
  }
}
</script>

<style lang="less" scoped>
//论文表格样式
.date-row{
  margin-top: 0px;
  width: 0%;
  height: 5px;
}
.paper-row{
  margin-top: 30px;
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

.box-card {
  width: 100%;
  height: 300px;
}

.block{
  width: 100%;
  height: 300px;
}
</style>
