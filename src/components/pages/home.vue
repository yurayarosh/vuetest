<template>
  <!-- begin home -->
  <div class="home">  

    <div class="home__nav">

      <nav class="subnav">
        <div class="container">
          <div class="subnav__inner">
            <ul class="subnav__list">
              <li class="subnav__item"><a href="#" class="subnav__link">Business</a></li>
              <li class="subnav__item"><a href="#" class="subnav__link">Mobile</a></li>
              <li class="subnav__item"><a href="#" class="subnav__link">Social Media</a></li>
              <li class="subnav__item"><a href="#" class="subnav__link">Technology</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div class="container">

      <div class="posts">

        <div class="post">
          <div class="post__title">
            <h2 class="title">Our Favourite Task Management App!</h2>
            <span class="subttl">Posted on March 3, 2013</span>
          </div>
          <div class="post__img"><img src="../../assets/img/img.jpg" alt=""></div>
          <div class="post__desc">
            <p>6Wunderkinder’s flagship product, Wunderlist, has been a massive hit since its inception. Arguably one of the best to manage your 
              tasks in your business and personal life. What makes it different from any other app? Simplicity. You don’t need to fiddle around with 
              so many unnecessary features like you would with traditional to-do apps. Soon as you open the app, Wunderlist dives right into your 
              tasks and you can get to work.</p>
            </div>
            <a href="#" class="post__link"><i>&rarr;</i>Read more</a>
          </div> 

          <div class="post">
            <div class="post__title">
              <h2 class="title">Our Favourite Task Management App!</h2>
              <span class="subttl">Posted on March 3, 2013</span>
            </div>
            <div class="post__img"><img src="../../assets/img/img.jpg" alt=""></div>
            <div class="post__desc">
              <p>6Wunderkinder’s flagship product, Wunderlist, has been a massive hit since its inception. Arguably one of the best to manage your 
                tasks in your business and personal life. What makes it different from any other app? Simplicity. You don’t need to fiddle around with 
                so many unnecessary features like you would with traditional to-do apps. Soon as you open the app, Wunderlist dives right into your 
                tasks and you can get to work.</p>
              </div>
              <a href="#" class="post__link"><i>&rarr;</i>Read more</a>
            </div>

            <div class="pagination">
              <a href="#" class="pagination__prev"></a>
              <ul class="pagination__list">
                <li class="pagination__item"><a href="#" class="pagination__link">1</a></li>
                <li class="pagination__item"><a href="#" class="pagination__link">2</a></li>
                <li class="pagination__item"><a href="#" class="pagination__link">3</a></li>
                <li class="pagination__item"><a href="#" class="pagination__link">4</a></li>
                <li class="pagination__item"><a href="#" class="pagination__link">5</a></li>
                <li class="pagination__item"><a href="#" class="pagination__link is-disabled">...</a></li>
              </ul>
              <a href="#" class="pagination__next"></a>
            </div>

        </div>

      </div>  

  </div>
  <!-- end home -->
</template>

<script>
  
  export default{
    name: 'home',

  };
</script>

<style lang="sass">

@import '../../sass/helpers/mixins'
@import '../../sass/fonts'

.title
  font-size: 48px
  color: #111
  line-height: 1
  margin-bottom: 10px
  text-align: center
  max-width: 740px
  margin-left: auto
  margin-right: auto
  +f-nexa-bold

.subttl
  font-size: 14px
  color: #777


.subnav
  background-color: #f8f8f8
  &__inner
    height: 60px
    display: flex
    align-items: center
    justify-content: flex-end
    padding-right: 100px
  &__list
    font-size: 0
  &__item
    display: inline-block
    margin-left: 30px
  &__link
    font-size: 16px
    color: #555
    +f-nexa-bold
    display: block
    line-height: 60px
    +tr(all .3s)
    &:hover,
    &.is-active
      border-bottom: 1px solid  #636363

.posts
  padding-top: 50px
  padding-bottom: 80px

.post
  margin-bottom: 50px
  padding-top: 50px
  border-top: 1px solid  #e0e0e0
  &:first-child
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

.pagination
  display: flex
  justify-content: center
  align-items: center
  &__list
    font-size: 0
  &__item
    display: inline-block
    margin-left: 10px
    margin-right: 10px
  &__link
    font-weight: 500
    color: #111
    font-size: 16px
    +f-proxima-bold
    &.is-disabled
      cursor: default
      pointer-events: none
  &__prev,
  &__next
    display: inline-block
    border-radius: 3px
    background-color: #111
    width: 30px
    height: 30px
    position: relative
    text-align: center
    +vertical
    &::after
      content: ''
      display: inline-block
      vertical-align: middle      
  &__prev
    margin-right: 10px
    &::after
      +icon-arrow(15, 15, 2, #fff, 45)
      margin-left: 7px
  &__next
    margin-left: 10px
    &::after
      +icon-arrow(15, 15, 2, #fff, -135)
      margin-right: 7px

</style>