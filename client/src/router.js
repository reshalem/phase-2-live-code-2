import Vue from 'vue'
import Router from 'vue-router'
import VideoList from './views/VideoList.vue'
import CurrentVideo from './components/CurrentVideo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "link_active",
  linkExactActiveClass: "myLink",
  routes: [
    {
      path: '/',
      name: 'likes',
      component: VideoList,
      children: [{
        path: 'likes/:id',
        name: 'id',
        component: CurrentVideo,
        props: true
      }]
    }
  ]
})
