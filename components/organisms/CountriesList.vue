<template>
  <div class="countries-list grid grid-cols-6 grid-rows-auto gap-8">
    <CountriesCard v-for="(country, idx) in $countries" :key="idx" :country ="country" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { countries } from '@/store'

export default Vue.extend({
  name: 'CountriesList',
  computed: {
    $countries() {
      return countries.$all
    },
  },
})
</script>

<style lang="scss" scoped>
.countries-list {
  @include screen('medium') {
    @apply grid grid-cols-3
  }
  @include screen('small') {
    @apply grid grid-cols-2
  }
}
</style>
