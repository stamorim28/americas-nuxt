<template>
  <header class="flex justify-center items-center">
    <h1 class="text-6xl font-bold text-center font-mono">
      {{title}}
    </h1>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderComponent',
  props: {
    title: {
      type: String,
      default: 'Americas'
    }
  }
})
</script>
