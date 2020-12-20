<template>
    <div>
      <el-row>
      <el-col :span="22" :offset="1">
        <el-card class="box-card" shadow="hover">
            <chat-window :currentUserId="currentUserId" :rooms="rooms" :messages="messages" @send-message="sendMessage" />
        </el-card>
      </el-col>
    </el-row>
    </div>
</template>
<script>
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'
import axios from "axios";
import Qs from "qs";
export default {
  components: {
      ChatWindow
    },
    data () {
      return {
    rooms:[
    {
      roomId: 1,
      roomName: 'Json',
      avatar: 'assets/imgs/people.png',
    }
    ],
    messages: [
      {
        _id: 7890,
        content: 'message 1',
        sender_id: 1234,
        username: 'John Doe',
      },
      {
        _id: 7890,
        content: 'message 1',
        sender_id: 1234,
        username: 'John Doe',
      }
    ],
      currentUserId: 1234,
        
      }
    },
    created: function () {
      this.getTargetUserList();
    },
    methods: {
      sendMessage({ roomId, content, file, replyMessage}) {
        console.log("adsfasdfasdfasdfasdfasdfasdfasdf");
      },
      getTargetUserList() {
        axios.get("http://localhost:8000/ajax/get_person_list/").then((res) => {
          this.person_list = res.data.person_list;
        });
      },
      getMessageContent() {
        axios.get("http://localhost:8000/ajax/get_message_content/").then((res) => {
          
        })
      },
      messageActionHandler({ roomId, action, message }) {
  console.log("&&&&&&&&&&&");
},
sendMessage() {
  alert("aaaa");
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
.name{
  float: left;
  margin:10px 0 0 30px;
  width:80px;height:80px;
}

/* card边框样式 */
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}
</style>