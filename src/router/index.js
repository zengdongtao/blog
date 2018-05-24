import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Header from '@/components/Header'
// import Main from '@/components/main/Main'
// import Taster from "@/components/main/taster"

const Main = () => import("@/components/main/main.vue");
const Taster = () => import("@/components/main/taster.vue");
const Professer = () => import("@/components/main/professer.vue");
const Resume = () => import("@/components/main/resume.vue");

Vue.use(Router)

export default new Router({
  history: true,
  routes: [
    {
    	path: '/',
    	component: Login
    },
    {
    	path: '/main',
    	component: Main
    },
    {
      path: '/taster',
      component: Taster
    },
    {
      path: '/professer',
      component: Professer
    },
    {
      path: '/resume',
      component: Resume
    }
  ]
})
