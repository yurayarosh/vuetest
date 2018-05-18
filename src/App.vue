<template>
  <div class="page">
    
    <site-header/>

    <router-view/>

    <site-footer/>   

  </div>
</template>


<script>
  import siteHeader from '@/components/partials/siteHeader'
  import siteFooter from '@/components/partials/siteFooter'
  export default {
    name: 'App',
    components: {
      siteHeader,
      siteFooter
    }
  };
</script>

<style lang="sass">

@import 'sass/helpers/reset'
@import 'sass/helpers/mixins'
@import 'sass/fontsroot'

body
  font-size: 16px
  line-height: 1.4
  +f-proxima-r
  font-weight: 400

.container
  max-width: 980px
  padding-left: 20px
  padding-right: 20px
  margin: 0 auto

</style>
