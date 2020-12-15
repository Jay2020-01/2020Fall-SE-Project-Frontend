<template>
  <div style="height: 100%">
    <el-container style="height: 100%;">
      <el-aside width="280px">
        <div style="float: left; width: 250px; height: 100%">
      <el-row class="tac" style="height: 100%">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#ffffff"
            text-color="#000000"
            active-text-color="#ea6f5a"
          >
            <router-link
              :to="{ path: '/personal_center/academic_homepage' }"
              style="text-decoration: none"
            >
              <el-menu-item index="1"
                ><i class="el-icon-s-home"></i>学术主页</el-menu-item
              >
            </router-link>

            <router-link
              :to="{ path: '/personal_center/individual_account' }"
              style="text-decoration: none"
            >
              <el-menu-item index="2"
                ><i class="el-icon-user-solid"></i>个人帐户</el-menu-item
              >
            </router-link>

            <router-link
              :to="{ path: '/personal_center/follow' }"
              style="text-decoration: none"
            >
              <el-menu-item index="3"
                ><i class="el-icon-s-flag"></i>我的关注</el-menu-item
              >
            </router-link>

            <router-link
              :to="{ path: '/personal_center/collection' }"
              style="text-decoration: none"
            >
              <el-menu-item index="4"
                ><i class="el-icon-star-on"></i>论文收藏</el-menu-item
              >
            </router-link>

            <router-link
              :to="{ path: '/personal_center/chat' }"
              style="text-decoration: none"
            >
              <el-menu-item index="5"
                ><i class="el-icon-s-comment"></i>我的私信</el-menu-item
              >
            </router-link>
          </el-menu>
      </el-row>
    </div>
      </el-aside>
      <el-container>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
</style>