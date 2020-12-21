<template>
  <div>
    <el-row class="paper-row" :gutter="20">
      <!-- 日期选择器区域 -->
      <el-col class="date-col" :span="4" :offset="0">
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
            size="mini"
            value-format="yyyy"
          >
          </el-date-picker>
        </div>
      </el-col>

      <!-- 论文表格区域 -->
      <el-col class="paper-col" :span="17" :offset="0">
        <el-tabs type="border-card">
          <!-- 按时间排序 -->
          <el-tab-pane label="最新">
            <div class="box" v-for="item in paperList" :key="item.paperId">
              <!-- 标题区域 -->
              <div class="title-zone">
                <!-- 论文名称 -->
                <div class="title-line">
                  <div class="paper-title" @click="paper(item.pid)">
                    <KeywordsText :keywords="keyword" :text="item.title"></KeywordsText>
                  </div>


                </div>
                <!-- 右侧收藏按钮 -->
                <div class="title-right-zone">
                  <div class="mark">
                    <div>
                      <el-button
                        type="info"
                        class="btn"
                        @click="collectPaper(item.pid)"
                      >
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
                <span class="person" v-if="item.authors.length >= 5">
                  {{ item.authors[0].name + ", " +  item.authors[1].name + ", " + item.authors[2].name+ ", " + item.authors[3].name+ ", " + item.authors[4].name +", et al." }}
                </span>
                <span class="person" v-else-if="item.authors.length >= 3">
                  {{ item.authors[0].name + ", " +  item.authors[1].name + ", " + item.authors[2].name +", et al." }}
                </span>
                <span class="person" v-else>
                  {{ "No author" +", et al." }}
                </span>
              </div>
              <!-- 发表时间区域 -->
              <div class="time-zone">
                <div class="time">
                  <span>发表时间：</span>
                  {{ item.year }}
                </div>
              </div>
              <!-- 引用区域 -->
              <div class="reference-zone">
                <div class="reference">
                  <span>被引用:</span>
                  <strong>{{ item.n_citation }}</strong>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <!-- 按综合排序 -->
          <el-tab-pane label="综合">
            <div class="box" v-for="item in paperList" :key="item.paperId">
              <div class="title-zone">
                <div class="title-line">
                  <span class="paper-title">
                    {{ item.title }}
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

              <!-- 作者区域 -->
              <div class="person-zone">
                <span class="person" v-if="item.authors.length >= 5">
                  {{ item.authors[0].name + ", " +  item.authors[1].name + ", " + item.authors[2].name+ ", " + item.authors[3].name+ ", " + item.authors[4].name +", et al." }}
                </span>
                <span class="person" v-else-if="item.authors.length >= 3">
                  {{ item.authors[0].name + ", " +  item.authors[1].name + ", " + item.authors[2].name +", et al." }}
                </span>
                <span class="person" v-else>
                  {{ "No author" +", et al." }}
                </span>
              </div>

              <div class="time-zone">
                <div class="time">
                  <span>发表时间：</span>
                  {{ item.year }}
                </div>
              </div>

              <div class="reference-zone">
                <div class="reference">
                  <span>被引用:</span>
                  <strong>{{ item.n_citation }}</strong>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <!-- 按引用数排序 -->
          <el-tab-pane label="引用数">
            <div class="box" v-for="item in paperList" :key="item.paperId">
              <div class="title-zone">
                <div class="title-line">
                  <span class="paper-title">
                    {{ item.title }}
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
                <span class="person" v-if="item.authors.length >= 3">
                  {{ item.authors[0].name + item.authors[1].name + item.authors[2].name +", et al." }}
                </span>
              </div>

              <div class="time-zone">
                <div class="time">
                  <span>发表时间：</span>
                  {{ item.time }}
                </div>
              </div>

              <div class="reference-zone">
                <div class="reference">
                  <span>被引用:</span>
                  <strong>{{ item.reference }}</strong>
                </div>
              </div>
            </div>
          </el-tab-pane>


<!--          分页-->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page_num"
            :page-sizes="[5, 10,20,30]"
            :page-size="page_size"

            :pager-count="11"
            layout="prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </el-tabs>
      </el-col>

      <!-- 备用栏 -->
      <!-- <el-col class="card-col" :span="6" :offset="0">
        <el-card class="box-card" shadow="hover">
          <div slot="header">
            <span>备用栏</span>
          </div>
        </el-card>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
