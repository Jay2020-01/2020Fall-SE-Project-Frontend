<template>
  <div>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <h1 style="float: left; margin: -40px 0 0 40px; height: 120px">
              我收藏的论文
            </h1>
            <div style="float: left; margin: -40px 0 0 40px; height: 120px">
              总数：{{ paper_list.length }}
            </div>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <div
            class="text item"
            v-for="(item, index) in paper_list"
            :key="index"
          >
            <!-- 题目 -->
            <div style="width: 80%">
              <h3
                style="
                  line-height: 20px;
                  padding: 0px;
                  margin: 0px 0px 0px 40px;
                  text-align: left;
                "
              >
                {{ item.title }}
              </h3>
            </div>
            <!-- 操作 -->
            <div style="float: right; margin: -50px 30px 0px 0px">
              <el-button type="primary" @click="uncollect(item.paper_id)"
                >已收藏</el-button
              >
            </div>
            <!-- 作者 -->
            <div style="text-align: left; width: 80%">
              <div style="margin: 20px 0 0 40px; text-align: left">
                <div
                  v-for="i in item.author"
                  :key="i"
                  style="
                    margin: 10px 10px 0px 0px;
                    float: left;
                    background-color: #f2f6fc;
                    line-height: 20px;
                    border-radius: 4px;
                    border: 2px solid #ebeef5;
                  "
                >
                  <router-link
                    :to="{ path: '/person' }"
                    style="text-decoration: none; color: #2f4f2f"
                  >
                    {{ "\xa0" + i["name"] + "\xa0" }}
                  </router-link>
                </div>
              </div>
            </div>
            <!-- 期刊 -->
            <div
              style="
                line-height: 20px;
                text-align: left;
                width: 80%;
                float: left;
                margin: 0px 0px 0px 40px;
              "
            >
              <br />
              {{ item.periodical }}
            </div>
            <!-- 被引次数 -->
            <!-- <br> -->
            <div style="line-height: 100px"><br /></div>
            <div
              style="
                float: right;
                line-height: 20px;
                padding: 0px;
                text-align: left;
                margin: 0px 30px 0px 0px;
              "
            >
              <span>被引次数：{{ item.reference }}</span>
            </div>
            <el-divider></el-divider>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
export default {
  data() {
    return {
      paper_list: [
        // {
        //   title: "Going Deeper with Convolutions",
        //   paper_id:"1",
        //   reference: "132732",
        //   periodical:
        //     "IEEE Trans. Pattern Anal. Mach. Intell., no. 6 (2017): 1137-1149",
        //   author: [
        //     "小明",
        //     "Tom",
        //     "xxxxxxx",
        //     "sxdsjniauhvnv",
        //     "scasds",
        //     "samxihvrwcccvvfd",
        //     "zhoujielun",
        //     "小红",
        //     "sheqmocubeuxvzksswd",
        //     "12345",
        //     "sohe",
        //     "djivr",
        //     "dhslaciugy",
        //     "ahahaha",
        //   ],
        // },
        // {
        //   title:
        //     "Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks",
        //   paper_id:"2",
        //   reference: "0",
        //   periodical:
        //     "Readings in computer vision: issues, problems, principles, and paradigms, no. 6 (1986): 679-698",
        //   author: ["小红", "sheqmocubeuxvzksswd"],
        // },
        // {
        //   title: "A Computational Approach to Edge Detection",
        //   paper_id:"3",
        //   reference: "59997",
        //   periodical: "computer vision and pattern recognition, (2015)",
        //   author: ["samxihvrwcccvvfd", "zhoujielun"],
        // },
      ],
      num: 0,
    };
  },
  created: function () {
    this.getMyCollection();
  },
  methods: {
    getMyCollection() {
      axios
        .get("http://106.13.138.133:18090/favor/my_collection/")
        .then((res) => {
          var collection_list = res.data.data;
          console.log(collection_list);
          console.log(collection_list.length);
          for (let i = 0; i < collection_list.length; i++) {
            if (collection_list[i]) {
              this.paper_list.push({
                title: collection_list[i].title,
                paper_id: collection_list[i].pid,
                reference: collection_list[i].ncitation,
                periodical: collection_list[i].issn,
                author: collection_list[i].authors,
              });
            }
          }
        });
    },
    uncollect(paperId) {
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
            var index = this.paper_list.findIndex(
              (paper) => paper.paperId === paperId
            );
            this.paper_list.splice(index, 1);
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
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  height: 80px;
}
.box-card {
  // width: 70%;
  // margin: 0 0 0 20%;
}
.tableTitle {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 1px;
  background-color: #d4d4d4;
  text-align: center;
  font-size: 16px;
  color: rgba(101, 101, 101, 1);
}
.name {
  float: left;
  margin: 10px 0 0 30px;
  width: 80px;
  height: 80px;
}
.link-item-hover {
  background-color: #f5f7fa;
}
.link-item-active {
  // 链接菜单激活样式
  color: #fff;
  background-color: #b3cae4;
}

/* card边框样式 */
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}
</style>