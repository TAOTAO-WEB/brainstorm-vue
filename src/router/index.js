import Vue from 'vue'
import Router from 'vue-router'
import signin from '@/components/BS_SignIn'
import register from '@/components/BS_Register'
import square from '@/components/BS_Square'
import postpot from '@/components/BS_PostPot'
import themepage from '@/components/BS_Themepage'
import userpage from '@/components/BS_UserPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name: 'signin',
      },
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path:'/register',
      name: 'register',
      component: register
    },
    {
      path:'/square',
      name:'square',
      component:square
    },
    {
      path:'/postpot',
      name:'postpot',
      component:postpot
    },
    {
      path:'/themepage',
      name:'themepage',
      component:themepage
    },
    {
      path:'/userpage',
      name:'userpage',
      component:userpage
    }
  ]
})
