import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Work from '../views/Work.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', title: "Home", name: 'Home', component: Home },
  { path: '/About', title: "About Us", name: "About", component: About },
  { path: '/Work', title: "Work", name: "Work", component: Work },
  { path: '*', redirect: { name: "Home" } }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
