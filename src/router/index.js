import Vue from 'vue'
import VueRouter from 'vue-router'
import Items from '../components/Items.vue'
import ItemProfile from '../components/ItemProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Items',
    component: Items
  },
  {
    path: '/itemprofile/:itemId',
    name: 'ItemProfile',
    component: ItemProfile
  }
  

]

const router = new VueRouter({
  routes
})

export default router
