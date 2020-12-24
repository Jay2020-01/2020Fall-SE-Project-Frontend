<template>
  <div class="total-container">
    <!-- 最外层 -->
    <el-row class="total-container" :gutter="20">
      <!-- 左边论文详情竖列 -->
      <el-col class="details-col" :span="16" :offset="1">
        <!-- 论文详情卡片 -->
        <el-card shadow="hover">
          <!-- 论文详情 -->
          <el-row class="info-container">
            <!-- 论文标题 -->
            <el-row class="title-row">
              <span> {{ paper_title }} </span>
            </el-row>
            <!-- 论文信息 -->
            <el-row class="info-row">
              <!-- 作者 -->
              <el-row class="author-row">
                <el-col class="author-col label" :span="2"> 作者： </el-col>
                <el-col class="author-col orange-color" :span="22">
                  <el-row>
                    <el-col
                      class="authors"
                      v-for="(author, index) in author_list"
                      :key="index"
                      style="margin-right: 10px"
                    >
                      <span @click="gotoProfile(author.id)">
                        {{ author.name }}
                      </span>
                      <span v-if="index < author_list.length - 1"> , </span>
                    </el-col>
                  </el-row>
                  <!-- Tianxiao Shen，Tao Lei，Regina Barzilay，Tommi Jaakkola -->
                </el-col>
              </el-row>
              <!-- 摘要 -->
              <el-row class="abstract-row">
                <el-col class="abstract-col label" :span="2"> 摘要： </el-col>
                <el-col
                  class="abstract-col"
                  :span="22"
                  style="text-align: justify; margin-right: 10px"
                >
                  {{ abstract }}
                </el-col>
              </el-row>
              <!-- 关键词 -->
              <el-row class="author-row">
                <el-col class="author-col label" :span="2"> 关键词： </el-col>
                <el-col class="author-col orange-color" :span="22">
                  <el-row>
                    <el-col
                      class="authors"
                      v-for="(keyword, index) in keyword_list"
                      :key="index"
                      style="margin-right: 10px"
                    >
                      <span>
                        {{ keyword }}
                      </span>
                      <span v-if="index < keyword_list.length - 1"> , </span>
                    </el-col>
                  </el-row>
                  <!-- Tianxiao Shen，Tao Lei，Regina Barzilay，Tommi Jaakkola -->
                </el-col>
              </el-row>
              <!-- 年份 -->
              <el-row class="author-row">
                <el-col class="author-col label" :span="2"> 年份： </el-col>
                <el-col class="author-col" :span="22">
                  {{ publication_year }}
                </el-col>
              </el-row>
              <!-- 被引量 -->
              <el-row class="author-row">
                <el-col class="author-col label" :span="2"> 被引量： </el-col>
                <el-col class="author-col orange-color" :span="22">
                  {{ citation }}
                </el-col>
              </el-row>
              <!-- doi -->
              <el-row class="author-row">
                <el-col class="author-col label" :span="2"> DOI： </el-col>
                <el-col class="author-col" :span="22">
                  {{ doi }}
                </el-col>
              </el-row>
              <!-- 链接 -->
              <el-row class="author-row" v-if="paper_url">
                <el-col class="author-col label" :span="2"> 链接： </el-col>
                <el-col class="author-col" :span="22">
                  <a :href="paper_url">{{ paper_url }}</a>
                </el-col>
              </el-row>
            </el-row>
            <!-- 论文按钮 -->
            <el-row class="button-row">
              <el-col v-if="!isFavored" class="button-col" :span="3">
                <el-button
                  icon="el-icon-star-off"
                  type="danger"
                  plain
                  round
                  @click="collectPaper(paper_id)"
                >
                  收藏
                </el-button>
              </el-col>
              <el-col v-else class="button-col" :span="4">
                <el-button
                  icon="el-icon-star-off"
                  type="danger"
                  plain
                  round
                  @click="uncollectPaper(paper_id)"
                >
                  取消收藏
                </el-button>
              </el-col>
              <el-col class="button-col" :span="3">
                <el-button icon="el-icon-star-off" type="danger" plain round>
                  引用
                </el-button>
              </el-col>
              <el-col class="button-col" :span="3">
                <el-button icon="el-icon-star-off" type="danger" plain round>
                  报错
                </el-button>
              </el-col>
              <el-col class="button-col" :span="3">
                <el-button icon="el-icon-star-off" type="danger" plain round>
                  分享
                </el-button>
              </el-col>
            </el-row>
          </el-row>
        </el-card>
      </el-col>
      <!-- 右边趋势图竖列 -->
      <el-col class="analyse-col" :span="6">
        <el-card shadow="hover">
          <ve-line
            :data="chartData"
            :settings="chartSettings"
            height="350px"
          ></ve-line>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import store from "../store/index.js";
