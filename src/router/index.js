import Vue from 'vue';
import Router from 'vue-router';
import Callback from '@/components/Callback';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '*',
      redirect: '/dashboard'
    }
  ],
});
