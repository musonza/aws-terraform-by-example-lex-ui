import Vue from 'vue'
import Router from 'vue-router'
import Chatbot from '@/components/Chatbot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chatbot',
      component: Chatbot
    }
  ]
})
