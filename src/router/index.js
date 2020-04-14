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
      meta: {
        title: '登录'
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,
      meta: {
        title: '登录'
      }
    },
    {
      path:'/register',
      name: 'register',
      component: register,
      meta: {
        title: '注册'
      }
    },
    {
      path:'/square',
      name:'square',
      component:square,
      meta: {
        title: '广场'
      }
    },
    {
      path:'/postpot',
      name:'postpot',
      component:postpot,
      meta: {
        title: '发布'
      }
    },
    {
      path:'/themepage',
      name:'themepage',
      component:themepage,
      meta: {
        title: '帖子'
      }
    },
    {
      path:'/userpage',
      name:'userpage',
      component:userpage,
      meta: {
        title: '个人主页'
      }
    }
  ]
})
