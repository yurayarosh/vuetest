<template>
  <div>
    
    <site-header/>
<<<<<<< HEAD:nuxt/layouts/main-layout.vue
    <slot></slot>

    <site-footer/>   
=======
    <nuxt/>
    <site-footer/>
>>>>>>> 47746b6646634402883659541215ee8117683933:nuxt/layouts/default.vue

  </div>
</template>

<script>
  import siteHeader from '@/components/siteHeader';
  import siteFooter from '@/components/siteFooter';

  export default {
    components: {
      siteHeader,
      siteFooter
    }
  };
</script>

<style lang="sass">

@import '../sass/helpers/reset'
@import '../sass/helpers/mixins'
@import '../sass/fonts'

body
  font-size: 16px
  line-height: 1.4
  +f-proxima

.container
  max-width: 980px
  padding-left: 20px
  padding-right: 20px
  margin: 0 auto

</style>
