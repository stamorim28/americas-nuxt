<template>
  <div class="github">
    <a
      href="https://github.com/stamorim28"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="@/static/gh.png" alt="github" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GithubLogo',
})
</script>

<style lang="scss" scoped>
.github {
    position: fixed;
    top: 2%;
    right: 2%;
    z-index: 2;
  }
</style>
