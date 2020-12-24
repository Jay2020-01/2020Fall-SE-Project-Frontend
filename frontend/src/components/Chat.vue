<template>
    <div>
      <el-row>
      <el-col :span="22" :offset="1">
        <el-card class="box-card" shadow="hover">
            <chat-window 
            :currentUserId="currentUserId" 
            :rooms="rooms" 
            :roomId="roomId"
            :messagesLoaded="messagesLoaded"
            :messages="messages"
            @sendMessage="sendMessage" 
            @fetchMessages="fetchMessage"
            />
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
        roomId:null,
        rooms:[],
        messages: [],
        currentUserId: -1, 
        messagesLoaded:false,
      }
    },
    created: function () {
      this.getPersonList();
    },
    methods: {
      sendMessage({ roomId, content, file, replyMessage}) {
        var data = Qs.stringify({
          content:content,
          target_user_id:roomId,
        });
        var url="http://106.13.138.133:18090/notice/post_message/" + localStorage.getItem('user_id');
        // console.log(roomId);
        axios.post(url, data).then((res)=>{
          this.fetchMessage({room:{roomId:roomId}, options:null});
        });
      },
      getPersonList() {
        this.currentUserId = parseInt(localStorage.getItem('user_id'));
        // console.log(localStorage.getItem('user_id'));
        const rooms = [];
        // console.log("get person list");
        var url = "http://106.13.138.133:18090/notice/get_person_list/" + localStorage.getItem('user_id') ;
        axios.get(url).then((res)=>{
          console.log(res);
          for (let i = 0; i < res.data.data.length; i++) {
            var room = new Object();
            room.roomId = res.data.data[i].id;
            room.roomName = res.data.data[i].userName;
            room.avatar = res.data.data[i].avatar;
            room.users = [{
              _id: res.data.data[i].id,
              username: res.data.data[i].userName,
              avatar: res.data.data[i].avatar,
            }, {
              _id: localStorage.getItem('user_id'),
              username: "me",
              avatar: null,
            }]; 
            rooms.push(room);
          }
        })
        this.rooms = rooms;
        setTimeout(() => {
          if(this.$route.query.target_user_id) {
            this.roomId = this.$route.query.target_user_id;
          }
        }, 2000)
      },
      fetchMessage({room, options}) {
        this.currentUserId = parseInt(localStorage.getItem('user_id'));
        // console.log("get message content");
        var url = "http://106.13.138.133:18090/notice/get_message_content/" + localStorage.getItem('user_id') + '/' + "?target_user_id=" + room.roomId;
        this.messagesLoaded = true;
        const messages = [];
        axios.get(url).then((res)=>{
          for (let i = res.data.data.length-1; i >= 0; i--) {

            if(res.data.data[i].content == "") continue;
            var message = new Object();
            var date = new Date(res.data.data[i].createTime)
            message._id = res.data.data[i].id;
            message.content = res.data.data[i].content;
            message.sender_id = res.data.data[i].notifierId;
            message.timestamp = date.getFullYear() + '-'
              // 因为js里month从0开始，所以要加1
              + (parseInt(date.getMonth()) + 1) + '-'
              + date.getDate() + '   ' + date.getHours() + ':' + (parseInt(date.getMinutes()))

            // message.date = date.getFullYear() + '-'
            //   // 因为js里month从0开始，所以要加1
            //   + (parseInt(date.getMonth()) + 1) + '-'
            //   + date.getDate();
            messages.push(message);
          }
          //console.log("get messages");
          setTimeout(() => {
            this.messagesLoaded = true
          }, 0)
          //console.log(res.data.data);
        })
        this.messages = messages;
      },
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