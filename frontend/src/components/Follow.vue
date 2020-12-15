<template>
  <div>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <h1 style="float: left; margin: -40px 0 0 40px; height: 120px">
              我关注的学者
            </h1>
            <div style="float: left; margin: -40px 0 0 40px; height: 120px">
              总数：{{ person_list.length }}
            </div>
          </div>
          <div
            class="text item"
            v-for="(item, index) in person_list"
            :key="index"
          >
            <!-- 头像 -->
            <div>
              <img
                src="../assets/coffeelogo.png"
                alt="头像"
                style="
                  width: 80px;
                  height: 80px;
                  margin: 15px 0 0 30px;
                  float: left;
                "
              />
            </div>

            <!-- 名字 -->
            <div style="width: 60%; line-height: 40px">
              <h3
                style="
                  line-height: 20px;
                  padding: 0px;
                  margin: 0px 0px 0px 40px;
                  text-align: left;
                  float: left;
                "
              >
                {{ item.person }}
              </h3>
              <br />
            </div>

            <!-- 操作 -->
            <div style="float: right; margin: -50px 30px 0px 0px">
              <el-button type="primary" @click="unfollow(item.personID)"
                >已关注</el-button
              >
            </div>

            <!-- 指数 -->
            <div
              style="
                line-height: 20px;
                text-align: left;
                float: left;
                margin: 0px 0px 0px 40px;
              "
            >
              <span>h-index：{{ item.hIndex }}</span>
              <el-divider direction="vertical"></el-divider>
              <span>论文数：{{ item.paperNum }}</span>
              <el-divider direction="vertical"></el-divider>
              <span>引用数：{{ item.reference }}</span>
            </div>

            <!-- 单位&身份 -->
            <div
              style="
                line-height: 20px;
                text-align: left;
                float: left;
                margin: 10px 0px 0px 40px;
                width: 70%;
              "
            >
              <span>身份：{{ item.occupation }}</span>
              <el-divider direction="vertical"></el-divider>
              <span
                >单位：
                <span v-for="com in item.company" :key="com">
                  {{ com }}
                </span>
              </span>
            </div>

            <!-- 信息 -->
            <div style="text-align: left; width: 70%; margin: 0px 0px 0px 60px">
              <div style="margin: 20px 0 0 90px; text-align: left">
                <div
                  v-for="i in item.fields"
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
                    {{ "\xa0" + i["t"] + "\xa0" }}
                  </router-link>
                </div>
              </div>
            </div>
            <div style="line-height: 120px"><br /></div>

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
      person_list: [
        // {
        //   person: "很长的名字Going Deeper with Convolutions",
        //   personID: "1",
        //   hIndex: "60",
        //   paperNum: "81",
        //   reference: "132732",
        //   occupation: "教授",
        //   company: "北京航空航天大学",
        //   fields: [
        //     "ai",
        //     "Computer Vision",
        //     "sxdsjniauhvnv",
        //     "scasds",
        //     "xxxxxxx",
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
        //   person: "何明凯",
        //   personID: "2",
        //   hIndex: "0",
        //   paperNum: "2",
        //   reference: "0",
        //   occupation: "教授",
        //   company: "北京航空航天大学",
        //   fields: ["ai", "Computer Vision"],
        // },
        // {
        //   person: "陶哲轩",
        //   personID: "3",
        //   hIndex: "81",
        //   paperNum: "402",
        //   reference: "59997",
        //   occupation: "教授",
        //   company: "北京航空航天大学",
        //   fields: ["ai", "Computer Vision"],
        // },
      ],
    };
  },
  created: function () {
    this.getMyFollowing();
  },
  methods: {
    getMyFollowing() {
      axios
        .get("http://106.13.138.133:18090/follow/my_following/")
        .then((res) => {
          console.log(res.data.data);
          var following_list = res.data.data;
          for (let i = 0; i < following_list.length; i++) {
            if (following_list[i]) {
              this.person_list.push({
                person: following_list[i].name,
                personID: following_list[i].aid,
                hIndex: following_list[i].hindex,
                paperNum: following_list[i].npubs,
                reference: following_list[i].ncitation,
                occupation: following_list[i].position,
                company: following_list[i].orgs,
                fields: following_list[i].tags,
              });
            }
          }
        });
    },
    unfollow(personId) {
      var data = Qs.stringify({
        person_id: personId,
      });
      console.log(data);
      axios
        .delete("http://106.13.138.133:18090/follow/remove_scholar/", { data })
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              showClose: true,
              message: "已取消关注",
              type: "success",
            });
            var index = this.person_list.findIndex(
              (person) => person.personID === personId
            );
            this.person_list.splice(index, 1);
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
  // width: 90%;
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

/* card边框样式 */
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}
</style>