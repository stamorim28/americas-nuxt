<template>
  <div class="countries-list grid grid-cols-5 grid-rows-auto gap-5">
    <!-- <CountriesCard v-for="country in $countries" :key="country.id" :country ="country " /> -->
    <CountriesCard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CountriesList',
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
