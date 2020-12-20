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

export default {
  components: {
      ChatWindow
    },
    data () {
      return {
         rooms:[
  {
    roomId: 1,
    roomName: 'Room 1',
    avatar: 'assets/imgs/people.png',
    unreadCount: 4,
    lastMessage: {
      content: 'Last message received',
      sender_id: 1234,
      username: 'John Doe',
      timestamp: '10:20',
      date: 123242424,
      saved: true,
      distributed: false,
      seen: false,
      new: true
    },
    users: [
      {
        _id: 1234,
        username: 'John Doe',
        avatar: 'assets/imgs/doe.png',
        status: {
          state: 'online',
          last_changed: 'today, 14:30'
        }
      },
      {
        _id: 4321,
        username: 'John Snow',
        avatar: 'assets/imgs/snow.png',
        status: {
          state: 'offline',
          last_changed: '14 July, 20:00'
        }
      }
    ],
    typingUsers: [ 4321 ]
  }
],
        messages:[
  {
    _id: 7890,
    content: 'message 1',
    sender_id: 1234,
    username: 'John Doe',
    date: '13 November',
    timestamp: '10:20',
    system: false,
    saved: true,
    distributed: true,
    seen: true,
    disable_actions: false,
    disable_reactions: false,
    file: {
      name: 'My File',
      size: 67351,
      type: 'png',
      audio: true,
      duration: 14.4,
      url: 'https://firebasestorage.googleapis.com/...'
    },
    menuActions:[
  {
    name: 'inviteUser',
    title: 'Invite User'
  },
  {
    name: 'removeUser',
    title: 'Remove User'
  },
  {
    name: 'deleteRoom',
    title: 'Delete Room'
  }
],
    reactions: {
      wink: [
        1234, // USER_ID
        4321
      ],
      laughing: [
        1234
      ]
    }
  }
],
        currentUserId: 1234
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