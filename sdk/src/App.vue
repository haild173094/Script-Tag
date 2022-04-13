<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import ScriptTag from './ScriptTag.vue'

</script>

<template>
  <div>
      <ScriptTag></ScriptTag>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.script-tag {
  font-size: 1em;
  line-height: 1.5em;
  font-weight: bold;
  color: red;
  position: fixed;  
  bottom: 20px;
  left: 20px;
}
</style>
