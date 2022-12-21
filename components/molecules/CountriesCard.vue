<template>
  <div class="grid gap-4">
      <NuxtLink class="countries-card" to="`/book/id`">
        <img src="https://flagcdn.com/w320/tf.png" alt="Territory of the French Southern and Antarctic Lands" loading="lazy"/>
        <div>
          <h4 v-if="country.length<20" class="mt-2 font-bold" >{{country}}</h4>
          <h4 v-if="country.length>=20" class="mt-2 font-bold" >{{country.substring(0,20)+"..."}}</h4>
          <!-- <h4 class="mt-2 font-bold text-center">Argentine Republic</h4> -->
        </div>
      </NuxtLink>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CountriesCard',

  data () : {country :string} {
    return {
      country: 'Territory of the French Southern and Antarctic Lands'
    }
  },
})
</script>
<style lang="scss" scoped>
.countries-card {
  img {
    width: 100%;
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 300ms ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
    }
  }
}
</style>