import keyword from "@/components/keyword";
import Qs from "qs";
import axios from "axios";
import store from "../store/index.js";
import KeywordsText from "@/components/keyword";
export default {
  components: {KeywordsText},
  data() {
    return {
      start_year: 1900,
      end_year: 2029,
      page_num: 0,
      page_size: 10,
      keyword:"",
      activeDate: "",
      paperList: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "本月",
            onClick(picker) {
              picker.$emit("pick", [new Date(), new Date()]);
            },
          },
          {
            text: "本年至今",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近半年",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三年",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 36);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近五年",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 60);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近十年",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 120);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
  created: function () {

    this.getPaperList();

  },
  watch:{
    activeDate:function (){
      // console.log(this.activeDate);数组
      this.start_year = parseInt(this.activeDate[0]);
      this.end_year = parseInt(this.activeDate[1])
      this.getPaperList();
    }
  },

  methods: {
//監聽pagesize改變的事件
    handleSizeChange(newSize) {
      this.page_size = newSize;
      this.getPaperList();
    },
    // 監聽頁碼值改變的事件
    handleCurrentChange(newPage) {
      this.page_num = newPage;
      this.getPaperList();
    },
    getPaperList() {
      this.keyword = this.$route.query.key_word;
      var data = Qs.stringify({
        start_year: 1800,
        end_year: 2100,
        key_word: this.$route.query.key_word,
      });
      // console.log("I am here here here");
      // console.log("http://106.13.138.133:7001/search/keyword/" + this.$route.query.key_word + '/' + this.start_year + '/' + this.end_year + '/' + this.page_num + '/' + this.page_size);
      var url =
        "http://106.13.138.133:18090/search/keyword/" +
        this.$route.query.key_word +
        "/" +
        this.start_year +
        "/" +
        this.end_year +
        "/" +
        this.page_num +
        "/" +
        this.page_size;
      axios.get(url).then((res) => {
        console.log("get data from url");
        console.log(res.data.data.content);
        this.paperList = res.data.data.content;
      });
      // console.log("post 1 finish");
    },
    paper(pid) {
      this.$router.push("/details_paper/" + pid);
    },
    collectPaper(paperId) {
      if (!store.getters.isLoggedIn) {
        this.$message({
          showClose: true,
          message: "请先登录",
          type: "warning",
        });
        return;
      }
      var data = Qs.stringify({
        paper_id: paperId,
      });
      console.log(data);
      axios
        .post("http://106.13.138.133:18090/favor/collect_paper/", data)
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              showClose: true,
              message: "已收藏",
              type: "success",
            });
          } else {
            this.$message({
              showClose: true,
              message: res.data.message,
              type: "warning",
            });
          }
        });
    },
  },
};
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
/deep/ .el-tabs__nav {
  left: 0%;
}
/deep/.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #ea6f5a;
  background-color: #fff;
  border-right-color: #dcdfe6;
  border-left-color: #dcdfe6;
}
/deep/.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #ea6f5a;
}
//论文表格样式
.paper-row {
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
  background-color: transparent;
  border-bottom: 1px solid #d5d5d5;
  /*在父容器中输入display: flex就是启动了flex布局*/
}

//标题样式
.title-zone {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 0;
  margin-top: 15px;
}
.title-line {
  line-height: 22px;
  text-align: start;
}
.paper-title {
  color: #000;
  line-height: 22px;
  margin-bottom: 0;
  vertical-align: middle;
  cursor: pointer;
}

//收藏按钮样式
.title-right-zone {
  min-width: 100px;
}
.mark {
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  line-height: 18px;
}
.btn {
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
.person-zone {
  font-size: 16px;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
}

.person {
  font-size: 14px;
  color: #067c08;
  cursor: pointer;
}

//摘要样式
.abstract-zone {
  display: flex;
  flex-wrap: wrap;
}
.abstract {
  margin: 5px 0;
  color: #444;
  font-size: 13px;
  overflow: hidden;
  text-align: start;
}

//发表时间样式
.time-zone {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.time {
  font-size: 13px;
  color: #444;
  margin: 5px 0 0;
}

//引用样式
.reference-zone {
  flex-wrap: wrap;
  font-size: 12px;
  margin-top: 5px;
  border-top: 1px dashed #dfdfdf;
  padding: 6px 0 3px;
}
.reference {
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
  // width: 100%;
  height: 300px;
}

.block {
  width: 100%;
  height: 300px;
}
</style>
