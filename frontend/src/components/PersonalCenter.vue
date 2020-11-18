<template>
<div>
    <div style="float:left; width:250px ; ">
        <el-row class="tac" style="width:500px;">
            <el-col :span="12">
            <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#ffffff"
            text-color="#000000"
            active-text-color="#ea6f5a">  
                <router-link :to="{path:'/personal_center/academic_homepage'}" style="text-decoration: none; ">
                        <el-menu-item index="1"><i class="el-icon-s-home"></i>学术主页</el-menu-item>
                </router-link>
                
                <router-link :to="{path:'/personal_center/individual_account'}" style="text-decoration: none; ">
                        <el-menu-item index="2"><i class="el-icon-user-solid"></i>个人帐户</el-menu-item>
                </router-link>
               
                <router-link :to="{path:'/personal_center/follow'}" style="text-decoration: none; ">
                        <el-menu-item index="3"><i class="el-icon-s-flag"></i>我的关注</el-menu-item>
                </router-link>

                <router-link :to="{path:'/personal_center/collection'}" style="text-decoration: none; ">
                        <el-menu-item index="4"><i class="el-icon-star-on"></i>论文收藏</el-menu-item>
                </router-link>

            </el-menu>
            </el-col>
        </el-row>
    </div>
    <div>
        <router-view></router-view>
    </div>

</div>
    
</template>

<script>
export default {
    
}
</script>
<style scoped>

</style>