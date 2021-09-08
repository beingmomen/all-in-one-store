import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import Todo from '../TodoList.vue'
import Bmi from '../Bmi.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/todo', name: 'Todo', component: Todo },
  { path: '/bmi', name: 'Bmi', component: Bmi }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
