<template>
  <h1>{{ msg }}</h1>
  <p>
    <a
      class="text-color-a"
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a> |
    <a
      class="text-blue-500"
      href="https://v3.vuejs.org/"
      target="_blank"
    >
      Vue 3 Documentation
    </a>
  </p>
  <button @click="inc">
    count is: {{ state.count }}
  </button>
  <div>
    <p>Edit</p>
    <code>components/HelloWorld.vue</code>
    <p>test hot module replacement.</p>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state =  reactive({ count: 0 })
const inc = () => state.count++
/** To avoid unused vars (script setup) */
/*export default {
  setup(){
    const state = reactive({ count: 0 })
    return { state }
  }
}
*/
</script>

<style>
.text-color-a {
  @apply text-green-400
}
</style>