export default {
  data() {
    this.chartSettings = {
      area: true,
    };
    return {
      paper_id: 0,
      paper_title: "Style Transfer from Non-Parallel Text by Cross-Alignment",
      author_list: [
        "Tianxiao Shen",
        "Tao Lei",
        "Regina Barzilay",
        "Tommi Jaakkola",
      ],
      abstract: "",
      // "This paper focuses on style transfer on the basis of \
      // non-parallel text. This is an instance of a broad family of \
      // problems including machine translation, decipherment, and \
      // sentiment modification. The key challenge is to separate the \
      // content from other aspects such as style. We assume a shared \
      // latent content distribution across different text corpora, and \
      // propose a method that leverages refined alignment of latent \
      // representations to perform style transfer. The transferred \
      // sentences from one style should match example sentences from \
      // the other style as a population. We demonstrate the \
      // effectiveness of this cross-alignment method on three tasks: \
      // sentiment modification, decipherment of word substitution \
      // ciphers, and recovery of word order.",
      keyword_list: ["fish", "penetration"],
      citation: 77,
      publication_year: "2017",
      doi: "10.1016/j.exppara.2006.12.013",
      paper_url: "",
      isFavored: false,
      years: ["2019", "2018", "2017", "2016", "2015"],
      row_datas: [],
      chartData: {
        columns: ["日期", "引用量"],
        rows: [],
      },
    };
  },
  created: function () {
    this.getPaPerDetais();
  },
  methods: {
    getPaPerDetais() {
      var url =
        "http://106.13.138.133:18090/search/id/" + this.$route.params.paper_id;
      console.log(url);
      axios.get(url).then(async (res) => {
        console.log(res.data.data);
        this.paper_id = res.data.data.pid;
        console.log(res.data.data.title);
        this.paper_title = res.data.data.title;
        this.author_list = res.data.data.authors;
        this.abstract = res.data.data.abstract;
        this.keyword_list = res.data.data.keywords;
        this.citation = res.data.data.n_citation;
        this.publication_year = res.data.data.year;
        this.doi = res.data.data.doi;
        this.paper_url = res.data.data.url[0];

        this.row_datas.push({ 日期: "2020", 引用量: this.citation });
        let n_citation = this.citation;
        for (let i = 0; i < this.years.length; i++) {
          let max = n_citation;
          let min = n_citation - 10 > 0 ? n_citation - 10 : 0;
          n_citation = parseInt(Math.random() * (max - min + 1) + min, 10);
          this.row_datas.push({ 日期: this.years[i], 引用量: n_citation });
        }

        for (let i = 0; i <= this.years.length; i++) {
          this.chartData.rows.push(this.row_datas[this.years.length - i])
        }

        console.log(this.chartData.rows)
        this.$forceUpdate();

        let resp = await this.getCollectStatus(this.paper_id);
        this.isFavored = resp.data.data;
        this.$forceUpdate();
        console.log(this.isFavored);
      });
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
            this.isFavored = true;
            this.$forceUpdate();
          } else {
            this.$message({
              showClose: true,
              message: res.data.message,
              type: "warning",
            });
          }
        });
    },
    uncollectPaper(paperId) {
      var data = Qs.stringify({
        paper_id: paperId,
      });
      axios
        .post("http://106.13.138.133:18090/favor/remove_paper/", data)
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              showClose: true,
              message: "已取消收藏",
              type: "success",
            });
            this.isFavored = false;
            this.$forceUpdate();
          } else {
            this.$message({
              showClose: true,
              message: res.data.message,
              type: "warning",
            });
          }
        });
    },
    getCollectStatus(paper_id) {
      return new Promise((resolve, reject) => {
        var params = {
          paper_id: paper_id,
        };
        console.log(paper_id);
        var url = "http://106.13.138.133:18090/favor/isFavor";
        axios
          .get(url, { params })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    gotoProfile(aid) {
      this.$router.push({
        path: "/profile",
        query: {
          aid: aid,
        },
      });
    },
  },
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
  // margin-left: 100px;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  color: #ea6f5a;
  line-height: 32px;
  text-align: left;
}

.author-row {
  display: flex;
  font-size: 17px;
  // height: 30px;
  line-height: 20px;
  text-align: left;
  margin-bottom: 5px;
}

.author-col {
  display: flex;
  line-height: 30px;
  height: 100%;
}

.authors {
  line-height: 30px;
  width: auto;
}

.orange-color {
  color: #ea6f5a;
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

/* card边框样式 */
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}
</style>