<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__nav">
          <v-nav />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import VNav from '@/components/VNav'
export default {
  components: {
    VNav,
  },
}
</script>

<style lang="sass" scoped>
.header
  &__inner
    display: flex
    align-items: center
    padding-top: 10px
    padding-bottom: 10px
  &__nav
    width: 100%
</style>
