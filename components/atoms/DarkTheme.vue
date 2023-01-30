<template>
  <div>
    <button class="lamp" @click="handleDark()">
      <i class="text-3xl fa-solid fa-lightbulb"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { WritableComputedRef } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark: WritableComputedRef<boolean> = useDark()
const handleDark: (value?: boolean | undefined) => boolean = useToggle(isDark)
</script>

<style lang="scss" scoped>
.lamp {
  position: absolute;
  top: 2%;
  right: 2%;
  z-index: 2;
}
</style>
