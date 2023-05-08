<template>
  <div>button</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const a = ref('test')
console.log(a)
</script>
<style lang="scss">
.button {
  width: 1;
  color: red;
}
</style>
