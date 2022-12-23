<template>
  <CountryDetails :country="$country"/>
</template>

<script lang="ts">
import Vue from 'vue'
import { countries } from '@/store'

export default Vue.extend({
  layout: 'americas',
  async asyncData({ params }){
    await countries.show({ ccn3: params.ccn3 as any })
  },
  // head() {
  //   return {
  //     title: countries.$single.name.common,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: countries.$single.name.common,
  //         content: countries.$single.name.common
  //       }
  //       // DESCRIÇÃO DAS METATAGS
  //     ]
  //   }
  // },
  computed: {
    $country() {
      const country : any = countries.$single

      const parsed : any = {};

      country.forEach(function (item: any) {
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
