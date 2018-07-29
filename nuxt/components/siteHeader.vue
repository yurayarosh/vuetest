<template>
  <!-- begin header -->
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <router-link class="logo" to="/">Classic</router-link>
        </div>
        <div class="header__nav">
          <nav class="nav">
            <ul class="nav__list">
              <nav-item v-for="item in nav" v-bind:key="item.id" class="nav__item"><router-link class="nav__link" :to="item.to">{{item.linkText}}</router-link></nav-item>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <img src="icons/facebook.svg" alt="">
  </header>
  <!-- end header -->
</template>

<script>

var logoTwo = require('svg-inline-loader?./facebook.svg');

  export default{
    data(){
      return{
        nav: [
        {id: 1, to: '/', linkText: 'Home'},
        {id: 2, to: 'about', linkText: 'About'},
        {id: 3, to: 'blog', linkText: 'Blog'}
        ]
      }
    }
  }

</script>


<style lang="sass">

@import '../sass/fonts'

.header
  background-color: #111
  &__inner
    height: 80px
    display: flex
    align-items: center
  &__nav
    flex: 1
    text-align: right

.nav
  &__list
    font-size: 0
  &__item
    display: inline-block
    margin-left: 30px
  &__link
    color: #ccc
    text-decoration: none
    font-size: 16px
    text-transform: uppercase
    +f-nexa-bold
    +tr(all .3s)
    &:hover,
    &.nuxt-link-exact-active
      color: #fff


.logo
  text-decoration: none
  color: #fff
  font-size: 24px
  +f-proxima-bold
    
</style>