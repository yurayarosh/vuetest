<template>
  <div :class="['post', modClass]">
    <div class="post__title">
      <h2 class="title">{{ title }}</h2>
      <span class="subttl">{{ subTitle }}</span>
    </div>
    <div class="post__img"><img :src="img" alt=""></div>
    <div class="post__desc">
      <div class="post__desc-visible" v-html="desc">{{desc}}</div>
      <transition name="fade">
        <div v-if="showDescHidden" class="post__desc-hidden" v-html="descHidden">{{descHidden}}</div>
      </transition>
    </div>
    <a href="#" v-if="showBtnActive" @click.prevent="showDescHidden = true; showBtnActive = false" class="post__link"><i>&rarr;</i>Read more</a>
  </div>
</template>

<script>


  export default {
    data(){
      return{
        showDescHidden: false,
        showBtnActive: true
      }
    },
    props: {
      modClass: {
        type: String,
        default: ''
      },
      img:  {
        type: String,
        default: ''
      },
      title:  {
        type: String,
        default: ''
      },
      subTitle:  {
        type: String,
        default: ''
      },
      desc:  {
        type: String,
        default: ''
      },
      descHidden:  {
        type: String,
        default: ''
      }      
    }
  }
</script>


<style lang="sass">

@import '../sass/fonts'

.post
  display: block
  margin-bottom: 50px
  padding-top: 50px
  border-top: 1px solid  #e0e0e0
  &.has-no-border-top
    border-top: none
  &__title    
    margin-bottom: 50px
    text-align: center
    span
      font-size: 14px
      color: #777
      +f-proxima-bold
  &__img
    text-align: center
    margin-bottom: 40px
    img
      max-width: 100%
  &__desc
    font-size: 16px
    color: #111
    margin-bottom: 15px
  &__link
    font-size: 16px
    color: #111
    +f-proxima-bold

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

</style>