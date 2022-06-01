import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import Login from '../views/Login';

// import Dashboard from '../views/admin/Dashboard';
// import Categories from '../views/admin/Categories';
// import Sounds from '../views/admin/Sounds';

Vue.use(VueRouter)

const routes = [
   
  {
    // Landing Page
    path: '/Login_ing',
    component: () => import('../views/Login_ing'), 
  },
  {
    // 理念 
    path: '/introList_CASE1',
    component: () => import('../views/introList_CASE1')
  },
  {
    // 文獻
    path: '/studyList_CASE1',
    component: () => import('../views/studyList_CASE1')
  },
  {
    // 成果
    path: '/greatList_CASE1',
    component: () => import('../views/greatList_CASE1')
  },
  {
    // 分享
    path: '/shareList_CASE1',
    component: () => import('../views/shareList_CASE1')
  },
  {
    // 分享
    path: '/emailme',
    component: () => import('../views/emailme')
  },
  {
    // Landing Page
    path: '/1',
    component: () => import('../views/LdPg_CASE1')
  },
  {
    // Landing Page
    path: '/2',
    component: () => import('../views/LdPg_CASE2')
  },
  {
    // Landing Page
    path: '/3',
    component: () => import('../views/LdPg_CASE3')
  },
  {
    // Landing Page
    path: '/',
    component: () => import('../views/LdPg_CASE1')
  },
  {
    // Landing Page
    path: '',
    component: () => import('../views/LdPg_CASE1')
  },
  {
    // http://www.aqcoder.com/markdown
    path: '/Blog_v1',
    component: () => import('../views/Blog_v1'),
    meta: {
      requiresAuth: true
    }
  }, 
  {
    // Login Page
    path: '/Login',
    component: Login 
  },
  {
    path: '/fgtpw',
    name: 'forgot-password',
    component: () => import('../views/ForgotPassword')
  },
  // {
  //   path: '/admin',
  //   component: () => import('../views/admin/AdminH_Mdf.vue'),
  //   children: [
  //     { path: '', component: Dashboard },
  //     // { path: 'Blog_v1', component: Blog_v1 },
  //     { path: 'categories', component: Categories },
  //   ],
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  
]

const router = new VueRouter({
  // mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!(firebase.auth().currentUser)) {
      next({name: '/'});
    } 
    else {
      next();
    }
  }
  else if(to.path == '/') {
    if(firebase.auth().currentUser) {
      next({path: '/Blog_v1'});
    }
    else {
      next();
    }
  }
  else {
    next();
  }
});

export default router
