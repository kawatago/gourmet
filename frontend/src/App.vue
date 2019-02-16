<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/ja'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'vue-material/dist/vue-material.min.css'
// import VueMaterial from 'vue-material'
Vue.use(ElementUI, {locale})
// Vue.use(VueMaterial)
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
