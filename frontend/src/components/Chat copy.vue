<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h1 style="float:left;margin:-40px 0 0 40px;height:120px;">我的私信</h1>
                <div style="float:left;margin:-40px 0 0 40px;height:120px;" >总数：{{person_list.length}}</div>
            </div>
            <div class="text item" v-for="(item,index) in person_list"  :key="index" >
              <!-- 头像 -->
              <div >
                <img src="../assets/coffeelogo.png" alt="头像" style="width:80px;height:80px;margin:15px 0 0 30px;float:left;"/>
              </div>

              <!-- 名字 -->
              <div style="width:60%;line-height:40px;">
                <h3 style="line-height:20px;padding:0px;margin:0px 0px 0px 40px;text-align:left;float:left">{{item.person}}</h3>
              <br>
              </div>

              <!-- 操作 -->
              <div style="float:right;margin:-50px 30px 0px 0px;"> <el-button type="primary">回复</el-button></div>

              <!-- 单位&身份 -->
              <div style="line-height:20px;text-align:left;float:left;margin:10px 0px 0px 40px;width:70%;">
                <span>身份：{{item.occupation}}</span>
                <el-divider direction="vertical"></el-divider>
                <span>单位：{{item.company}}</span>
              </div>

              <div style="line-height:120px;"><br></div>
              <el-divider></el-divider>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data () {
      return {
          person_list:[
            {
                person:'很长的名字Going Deeper with Convolutions',hIndex:'60',paperNum:'81',reference:'132732',occupation:'教授',company:'北京航空航天大学',fields:['ai','Computer Vision','xxxxxxx','sxdsjniauhvnv','scasds','xxxxxxx','sxdsjniauhvnv','scasds','samxihvrwcccvvfd','zhoujielun','小红','sheqmocubeuxvzksswd','12345','sohe','djivr','dhslaciugy','ahahaha']
            },
            {
                person:'何明凯',hIndex:'0',paperNum:'2',reference:'0',occupation:'教授',company:'北京航空航天大学',fields:['ai','Computer Vision']
            },
            {
                person:'陶哲轩',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学',fields:['ai','Computer Vision']
            }
          ]
      }
    },
    created: function () {
      this.getTargetUserList();
    },
    methods: {
      getTargetUserList() {
        axios.get("http://localhost:8000/ajax/get_person_list/").then((res) => {
          this.person_list = res.data.person_list;
        });
      },
      getMessageContent() {
        axios.get("http://localhost:8000/ajax/get_message_content/").then((res) => {
          // 未完成
        })
      }
  }
}
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
    clear: both
  }
  .clearfix {
    height:80px
  }
  .box-card {
    width: 70%;
    margin: 0 0 0 20%;
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
.name{
  float: left;
  margin:10px 0 0 30px;
  width:80px;height:80px;
}


</style>