<template>
  <div>
    <DarkTheme/>
    <HeaderComponent title="Americas"/>
    <ContainerComponent>
      <Nuxt/>
    </ContainerComponent>
    <FooterComponent/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'americas',
})
</script>
