<template>
    <div class="app-container">
        <div class="navbar-left-container">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                     @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                     :router="isRouter" display="inline-block">
                <el-menu-item index="1">
                    <i class="el-icon-location"></i>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                </el-menu-item>
            </el-menu>
        </div>

        <div class="content-container">
            <h1>hah</h1>
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
    export default {
      data(){
        return {
          isCollapse:true,
          isRouter:true
        }
      },
      methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>
<style lang="scss" scoped>
    .app-container {
        display: flex;
        justify-content: space-between;
        background-color: red;
       .navbar-left-container {
           width: 65px;
           height: 100%;
       }
    }
</style>