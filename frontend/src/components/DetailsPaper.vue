<template>
  <div class="total-container">
    <!-- 最外层 -->
    <el-row class="total-container" gutter="20">
      <!-- 左边论文详情竖列 -->
      <el-col class="details-col" span="16" offset="1">
        <!-- 论文详情卡片 -->
        <el-card shadow="hover">
          <!-- 论文详情 -->
          <el-row class="info-container">
          <!-- 论文标题 -->
          <el-row class="title-row">
            <span>Style Transfer from Non-Parallel Text by Cross-Alignment</span>
          </el-row>
          <!-- 论文信息 -->
          <el-row class="info-row">
            <!-- 作者 -->
            <el-row class="author-row">
              <el-col class="author-col label" span="2">
                作者：
              </el-col>
              <el-col class="author-col orange-color" span="22">
                Tianxiao Shen，Tao Lei，Regina Barzilay，Tommi Jaakkola
              </el-col>
            </el-row>
            <!-- 摘要 -->
            <el-row class="abstract-row">
              <el-col class="abstract-col label" span="2">
                摘要：
              </el-col>
              <el-col class="abstract-col" span="22">
                This paper focuses on style transfer on the basis of non-parallel text. This is an instance of a broad family of problems including machine translation, decipherment, and sentiment modification. The key challenge is to separate the content from other aspects such as style. We assume a shared latent content distribution across different text corpora, and propose a method that leverages refined alignment of latent representations to perform style transfer. The transferred sentences from one style should match example sentences from the other style as a population. We demonstrate the effectiveness of this cross-alignment method on three tasks: sentiment modification, decipherment of word substitution ciphers, and recovery of word order.
              </el-col>
            </el-row>
            <!-- 被引量 -->
            <el-row class="author-row">
              <el-col class="author-col label" span="2">
                被引量：
              </el-col>
              <el-col class="author-col orange-color" span="22">
                77
              </el-col>
            </el-row>
            <!-- 年份 -->
            <el-row class="author-row">
              <el-col class="author-col label" span="2">
                年份：
              </el-col>
              <el-col class="author-col" span="22">
                2017
              </el-col>
            </el-row>
          </el-row>
          <!-- 论文按钮 -->
          <el-row class="button-row">
            <el-col class="button-col" span="3">
              <el-button icon="el-icon-star-off" type="danger" plain round>
                收藏
              </el-button>
            </el-col>
            <el-col class="button-col" span="3">
              <el-button icon="el-icon-star-off" type="danger" plain round>
                引用
              </el-button>
            </el-col>
            <el-col class="button-col" span="3">
              <el-button icon="el-icon-star-off" type="danger" plain round>
                报错
              </el-button>
            </el-col>
            <el-col class="button-col" span="3">
              <el-button icon="el-icon-star-off" type="danger" plain round>
                分享
              </el-button>
            </el-col>
          </el-row>
        </el-row>
        </el-card>
      </el-col>
      <!-- 右边趋势图竖列 -->
      <el-col class="analyse-col" span="6">
        <el-card shadow="hover">
          <ve-line :data="chartData" :settings="chartSettings" height="350px"></ve-line>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
      this.chartSettings = {
        area: true
      }
      return {
        chartData: {
          columns: ['日期', '引用量'],
          rows: [
            { '日期': '2015', '引用量': 0},
            { '日期': '2016', '引用量': 0},
            { '日期': '2017', '引用量': 10},
            { '日期': '2018', '引用量': 30},
            { '日期': '2019', '引用量': 40},
            { '日期': '2020', '引用量': 55}
          ]
        }
      }
    },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
.total-container {
  height: 100%;
}
.details-col {
  // border: 1px red solid;
  height: 100%;
}
.analyse-col {
  // border: 1px blue solid;
  height: 100%;
}

// 详细信息样式
.info-row {
  margin-top: 15px;
}

.title-row {
  display: flex;
  align-items: center;
  font-size: 28px;
  height: 40px;
  font-weight: 600;
  color:  #ea6f5a;
}

.author-row {
  display: flex;
  align-items: center;
  font-size: 17px;
  height: 30px;
}

.author-col {
  display: flex;
  align-items: center;
  height: 100%;
}

.orange-color {
  color:  #ea6f5a;
}

.abstract-row {
  display: flex;
  font-size: 17px;
}

.abstract-col {
  display: flex;
  height: 100%;
  line-height: 30px;
  text-align: left;
}

.label {
  color: #999999;
}

// 按钮样式
.button-row {
  margin-top: 25px;
  display: flex;
  align-items: center;
  font-size: 17px;
  height: 50px;
}

.button-col {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>