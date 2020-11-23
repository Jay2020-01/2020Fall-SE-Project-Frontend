<template>
    <div>
        <div >
            <!-- 根据名字检索的可能是该用户的card -->
            <el-card class="box-card_1" shadow="hover" v-for="(item,index) in person_list" :key="index" >
                <div style="line-height:10px;" @click="click_name(item)">
                    <!-- 头像 -->
                    <div style="float:left;height:120px;">
                        <img src="../assets/coffeelogo.png" alt="头像" style="width:80px;height:80px;"/>
                    </div>

                    <!-- 名字 -->
                    <div style="line-height:20px;padding:0px;margin:-20px 0px -10px 90px;text-align:left;">
                        <h4>{{item.person}}</h4>
                    </div>
                    <!-- 指数 -->
                    <div style="line-height:20px;padding:0px;margin:0px 0px 0px 90px;text-align:left;font-size: 13px">
                        <span>h-index：</span><span style="color:#409EFF ;">{{item.hIndex}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>论文数：</span><span style="color:#409EFF ;">{{item.paperNum}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>引用数：</span><span style="color:#409EFF ;">{{item.reference}}</span>
                        
                    </div>
                    <br>
                    <!-- 地址&身份 -->
                    <div style="line-height:20px;padding:0px;margin:0px 0px 0px 90px;text-align:left;font-size: 13px">
                        <span>身份：</span><span style="font-style: italic">{{item.occupation}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>单位：</span><span style="font-style: italic">{{item.company}}</span>
                    </div>
                </div>
            </el-card>
        </div>

<!-- 想在展示了8个card后分页，但是element-ui分页没有效果出现 -->
        <div>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination> 
        </div>


        <div style="" >
            <el-card style="width:400px;">
                <div style="line-height:20px;">
                  <!-- 头像 -->
                    <div >
                        <img src="../assets/coffeelogo.png" alt="头像" style="width:80px;height:80px;"/>
                    </div>
                <!-- 名字 -->
                    <div style="">
                        <h4>{{this.person_now.person}}</h4>
                    </div>  
                    <!-- 指数 -->
                    <div style="">
                        <span>h-index：<span style="color:#409EFF ;">{{this.person_now.hIndex}}</span></span>
                        <el-divider direction="vertical"></el-divider>
                        <span>论文数：<span style="color:#409EFF ;">{{this.person_now.paperNum}}</span></span>
                        <el-divider direction="vertical"></el-divider>
                        <span>引用数：<span style="color:#409EFF ;">{{this.person_now.reference}}</span></span>
                    </div>
                    <br>
                    <!-- 单位&身份 -->
                    <div style="">
                        <span>身份：{{this.person_now.occupation}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>单位：{{this.person_now.company}}</span>
                    </div>
                    <br>
                    <el-button type="primary">绑定</el-button>
                </div>
                <div></div>
            </el-card>
        </div>    


        
    </div>
</template>
<script>
export default {
    data () {
      return {
          //user:{person:'何铭凯',hIndex:'6000',paperNum:'81',reference:'132732',occupation:'博士',company:'北京航空航天大学北京航空航天大学'},
          person_list:[
            {
                person:'何铭凯',hIndex:'60',paperNum:'81',reference:'132732',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何明凯',hIndex:'0',paperNum:'2',reference:'0',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            },
            {
                person:'何铭凯',hIndex:'81',paperNum:'402',reference:'59997',occupation:'教授',company:'北京航空航天大学'
            }
          ],
          //person_now:{person:'何铭凯',hIndex:'6000',paperNum:'81',reference:'132732',occupation:'博士',company:'北京航空航天大学北京航空航天大学'},
          //flag:false,
          person_now:'',
      }
    },
    mounted:function() {
            //alert("!!!")
            this.person_now=this.person_list[0]
        },
    methods: {
        click_name(item){
            //this.flag=true;
            this.person_now=item;
            //this.$alert('这是一段内容')
        },
    }
}
</script>
<style scoped >
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card_1 {
    margin:0 10px 5px 10px;
    width: 27%;
    height: 150px;
    float:left;
    /* padding:10px */
  }
  /* .left{
      width: 60%px;
  } */
</style>