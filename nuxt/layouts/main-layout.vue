<template>
  <div class="page">
    
    <site-header/>
    <slot></slot>

    <site-footer/>   

  </div>
</template>

<script>
  import siteHeader from '@/components/siteHeader'
  import siteFooter from '@/components/siteFooter'
  export default {
    name: 'mainLayout',
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
