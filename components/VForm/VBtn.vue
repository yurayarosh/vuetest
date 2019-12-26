<template>
  <a v-if="href" :href="href" class="btn" :class="mod">
    <slot />
  </a>
  <button v-else class="btn" :class="mod">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
    mod: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
@import '@/sass/helpers/_variables'
@import '@/sass/helpers/_mixins'

.btn
  display: inline-flex
  align-items: center
  justify-content: center
  height: 40px
  border: 2px solid $black
  padding: 0.2em .5em
  color: $white
  background-color: $black
  text-transform: uppercase
  +tr(opacity .3s)
  &:hover
    opacity: 0.7
  &--primary
    background-color: #42b983
    border-color: #42b983
</style>
