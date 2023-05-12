<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
// import { BackTop } from '@vlib/ui'
// import '@vlib/ui/es/back-top/style/index.scss'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <van-cell-group>
    <van-cell v-for="i in 15" :key="i">Cell {{ i }}</van-cell>
  </van-cell-group>
  <vlib-back-top></vlib-back-top>
  <!-- <BackTop /> -->

  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
