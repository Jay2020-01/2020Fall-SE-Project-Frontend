<template>
    <div>
        <el-card class="box-card">
            <chat-window :currentUserId="currentUserId" :rooms="rooms" :messages="messages" />
        </el-card>
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
        messages: [{
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
    reactions: {
      wink: [
        1234, // USER_ID
        4321
      ],
      laughing: [
        1234
      ]
    }
  }],
        currentUserId: 1234,
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

/* card边框样式 */
.el-card:hover {
  cursor: pointer;
  border: 1px solid#ea6f5a;
}
</style>