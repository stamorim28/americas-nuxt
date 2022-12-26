<template>
  <section class="w-full">
    <div class="countries-details grid justify-items-center">
      <img class="w-full md:w-3/6" :src="country.flags.svg" :alt="country.name.common" loading="lazy">
      <h2 class="text-2xl font-bold mt-4"> {{ country.name.official }}</h2>
      <h4>{{ country.name.common }}</h4>
    </div>

    <div class="my-4">
      <p v-if="country.languages.spa">Languages: {{ country.languages.spa }}</p>
      <p v-if="country.languages.eng">Languages: {{ country.languages.eng }}</p>
      <p v-if="country.languages.por">Languages: {{ country.languages.por }}</p>
      <p v-if="country.languages.fra">Languages: {{ country.languages.fra }}</p>
      <p v-if="country.languages.nld">Languages: {{ country.languages.nld }}</p>
      <p v-if="country.languages.kal">Languages: {{ country.languages.kal }}</p>
      <p>Subregion: {{ country.subregion }}</p>
      <p>Population: {{ country.population }}</p>
      <p>Timezones:
        <span v-for="(timezones, idx) in country.timezones" :key="idx">
          {{ timezones }} |
        </span>
      </p>
    </div>

    <div v-if="country.coatOfArms.png">
      <h4 class="text-2xl font-bold">Coat of Arms:</h4> <br/>
      <img class="w-full md:w-1/4" :src="country.coatOfArms.png" :alt="`Coat of Arms: ${country.name.common}`" loading="lazy">
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Country } from '@/types'

export default Vue.extend({
  name: 'CountriesDetails',
  props: {
    country: {
      type: Object,
      required: true,
    } as PropOptions<Country>,
  },
})
</script>
<style lang="scss" scoped>
.countries-details {
  img {
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
  }
}
</style>
