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
  head() {
    return {
      title: this.$country.name.common,
      meta: [
        {
          hid: 'description',
          name: this.$country.name.common,
          content: this.$country.name.common
        }
        // DESCRIÇÃO DAS METATAGS
      ]
    }
  },
  computed: {
    $country() {
      const country = countries.$single

      const parsed : Object = {};

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
