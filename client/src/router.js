import Vue from 'vue'
import Router from 'vue-router'
import Likes from './views/Likes.vue'
// import CurrentVideo from './components/CurrentVideo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "link_active",
  linkExactActiveClass: "myLink",
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/',
      name: 'likes',
      component: Likes
      // children: [{
      //   path: 'likes/:id',
      //   name: 'id',
      //   component: CurrentVideo,
      //   props: true
      // }]
    }
  ]
})
