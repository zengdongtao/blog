<template>
  <el-container>
    <el-header ref="el_header">
      <div class="left-peach">
        <img src="../assets/images/peach.png" style="width:80px;height:60px;">
      </div>
      <div class="topbar-logo">
        <span style="font-size: 24px;color: #000;">记事本</span>
      </div>
       
      <div class="narbarRigth">
          <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="/main" key="main">
                  <i class="el-icon-star-off"></i>博客乱炖
                  <!-- <router-link to="/main">博客乱炖</router-link> -->
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-edit-outline"></i>情感生活</template>
                <el-menu-item index="2-1">穷</el-menu-item>
                <el-menu-item index="2-2">穷</el-menu-item>
                <el-menu-item index="2-3">穷</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">做梦</template>
                  <el-menu-item index="2-4-1">发达</el-menu-item>
                  <el-menu-item index="2-4-2">发达</el-menu-item>
                  <el-menu-item index="2-4-3">发达</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="/professer" key="professer"><i class="el-icon-share"></i>优秀专家</el-menu-item>
              <el-menu-item index="/taster" key="taster"><i class="el-icon-edit"></i>学无止境</a></el-menu-item>
              <el-menu-item index="/resume" key="resume">
                <i class="el-icon-menu"></i>五味陈杂
                <!-- <router-link to="/taster">五味陈杂</router-link> -->
              </el-menu-item>
              <el-menu-item index="/" key="login">
                <i class="el-icon-menu"></i>登录
                <!-- <router-link to="/taster">五味陈杂</router-link> -->
              </el-menu-item>
          </el-menu>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: 'Header',
  data(){
      return {
        
      };
    },
    computed: {
    // 修正导航栏当前项
    activeIndex() {
      return this.$route.path;
    }
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
       
    }
  
}
</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: rgba(255,255,255,0.5);*/
    color: #333;
    text-align: center;
    line-height: 50px;
    box-shadow: 0 2px 9px rgba(26, 26, 26, 0.15);
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    z-index:9999;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .topbar-logo,.left-peach{
    float: left;
    height: 60px;
    line-height: 70px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-menu--horizontal{
    background:none!important;
  }
  .narbarRigth{
    float: right;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
