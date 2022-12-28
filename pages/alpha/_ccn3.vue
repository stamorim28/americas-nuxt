<template>
  <CountryDetails :country="$country"/>
</template>

<script lang="ts">
import Vue from 'vue'
import { countries } from '@/store'
import { Country } from '~/types'

export default Vue.extend({
  layout: 'americas',
  async asyncData({ params }){
    await countries.show({ ccn3: params.ccn3 as any })
  },

  computed: {
    $country() : Country {
      const country : any = countries.$single
      const parsed : any = {};
      country.forEach(function (item: any) : void {
	      for (const i in item) {
		      parsed[i] = item[i];
	      }
      });

      return parsed
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
