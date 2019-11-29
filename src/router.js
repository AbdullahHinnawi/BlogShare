import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/authentication/Login.vue'
import Register from './views/authentication/Register.vue'
import AddCategory from './views/blogs/AddCategory.vue'
import CreateBlog from './views/blogs/CreateBlog.vue'
import AllBlogs from './views/blogs/AllBlogs.vue'
import EditBlog from './views/blogs/EditBlog.vue'

Vue.use(Router);

const isLoggedIn = true;


const routes = new Router({
 routes: [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/blogs',
    name: 'all-blogs',
    component: AllBlogs,
    // beforeEnter called when '/contact' route matches
    beforeEnter:(to, from, next) =>{
      if(isLoggedIn){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: '/create-blog',
    name: 'create-blog',
    component: CreateBlog,
    beforeEnter:(to, from, next) =>{
      if(isLoggedIn){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: '/blogs/:id',
    name: 'edit-blog',
    component: EditBlog,
    beforeEnter:(to, from, next) =>{
      if(isLoggedIn){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: '/add-category',
    name: 'add-category',
    component: AddCategory,
    beforeEnter:(to, from, next) =>{
      if(isLoggedIn){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter:(to, from, next) =>{
      if(!isLoggedIn){
        next();
      }else{
        next('/blogs');
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter:(to, from, next) =>{
      if(isLoggedIn){
        next();
      }else{
        next('/blogs');
      }
    }
  },
  {
    path: '*',
    redirect: '/'
  },

],
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
});
/*
to: where you routing to
from: where you routing from
next: is the action to do
 */
// redirect the user to login page if he is not logged in
// beforeEach called globally when a  new navigation starts
routes.beforeEach((to, from, next) =>{
  //evaluate condition
  if(isLoggedIn){
    // continue routing
    next();
  }else{
    // redirect to the lonin page
    next('/login');

  }
});



export default routes;
