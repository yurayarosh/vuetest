import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import blog from '@/pages/blog'
import about from '@/pages/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
