import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

 
export default new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
  ]
})

