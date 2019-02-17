<template>
    <div class="Index">
        <el-container class="indexContainer">
            <el-header width=100%><Header></Header></el-header>
            <el-container>
                <el-aside width=20%>Aside</el-aside>
                <el-main width=80%>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/header/Header'

Vue.component('Header', Header)
export default {
    name: 'Index'
}
</script>

<style>

  .el-header, .el-footer {
    background-color: red;
    color: gray;
    text-align: center;
    line-height: 60px;
    width:100%;
    padding:0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


  .indexContainer {
    height: 100vh;
  }
</style>
