import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/lg/Home.vue'
import login from '../views/jun/login'
import personal from '../views/jun/personal'
import news from '../views/jun/news'
import newsInfo from '../views/jun/newsInfo'
import dailynews from '../components/jun/dailynews'
import basics from '../components/jun/basics'
import UpdatePass from '../components/jun/UpdatePass'
import bankcar from '../components/jun/bankcard'

import proOrder from '../components/jun/proOrder'
import earnings from '../components/jun/earnings'

import wholesaleOrder from '../components/jun/wholesaleOrder'
import pettyloanOrder from '../components/jun/pettyloanOrder'
import attestation_education from '../components/jun/attestation_education'
import attestation_house from '../components/jun/attestation_house'
import attestation_car from '../components/jun/attestation_car'
import reg1 from '../components/jun/Register1'
import reg2 from '../components/jun/Register2'
import reg3 from '../components/jun/Register3'
import SmallDai from "@/views/lg/SmallDai";
import SmallDai_children from "@/views/lg/SmallDai_children";
import SmallDai_children2 from "@/views/lg/SmallDai_children2";
import BigDai from "@/views/lg/BigDai";
import BigDai_info from "@/views/lg/BigDai_info";
import Big_Dai_chlden from "@/views/lg/Big_Dai_chlden";
import Big_Dai_childen2 from "@/views/lg/Big_Dai_childen2";
import Licai_info from "@/views/lg/Licai_info";
import Licai from "@/views/lg/Licai";
import Licai_childen from "@/views/lg/Licai_childen";
import Licai_childen2 from "@/views/lg/Licai_childen2";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: news,
    children:[
      {                      //二级路由
        path:'/dailynews',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'dailynews',
        component:dailynews
      }
      ]
  },
  {
    path: '/newsInfo',
    name: 'newsInfo',
    component: newsInfo
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal,
    redirect:'/basics',
    children:[
      {                      //二级路由
        path:'/basics',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'basics',
        component:basics
      },
      {                      //二级路由
        path:'/UpdatePass',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'UpdatePass',
        component:UpdatePass
      },
      {                      //二级路由
        path:'/bankcard',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'bankcard',
        component:bankcar
      },
      {                      //二级路由
        path:'/proOrder',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'proOrder',
        component:proOrder
      },
      {                      //二级路由
        path:'/earnings',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'earnings',
        component:earnings
      },
      {                      //二级路由
        path:'/pettyloanOrder',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'pettyloanOrder',
        component:pettyloanOrder
      },
      {                      //二级路由
        path:'/wholesaleOrder',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'wholesaleOrder',
        component:wholesaleOrder
      },
      {                      //二级路由
        path:'/attestation_education',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'attestation_education',
        component:attestation_education
      },
      {                      //二级路由
        path:'/attestation_house',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'attestation_house',
        component:attestation_house
      },
      {                      //二级路由
        path:'/attestation_car',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'attestation_car',
        component:attestation_car
      }
      ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: login
  },
  {
    path: '/reg',
    name: 'reg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/jun/reg'),
    redirect: 'reg1',
    children:[
      {                      //二级路由
        path:'/reg1',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'reg1',
        component:reg1
      },
      {                      //二级路由
        path:'/reg2',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'reg2',
        component:reg2
      },
      {                      //二级路由
        path:'/reg3',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'reg3',
        component:reg3
      }
    ]
  },
  {
    path: '/smallDai',
    name: 'smallDai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SmallDai
  },
  {
    path: '/smallDai_children',
    name: 'smallDai_children',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SmallDai_children
  },
  {
    path: '/smallDai_children2',
    name: 'smallDai_children2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SmallDai_children2
  },
  {
    path: '/bigDai',
    name: 'bigDai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BigDai
  },
  {
    path: '/bigDai_info',
    name: 'bigDai_info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BigDai_info
  },
  {
    path: '/big_Dai_chlden',
    name: 'big_Dai_chlden',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Big_Dai_chlden
  },
  {
    path: '/big_Dai_childen2',
    name: 'big_Dai_childen2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Big_Dai_childen2
  },
  {
    path: '/licai_info',
    name: 'licai_info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Licai_info
  },
  {
    path: '/licai',
    name: 'licai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Licai
  },{
    path: '/licai_childen',
    name: 'licai_childen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Licai_childen
  },{
    path: '/licai_childen2',
    name: 'licai_childen2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Licai_childen2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
