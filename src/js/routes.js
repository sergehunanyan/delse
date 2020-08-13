
import Login from '../pages/login.svelte'
import Forgot from '../pages/forgot.svelte';
import Register from '../pages/register.svelte';
import RegisterSecond from '../pages/registerSecond.svelte';

var routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/register/',
    component: Register,
  },
  {
    path: '/register2/',
    component: RegisterSecond,
  },
  {
    path: '/forgot/',
    component: Forgot,
  },
];

export default routes;
