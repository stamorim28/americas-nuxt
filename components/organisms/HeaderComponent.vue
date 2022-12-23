<template>
  <header class="flex justify-center items-center">
    <NuxtLink to="/">
      <h1 class="text-6xl font-bold text-center font-mono my-8">
        {{title}}
      </h1>
    </NuxtLink>
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
