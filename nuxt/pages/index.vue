<template>
    <!-- begin home -->
    <div class="home">  

      <div class="home__nav">
        <nav class="subnav">
          <div class="container">
            <div class="subnav__inner">
              <ul class="subnav__list">
                <posts-nav-item v-for="item in postsNavList" :key="item.id"><a href="#" class="subnav__link">{{item.link}}</a></posts-nav-item>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="container">

        <div class="posts">

          <div class="posts__search">
            <div class="form">
              <form action="">
                <div class="form__field">
                  <input v-model="searchValue" type="text" placeholder="Search...">
                </div>
              </form>
            </div>
          </div>

          <post
            v-for="post in filteredPosts"
            :key="post.id"
            :modClass="post.modClass"
            :title="post.title"
            :subTitle="post.subTitle"
            :img="post.img"
            :desc="post.desc"
            :descHidden="post.descHidden"
          />

          <div class="pagination">
            <a href="#" class="pagination__prev"></a>
            <ul class="pagination__list">
              <pagination-item v-for="item in paginationList" :key="item.id"><a href="#" :class="['pagination__link', item.isDisabled ? 'is-disabled' : '']">{{item.number}}</a></pagination-item>
            </ul>
            <a href="#" class="pagination__next"></a>
          </div>

        </div>

      </div>  

    </div>
    <!-- end home -->
</template>

<script>
  import postsNavItem from '@/components/postsNavItem';
  import post from '@/components/post';
  import paginationItem from '@/components/paginationItem';  
  import animBlocks from '@/mixins/animBlocks';

  export default{
    name: 'home',    
    components: {
      postsNavItem,
      post,
      paginationItem
    },
    data(){
      return{        
        posts: [
          {
            id: 1,
            modClass: 'js-animated-block has-no-border-top',
            title: 'Our Favourite Task Management App!',
            subTitle: 'Posted on March 3, 2013',
            img: '/img.jpg',
            desc: "<p>6Wunderkinder’s flagship product, Wunderlist, has been a massive hit since its inception. Arguably one of the best to manage your tasks in your business and personal life. What makes it different from any other app? Simplicity. You don’t need to fiddle around with so many unnecessary features like you would with traditional to-do apps. Soon as you open the app, Wunderlist dives right into your tasks and you can get to work.</p>",
            descHidden: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ut minus nihil dolorum, qui quam corporis, praesentium deleniti, molestiae sint vel reprehenderit consequatur, totam aliquam magni repellat fugiat veritatis ipsum!</p>'
          },
          {
            id: 2,
            modClass: 'js-animated-block',
            title: 'Year in Review: Our Favourite Apps from 2012 ',
            subTitle: 'Posted on March 3, 2013',
            img: '/img.jpg',
            desc: "<p>6Wunderkinder’s flagship product, Wunderlist, has been a massive hit since its inception. Arguably one of the best to manage your tasks in your business and personal life. What makes it different from any other app? Simplicity. You don’t need to fiddle around with so many unnecessary features like you would with traditional to-do apps. Soon as you open the app, Wunderlist dives right into your tasks and you can get to work.</p>",
            descHidden: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe obcaecati voluptatum, suscipit hic minima quas perspiciatis voluptatibus eveniet iste facilis sapiente quo odit, facere eligendi ipsa quasi debitis soluta. Corporis!</p>'
          }
        ],
        postsNavList: [
          {id: 1, link: 'Business'},
          {id: 2, link: 'Mobile'},
          {id: 3, link: 'Social Media'},
          {id: 4, link: 'Technology'}
        ],
        paginationList: [
          {id: 1, number: '1'},
          {id: 2, number: '2'},
          {id: 3, number: '3'},
          {id: 4, number: '4'},
          {id: 5, number: '5'},
          {id: 6, number: '...', isDisabled: true}
        ],
        searchValue: ''
      }
    },
    mixins: [animBlocks],
    computed: {
      filteredPosts() {
        return this.posts.filter(post => {
          return post.title.toLowerCase().includes(this.searchValue.toLowerCase())
        })
      }
    }
  };
</script>

<style lang="sass">

@import '../sass/helpers/mixins'
@import '../sass/fonts'

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

.form
  width: 100%
  &__field
    max-width: 300px
    input
      width: 100%
      height: 40px
      line-height: 40px
      border: 1px solid  #ccc
      font-size: 16px
      padding: 5px

</style>