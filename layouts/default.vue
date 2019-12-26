<template>
  <div class="out">
    <v-header />
    <main class="main">
      <nuxt />
    </main>
    <v-footer />
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'

export default {
  components: {
    VHeader,
    VFooter,
  },
}
</script>

<style lang="sass">
@import '@/sass/app'
.out
  display: flex
  flex-direction: column
  height: 100vh

.main
  flex-grow: 1
</style>
