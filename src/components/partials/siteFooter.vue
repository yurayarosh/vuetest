<template>
  <!-- begin footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__nav">
          <nav class="nav-footer">
            <ul class="nav-footer__list">
              <li class="nav-footer__item"><router-link class="nav-footer__link" to="/">Home</router-link></li>
              <li class="nav-footer__item"><router-link class="nav-footer__link" to="about">About</router-link></li>
              <li class="nav-footer__item"><router-link class="nav-footer__link" to="blog">Blog</router-link></li>
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
  import social from '@/components/partials/social' 
  export default {
    components: {
      social,
    }
  };
</script>

<style lang="sass">

@import '../../sass/fonts'
  
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

</style>