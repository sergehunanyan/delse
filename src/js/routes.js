/* Auth */
import Login from '../pages/auth/login.svelte'
import Forgot from '../pages/auth/forgot.svelte';
import Register from '../pages/auth/register.svelte';
import RegisterSecond from '../pages/auth/registerSecond.svelte';

/* User */
import User from '../pages/user/index.svelte';
import Notifications from '../pages/user/notifications.svelte';

/* Ride */
import Ride from '../pages/ride/index.svelte';

/* Bid */
import Bid from '../pages/bid/index.svelte';

/* Package */
import Package from '../pages/package/index.svelte';

let routes = [
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
  {
    path: '/user/',
    component: User,
  },

  {
    path: '/ride/',
    component: Ride,
  },

  {
    path: '/bid/',
    component: Bid,
  },

  {
    path: '/package/',
    component: Package,
  },

  {
    path: '/notifications/',
    component: Notifications,
  },
];

export default routes;
