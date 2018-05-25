<template>
  <!-- begin footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__nav">
          <nav class="nav-footer">
            <ul class="nav-footer__list">
              <nav-item v-for="item in nav" v-bind:key="item.id" class="nav-footer__item"><router-link class="nav-footer__link" :to="item.to">{{item.linkText}}</router-link></nav-item>
            </ul>
          </nav>
        </div>
        <div class="footer__social">

          <social/>

        </div>
        <div class="footer__copy">
          &copy; Copyright 2013 DesignerFirst.com            
        </div>
      </div>        
    </div>      
  </footer>
  <!-- end footer --> 
</template>

<script>
  import social from '@/components/social' 
  export default {
    components: {
      social,
    },
    data(){
    return{
      nav: [
        {id: 1, to: '/', linkText: 'Home'},
        {id: 2, to: 'about', linkText: 'About'},
        {id: 3, to: 'blog', linkText: 'Blog'}
      ]
    }
  }
  };
</script>

<style lang="sass">

@import '../sass/fonts'
  
.footer   
  &__inner
    border-top: 1px solid  #999
    height: 70px
    display: flex
    justify-content: space-between
    align-items: center
  &__copy
    color: #555
    font-size: 14px
    +f-proxima-bold

.nav-footer
  &__list
    font-size: 0
  &__item
    display: inline-block
    margin-right: 30px
  &__link
    color: #555
    font-size: 14px
    +f-proxima-bold

</style>