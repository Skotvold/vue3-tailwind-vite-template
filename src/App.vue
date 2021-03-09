<template>
  <img
    class="mx-auto"
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <router-view />
  <HelloWorld
    msg="Hello Vue 3 + Vite"
  />
</template>

<script>
import HelloWorld from '@components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  @apply font-mono text-center text-black text-lg mt-16;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
