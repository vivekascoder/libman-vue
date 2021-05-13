import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Auth from '@/views/Auth'
import Books from '@/views/Books'
import AddBook from '@/views/AddBook'
import firebase from 'firebase/app'
import ShowBook from '@/views/ShowBook'
import UpdateBook from '@/views/UpdateBook'
import Analytics from '@/views/Analytics'
import Category from '@/views/Category'
import IssueBook from '@/views/IssueBook'
import Issued from '@/views/Issued'
import 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: ShowBook
  },
  {
    path: '/book/update/:id',
    name: 'UpdateBook',
    component: UpdateBook
  },
  {
    path: '/book/issue/:id',
    name: 'IssueBook',
    component: IssueBook
  },
  {
    path: '/issued',
    name: 'Issued',
    component: Issued
  },
  {
    path: '/books/add',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

router.beforeEach((to, from, next) => {
  // Route Gaurd...
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  console.log(requiresAuth, to, from);
  const isAuthenticated = firebase.auth().currentUser
  console.log(!isAuthenticated);
  if (requiresAuth && !isAuthenticated){
    next("/auth")
  } else {
    next()
  }
})