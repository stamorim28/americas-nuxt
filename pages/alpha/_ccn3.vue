<template>
  <CountryDetails :country="$country" />
</template>

<script lang="ts">
import Vue from 'vue'
import { countries } from '@/store'
import { Country } from '~/types'

export default Vue.extend({
  layout: 'americas',
  async asyncData({ params }) {
    await countries.show({ ccn3: params.ccn3 as string })
  },

  computed: {
    $country(): Country {
      const country: any = countries.$single
      const parsed = {} as Country
      country.forEach((item: Country) => {
        Object.assign(parsed, item)
      })
      return parsed
    },
  },
})
</script>

<style lang="scss" scoped></style>
