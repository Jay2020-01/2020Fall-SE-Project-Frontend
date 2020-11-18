<template>
  <div>
    <!-- 搜素筛选器区域 -->
    <div class="filter-zone">
      <div class="filter-row">
        <span class="filter-title">
          <span>H指数</span>
          ：
        </span>
        <ul>
          <span class="filter-item">
            >=60
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            50-59
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            40-49
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            30-39
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            20-29
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            10-19
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            0-10
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
        </ul>
      </div>

      <div class="filter-row">
        <span class="filter-title">
          <span>性别</span>
          :
        </span>
        <ul>
          <span class="filter-item">
            男
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            女
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
        </ul>
      </div>

      <div class="filter-row">
        <span class="filter-title">
          <span>地区</span>
          :
        </span>
        <ul>
          <span class="filter-item">
            China
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            USA
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            Russia
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            UK
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            Japan
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            Other
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
        </ul>
      </div>

      <div class="filter-row">
        <span class="filter-title">
          <span>语言</span>
          :
        </span>
        <ul>
          <span class="filter-item">
            Chinese
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            English
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            Japanese
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
          <span class="filter-item">
            Other
            <span style="padding: 0px 2px;">
              (<span class="filter-count">?</span>)
            </span>
          </span>
        </ul>
      </div>            
    </div>

    <el-row class="person-row">
      <!--学者表格区域-->
      <el-col class="person-col" span="17" offset="1">
        <el-tabs type="border-card">
          <!-- 按h指数排序 -->
          <el-tab-pane label="h指数">
            <div class="box" v-for="(item) in personList" :key="item.personId">
              <!-- 头像区域 -->
              <div class="person-left-zone">
                <div class="imgBox">
                  <div class="person-img">
                    <img src="../assets/default.jpg">
                  </div>
                </div>
              </div>
              
              <!-- 学者主要信息区域 -->
              <div class="person-right-zone">
                <div class="name-zone">
                  <!-- 学者名区域 -->
			            <div class="name-line">
                    <span class="person-name">
                      {{item.person}}
                    </span>
                  </div>
                  <!-- 右侧关注按钮 -->
                  <div class="name-right-zone">
                    <div class="mark">
                      <div>
                        <el-button type="info" class="btn">
                          <div>
                            <span>关注</span>
                          </div>
                        </el-button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 学者各项信息区域 -->
                <div class="info-zone">
                  <div class="info-row">
                    <span class="info-item">
                      <span>
                        <em>h</em>
                        -index
                      </span>
                      <span>:</span>
                      <span class="info-count">
                        {{item.hIndex}}
                      </span>
                    </span>
                    <span class="info-item">
                      <span>
                        论文数
                      </span>
                      <span>:</span>
                      <span class="info-count">
                        {{item.paperNum}}
                      </span>
                    </span>
                    <span class="info-item">
                      <span>
                        引用数
                      </span>
                      <span>:</span>
                      <span class="info-count">
                        {{item.reference}}
                      </span>
                    </span>
                  </div>
                </div>

                <!-- 学者机构区域 -->
                <div class="department-zone">
                  <span class="department">
                    机构：{{item.department}}
                  </span>
                </div>

                <!-- 学者标签区域 -->
                <div class="tag-zone">
                  <div class="tags">
                    <span>
                      <a class="tag">tag1</a>
                    </span>
                    <span>
                      <a class="tag">tag2</a>
                    </span>
                    <span>
                      <a class="tag">tag3</a>
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </el-tab-pane>
          <!-- 按论文数排序 -->
          <el-tab-pane label="论文数">
            <div class="box" v-for="(item) in personList" :key="item.personId">
              <div class="person-left-zone">
                <div class="imgBox">
                  <div class="person-img">
                    <img src="../assets/default.jpg">
                  </div>
                </div>
              </div>

              <div class="person-right-zone">
                <div class="name-zone">

			            <div class="name-line">
                    <span class="person-name">
                      {{item.person}}
                    </span>
                  </div>

                  <div class="name-right-zone">
                    <div class="mark">
                      <div>
                        <el-button type="info" class="btn">
                          <div>
                            <span>关注</span>
                          </div>
                        </el-button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="info-zone">
                  <div class="info-row">
                    <span class="info-item">
                      <span>
                        <em>h</em>
                        -index
                      </span>
                      <span>:</span>
                      <span class="info-count">
                        {{item.hIndex}}
                      </span>
                    </span>
                    <span class="info-item">
                      <span>
                        论文数
                      </span>
                      <span>:</span>
                      <span class="info-count">
                        {{item.paperNum}}
                      </span>
                    </span>
                    <span class="info-item">
                      <span>
                        引用数
                      </span>
                      <span>:</span>
                      <span class="info-count">
                        {{item.reference}}
                      </span>
                    </span>
                  </div>
                </div>

                <div class="department-zone">
                  <span class="department">
                    机构：{{item.department}}
                  </span>
                </div>

                <div class="tag-zone">
                  <div class="tags">
                    <span>
                      <a class="tag">tag1</a>
                    </span>
                    <span>
                      <a class="tag">tag2</a>
                    </span>
                    <span>
                      <a class="tag">tag3</a>
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </el-tab-pane>
          <!-- 按引用数排序 -->
          <el-tab-pane label="引用数">
            <div class="box" v-for="(item) in personList" :key="item.personId">
              <div class="person-left-zone">
                <div class="imgBox">
                  <div class="person-img">
                    <img src="../assets/default.jpg">
                  </div>
                </div>
              </div>

              <div class="person-right-zone">
                <div class="name-zone">

			            <div class="name-line">
                    <span class="person-name">
                      {{item.person}}
                    </span>
                  </div>

                  <div class="name-right-zone">
                    <div class="mark">
                      <div>
                        <el-button type="info" class="btn">
                          <div>
                            <span>关注</span>
                          </div>
                        </el-button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="info-zone">
                  <div class="info-row">
                    <span class="info-item">
                      <span>
                        <em>h</em>
                        -index
                      </span>
                      <span>:</span>
                      <span class="info-count">
                        {{item.hIndex}}
                      </span>
                    </span>
                    <span class="info-item">
                      <span>
                        论文数
                      </span>
                      <span>:</span>
                      <span class="info-count">
                        {{item.paperNum}}
                      </span>
                    </span>
                    <span class="info-item">
                      <span>
                        引用数
                      </span>
                      <span>:</span>
                      <span class="info-count">
                        {{item.reference}}
                      </span>
                    </span>
                  </div>
                </div>

                <div class="department-zone">
                  <span class="department">
                    机构：{{item.department}}
                  </span>
                </div>

                <div class="tag-zone">
                  <div class="tags">
                    <span>
                      <a class="tag">tag1</a>
                    </span>
                    <span>
                      <a class="tag">tag2</a>
                    </span>
                    <span>
                      <a class="tag">tag3</a>
                    </span>
                  </div>
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
      personList:[{
        personId:'1',person:'何恺明',hIndex:'60',paperNum:'81',reference:'132732',department:'Facebook AI Research'
        },{
        personId:'2',person:'何明凯',hIndex:'0',paperNum:'2',reference:'0',department:'Guiyang Sinochem Kailin Chemical Fertilizer Co.,Ltd,Guiyang,Guizhou China'
        },{
        personId:'3',person:'陶哲轩',hIndex:'81',paperNum:'402',reference:'59997',department:'Department of Mathematics,University of California,Los Angeles'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
//搜索筛选器样式
.filter-zone{
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  border: 1px solid #e8e8e8;
  border-radius: 0;
  padding: 2px 10px;  
  box-shadow: none;
  margin-bottom: 11px;
}

.filter-row{
  display: flex;
  flex-direction: row;
  flex: 2 1;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  flex-flow: row wrap;
  margin-bottom: 0;
  padding-left: 0;
}

.filter-title{
  display: flex;
  flex: 0 1 72px;
  color: #000;
  font-size: 12px;
}

.filter-item{
  margin: 0 2px;
  cursor: pointer;
  padding: 0 4px;
  font-size: 12px;
  background-color: transparent;
  border-color: transparent;
}

.filter-count{
  font-weight: 600;
  color: #3c80bc;
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
.box{
  // display: flex;
  // position: relative;
  // width: 100%;
  // color: #181818;
  // border-bottom: 1px solid #d5d5d5;
  // margin-bottom: 10px;
  // padding: 7px 0;
  // font-size: 12px;
  // margin-right: 15px;
  display: flex;
  flex-grow: 1;
  position: relative;
  top: -2px;
  line-height: 18px;
  width: calc(100% - 49px);
  background-color:transparent;
  border-bottom: 1px solid #d5d5d5;
  /*在父容器中输入display: flex就是启动了flex布局*/
}

//学者头像样式
.person-left-zone{
  margin-right: 14px;
  width: 90px;
  min-width: 90px;
  margin-top: 10px;
}

.imgBox{
  margin-right: 14px;
  width: 90px;
  min-width: 90px;
}

.person-img{
  max-height: 100px;
  overflow: hidden;
  min-height: 90px;
  display: block;
}

//学者信息样式
.person-right-zone{
  text-align: left;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  top: -3px;
  min-height: 134px;
}

//学者名样式
.name-zone{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 0;
  margin-top: 15px;
}
.name-line{
  line-height: 22px;
}
.person-name{
  margin-right: 5px;
  margin-bottom: 5px;
  overflow: hidden;
  color: #181818;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
}

//关注按钮样式
.name-right-zone{
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

//学者各项信息展示样式
.info-row{
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
}

.info-item{
  color: #181818;
  display: flex;
  align-items: center;
}

.info-count{
  color: #0095ff;
  font-weight: 700;
  margin-left: 2px;
}

.info-item::after{
  margin: 0 15px;
  width: 0;
  height: 11px;
  border-right: 1px solid #181818;
  display: inline-block;
  content: "";
  position: relative; 
}

//机构样式
.department-zone{
  font-size: 13px;
}

.department{
  margin: 2px 0;
}

//标签样式
.tags{
  max-height: 24px;
  overflow: hidden;
  margin: 8px 0 6px;
}
.tag{
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  margin: 0 5px 4px 0;
  padding: 1px 5px;
  background: #f6f7f9;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  color: #555;
  display: inline-block;
}
.tag:hover{
  border-color:#ea6f5a;
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
</style>
