<template>
  <div>
    <el-row class="paper-row">
      <!-- 日期选择器区域 -->
      <el-col class="date-col" span="1" offset="1">
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

      <!-- 论文表格区域 -->
      <el-col class="paper-col" span="13" offset="3">
        <el-tabs type="border-card">
          <!-- 按时间排序 -->
          <el-tab-pane label="最新">
            <div class="box" v-for="(item) in paperList" :key="item.paperId">
              <!-- 标题区域 -->
              <div class="title-zone">
                <!-- 论文名称 -->
			          <div class="title-line">
                  <span class="paper-title">
                    {{item.paper}}
                  </span>
                </div>
                <!-- 右侧收藏按钮 -->
                <div class="title-right-zone">
                  <div class="mark">
                    <div>
                      <el-button type="info" class="btn">
                        <div>
                          <span>收藏</span>
                        </div>
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 作者区域 -->
              <div class="person-zone">
                <span class="person">
                  {{item.person}}
                </span>
              </div>
              <!-- 摘要区域 -->
              <div class="abstract-zone">
                <div class="abstract">
                  <span class="abstract-text">
                    {{item.abstract}}
                  </span>
                </div>
              </div>
              <!-- 发表时间区域 -->
              <div class="time-zone">
                <div class="time">
                  <span>发表时间：</span>
                  {{item.time}}
                </div>
              </div>
              <!-- 引用区域 -->
			        <div class="reference-zone">
                <div class="reference">                    
				          <span>被引用:</span>
                  <strong>{{item.reference}}</strong>
                </div>                                   
			        </div>                                                 
            </div>
          </el-tab-pane>
          <!-- 按综合排序 -->
          <el-tab-pane label="综合">
            <div class="box" v-for="(item) in paperList" :key="item.paperId">
              <div class="title-zone">

			          <div class="title-line">
                  <span class="paper-title">
                    {{item.paper}}
                  </span>
                </div>

                <div class="title-right-zone">
                  <div class="mark">
                    <div>
                      <el-button type="info" class="btn">
                        <div>
                          <span>收藏</span>
                        </div>
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="person-zone">
                <span class="person">
                  {{item.person}}
                </span>
              </div>

              <div class="abstract-zone">
                <div class="abstract">
                  <span class="abstract-text">
                    {{item.abstract}}
                  </span>
                </div>
              </div>

              <div class="time-zone">
                <div class="time">
                  <span>发表时间：</span>
                  {{item.time}}
                </div>
              </div>

			        <div class="reference-zone">
                <div class="reference">                    
				          <span>被引用:</span>
                  <strong>{{item.reference}}</strong>
                </div>                                   
			        </div>                                                 
            </div>
          </el-tab-pane>
          <!-- 按引用数排序 -->
          <el-tab-pane label="引用数">
            <div class="box" v-for="(item) in paperList" :key="item.paperId">
              <div class="title-zone">

			          <div class="title-line">
                  <span class="paper-title">
                    {{item.paper}}
                  </span>
                </div>

                <div class="title-right-zone">
                  <div class="mark">
                    <div>
                      <el-button type="info" class="btn">
                        <div>
                          <span>收藏</span>
                        </div>
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="person-zone">
                <span class="person">
                  {{item.person}}
                </span>
              </div>

              <div class="abstract-zone">
                <div class="abstract">
                  <span class="abstract-text">
                    {{item.abstract}}
                  </span>
                </div>
              </div>

              <div class="time-zone">
                <div class="time">
                  <span>发表时间：</span>
                  {{item.time}}
                </div>
              </div>

			        <div class="reference-zone">
                <div class="reference">                    
				          <span>被引用:</span>
                  <strong>{{item.reference}}</strong>
                </div>                                   
			        </div>                                                 
            </div>
          </el-tab-pane>
        </el-tabs>
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
        paperId:'1',paper:'An Inverse Theorem for an Inequality of Kneser',person:'陶哲轩',abstract:"Let G = (G, +) be a compact connected abelian group, and let μG denote its probability Haar measure. A theorem of Kneser (generalising previous results of Macbeath, Raikov, and Shields) establishes the bound μG(A + B) ≥ min(μG(A) + μG(B), 1) whenever A and B are compact subsets o...",time:'2019',reference:'0'
        },{
        paperId:'2',paper:'Finite time blowup for a supercritical defocusing nonlinear Schrödinger system',person:'陶哲轩',abstract:"We consider the global regularity problem for defocusing nonlinear Schrodinger systems i partial derivative t+Delta u=(del F-Rm)(u) + G on Galilean spacetime RxR(d), where the field u : R1+d -> C-m is vector-valued, F : C-m -> R is a smooth potential which is positive, phase-rota...",time:'2018',reference:'2'
        },{
        paperId:'3',paper:'AN INTEGRATION APPROACH TO THE TOEPLITZ SQUARE PEG PROBLEM',person:'陶哲轩',abstract:"The peg or square of Toeplitz asks if every simple closed curve in the plane inscribes a (non-degenerate) square, in the sense that all four vertices of that square lie on the curve. By a variety of arguments of a nature, it is known that the answer this question is positiv...",time:'2017',reference:'3'
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
//日期选择框样式
// .date-row{
//   margin-top: 0px;
//   width: 0%;
//   height: 5px;
// }
.el-date-editor--monthrange.el-input__inner {
  width: 180px;
}
//tab样式
/deep/.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #ea6f5a;
    background-color: #FFF;
    border-right-color: #DCDFE6;
    border-left-color: #DCDFE6;
}
/deep/.el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #ea6f5a;
}
//论文表格样式
.paper-row{
  // margin-top: 30px;
  margin-top: 0px;
}
.box {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  top: -2px;
  line-height: 18px;
  width: calc(100% - 49px);
  background-color:transparent;
  border-bottom: 1px solid #d5d5d5;
  /*在父容器中输入display: flex就是启动了flex布局*/
}

//标题样式
.title-zone{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 0;
  margin-top: 15px;
}
.title-line{
  line-height: 22px;
}
.paper-title{
  color: #000;
  line-height: 22px;
  margin-bottom: 0;
  vertical-align: middle;
  cursor: pointer;
}

//收藏按钮样式
.title-right-zone{
  min-width: 100px;
}
.mark{
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  line-height: 18px;
}
.btn{
  height: 24px;
  padding: 0 10px;
  border: none;
  border-radius: 2px;
  background-color: #f0f1f4;
  color: #000e28;
  font-weight: 700;
  font-size: 14px;
}

// 作者样式
.person-zone{
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;  
}

.person{
  color: #067c08;
  cursor: pointer;
}

//摘要样式
.abstract-zone{
  display: flex;
  flex-wrap: wrap; 
}
.abstract{
  margin: 5px 0;
  color: #444;
  font-size: 13px;
  overflow: hidden;
  text-align: start;
}

//发表时间样式
.time-zone{
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.time{
  font-size: 13px;
  color: #444;
  margin: 5px 0 0;
}

//引用样式
.reference-zone{
  flex-wrap: wrap;
  font-size: 12px;
  margin-top: 5px;
  border-top: 1px dashed #dfdfdf;
  padding: 6px 0 3px;
}
.reference{
  color: #067c08;
  text-align: start;
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
