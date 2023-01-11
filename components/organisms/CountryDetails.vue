<template>
  <section class="w-full">
    <div class="countries-details grid justify-items-center">
      <nuxt-img
        class="w-full md:w-3/6"
        :src="country.flags.svg"
        :alt="country.name.common"
        loading="lazy"
        placeholder
      />
      <h2 class="text-2xl font-bold mt-4">{{ country.name.official }}</h2>
      <h4>{{ country.name.common }}</h4>
    </div>

    <div class="my-4">
      <p>
        Languages:
        <span>{{ getLanguages }} </span>
      </p>
      <p>Subregion: {{ country.subregion }}</p>
      <p>Population: {{ getPopulation }} million</p>
      <p>
        Timezones:
        <span>
          {{ getTimezones }}
        </span>
      </p>
    </div>

    <div v-if="country.coatOfArms.png">
      <h4 class="text-2xl font-bold">Coat of Arms:</h4>
      <br />
      <nuxt-img
        class="w-full md:w-1/4"
        :src="country.coatOfArms.png"
        :alt="`Coat of Arms: ${country.name.common}`"
        loading="lazy"
        placeholder
      />
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

  head(): Object {
    return {
      title: this.country.name.common,
      meta: [
        {
          hid: 'description',
          name: this.country.name.common,
          content: this.country.name.official,
        },
        // DESCRIÇÃO DAS METATAGS
      ],
    }
  },

  computed: {
    getPopulation(): string {
      const population: string = JSON.stringify(
        this.country.population / 1000000
      )
      return population.substring(0, 5)
    },

    getLanguages(): string {
      const languages: object = this.country.languages
      const langsInArray: string[] = Object.values(languages)

      return langsInArray.join(', ')
    },

    getTimezones(): string {
      const timezones: string[] = this.country.timezones

      return timezones.join(', ')
    },
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
