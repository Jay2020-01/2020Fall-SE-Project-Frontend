<template>
    <div>
        <div>
            <el-card class="box-card" style="float:left;margin:0 0 0 60px;width:35%; ">
                <h1 style="margin:-40px 0 0 40px;height:120px;width:100px">基本信息</h1>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  style="margin:0 0 0 0px;width:460px">
                    <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="ruleForm.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="姓氏" prop="family_name">
                        <el-input v-model="ruleForm.family_name"></el-input>
                    </el-form-item>
                    <el-form-item label="名字" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="ruleForm.sex">
                            <input type="radio" name="sex" value="Male" v-model="ruleForm.sex" >男 
                            <!-- <p>&nbsp;&nbsp;&nbsp;&nbsp;</p> -->
                            <input type="radio" name="sex" value="Female" v-model="ruleForm.sex">女
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="职业" prop="occupation">
                    <el-select v-model="ruleForm.occupation" placeholder="请选择" style="width:360px">
                        <el-option
                        v-for="item in options"
                        :key="item.occupation"
                        :label="item.label"
                        :value="item.occupation">
                        </el-option>
                    </el-select>
                    </el-form-item>
                    <el-form-item label="单位">
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="ruleForm.textarea">
                        </el-input>
                    </el-form-item> 
                </el-form>
                <el-button style="float:left;margin: 20px 0 35px 60px ">保存</el-button>
            </el-card>
        </div>
        <!-- {{ruleForm.occupation}} -->
        
        <div>
            <el-card class="box-card" style="float:left;margin:0 0 20px 40px;width:40%;">
                <div class="avatar_box" style="width:100px;height:100px;border: 1px solid #eee;border-radius: 50%;transform: translate(250%, 0%);">
                    <img src="../assets/coffeelogo.png" style="width:100px;height:100px;magrin:0 0 -10px 0;border-radius: 50%;"/>
                </div>
            </el-card>
        </div>

        <div>
            <el-card class="box-card" style="float:left;margin:0 0 0 40px;width:40%;">
                <h1 style="margin:-40px 0 0 40px;height:120px;width:100px">密码管理</h1>
                <div v-if="flag==false">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  style="margin:0 0 0 40px;width:460px">
                        <el-form-item label="旧密码" prop="old">
                            <el-input placeholder="请输入密码" v-model="ruleForm.old" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="new">
                           <el-input placeholder="请输入密码" v-model="ruleForm.new" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="confirm">
                            <el-input placeholder="请输入密码" v-model="ruleForm.confirm" show-password></el-input>
                        </el-form-item>
                        <router-link :to="{path:'/personal_center/academic_homepage'}" style="text-decoration: none; ">
                            <el-form-item style="margin: 20px 0 0px 20px ">忘记密码？</el-form-item>
                        </router-link>
                    </el-form>
                </div>
                <div v-else>
                    <h4>密码用于保护账号信息和登录安全</h4>
                </div>
                <div v-if="flag==false">
                    <el-button style="float:left;margin: 20px 0 30px 60px " @click="change_flag">取消</el-button>
                    <el-button style="float:left;margin: 20px 0 30px 20px ">保存</el-button>
                </div>
                <div v-else>
                    <el-button style="float:left;margin: 45px 0 30px 60px " @click="change_flag">修改</el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
          flag:true,
        ruleForm: {
          nickname: '',
          family_name: '',
          name: '',
          sex:'',
          occupation:'',
          textarea:'',
          new:'',
          old:'',
          confirm:'',
        },
        rules: {
          nickname: [
            { required: true,  trigger: 'blur' },
          ],
          family_name: [
            { required: true,  trigger: 'blur' },
          ],
          name: [
            { required: true,  trigger: 'blur' },
          ],
          occupation: [
            { required: true,  trigger: 'blur' },
          ],
        },
        options: [{
          occupation: '选项1',
          label: '教授'
        }, {
          occupation: '选项2',
          label: '副教授'
        }, {
          occupation: '选项3',
          label: '助理教授'
        }, {
          occupation: '选项4',
          label: '研究员'
        }, {
          occupation: '选项5',
          label: '博士后'
        },
        {
          occupation: '选项6',
          label: '博士生'
        },
        {
          occupation: '选项7',
          label: '研究生'
        },
        {
          occupation: '选项8',
          label: '其他'
        }
        ],
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      change_flag(){
          this.flag=!this.flag;
      }
    }
}
</script>
<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
  p{display: inline;}
 
</style>