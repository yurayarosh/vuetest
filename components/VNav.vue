<template>
  <nav class="nav" :class="mod">
    <ul class="nav__list">
      <li class="nav__item" v-for="(link, i) in links" :key="i">
        <!-- <a :href="link.href || '#'" class="nav__link">{{ link.title }}</a> -->
        <nuxt-link
          :to="link.to"
          class="nav__link"
          activeClass="nav__link--active"
          exactActiveClass="nav__link--exact-active"
        >
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { to: '/', title: 'home' },
        { to: '/about', title: 'about' },
      ],
    }
  },
  props: {
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

.nav
  $this: &
  text-align: center
  text-transform: uppercase
  font-size: 1.2em
  &__item
    display: inline-block
    margin-left: 0.5em
    margin-right: 0.5em
  &__link
    +tr(color .3s)
    &--exact-active
      color: $accent
    &:hover
      @extend #{$this}__link--exact-active
</style>
