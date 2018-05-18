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
              <li class="nav__item"><router-link class="nav__link" to="/">Home</router-link></li>
              <li class="nav__item"><router-link class="nav__link" to="about">About</router-link></li>
              <li class="nav__item"><router-link class="nav__link" to="blog">Blog</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- end header -->
</template>

<script>

</script>


<style lang="sass">

@import '../../sass/fonts'

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
    &.is-active
      color: #fff

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

.logo
  text-decoration: none
  color: #fff
  font-size: 24px
  +f-proxima-bold
    
</style>