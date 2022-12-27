<template>
  <div class="grid my-4">
      <NuxtLink class="countries-card" :to="`/alpha/${country.ccn3}`">
        <div class="aspect-[1.5]">
          <img class="w-full h-full" :src="country.flags.png" :alt="country.name.common" loading="lazy"/>
        </div>
        <div>
          <h4 class="mt-2 font-bold text-center">{{ country.name.common }}</h4>
        </div>
      </NuxtLink>
  </div>

</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Country } from '@/types'

export default Vue.extend({
  name: 'CountriesCard',
  props: {
    country: {
      type: Object,
      required: true,
    } as PropOptions<Country>,
  },
})
</script>
<style lang="scss" scoped>
.countries-card {
  img {
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 300ms ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
    }
  }
}
</style>
