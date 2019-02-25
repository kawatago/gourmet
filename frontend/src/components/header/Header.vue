<template>
    <div class="Header">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="headerMenu">
            <el-menu-item index="1">Home</el-menu-item>                
            <el-menu-item index="2" disabled>Soon...</el-menu-item>        
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Header',
     data() {
      return {
        activeIndex: '1'
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
el-menu {
    background-color: blue;
}
</style>
