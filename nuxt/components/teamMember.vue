<template>
  <div class="member">
    <div class="member__img"><img :src="img" alt=""></div>
    <div class="member__title" v-html="title">{{title}}</div>
    <div class="member__desc" v-html="desc">{{desc}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      'img': String,
      'title': String,
      'desc': String,
    }
  }
</script>


<style lang="sass">
@import '../sass/fonts'

.member
  display: inline-block
  vertical-align: top
  width: 33.33333%
  font-size: 16px
  text-align: center
  padding-left: 40px
  padding-right: 40px
  margin-bottom: 70px
  &__img
    border-radius: 50%
    width: 220px
    height: 220px
    margin: 0 auto
    margin-bottom: 25px
    img
      max-width: 100%
  &__title
    font-size: 18px
    color: #111
    margin-bottom: 30px
    +f-proxima-bold
    span
      +f-proxima
      color: #555
      font-size: 16px
      display: block
  &__desc
    font-size: 16px
    color: #111

</style>