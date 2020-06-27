import Vue from 'vue'
import VueRouter from 'vue-router'
import UserTable from "../components/UserTable"
import Profile from "../components/Profile"
import NotFound from "../view/NotFound"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'UserTable',
    component: UserTable
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
