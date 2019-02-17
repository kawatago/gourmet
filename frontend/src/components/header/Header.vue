<template>
    <div class="Header">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="headerMenu">
            <el-menu-item index="1">Processing Center</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-submenu>
                </el-submenu>
            <el-menu-item index="3" disabled>Info</el-menu-item>        
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Header',
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.Header {
    width:100%;
}
.headerMenu {
    width:100%;
}
</style>
