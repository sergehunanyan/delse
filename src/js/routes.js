/* Auth */
import Login from '../pages/auth/login.svelte'
import Forgot from '../pages/auth/forgot.svelte';
import Register from '../pages/auth/register.svelte';
import RegisterSecond from '../pages/auth/registerSecond.svelte';

/* User */
import User from '../pages/user/index.svelte';
import PaymentSystems from '../pages/user/paymentSystems.svelte';
import Settings from '../pages/user/settings.svelte';
import Password from '../pages/user/password.svelte';
import Rating from '../pages/user/rating.svelte';
import Invite from '../pages/user/invite.svelte';
import Support from '../pages/user/support.svelte';
import Socials from '../pages/user/socials.svelte';
import Notifications from '../pages/user/notifications.svelte';

/* Ride */
import Ride from '../pages/ride/index.svelte';
import RideRequests from '../pages/ride/requests.svelte';
import AddRide from '../pages/ride/add.svelte';

/* Bid */
import Bid from '../pages/bid/index.svelte';

/* Package */
import Package from '../pages/package/index.svelte';

let routes = [

  /* Auth */
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

  /* User profile */
  {
    path: '/user/',
    component: User,
  },
  {
    path: '/payment-systems/',
    component: PaymentSystems,
  },
  {
    path: '/settings/',
    component: Settings,
  },
  {
    path: '/password/',
    component: Password,
  },
  {
    path: '/rating/',
    component: Rating,
  },
  {
    path: '/invite/',
    component: Invite,
  },
  {
    path: '/support/',
    component: Support,
  },
  {
    path: '/socials/',
    component: Socials,
  },

  /* Rides */
  {
    path: '/ride/',
    component: Ride,
  },
  {
    path: '/ride-requests/',
    component: RideRequests,
  },
  {
    path: '/add-ride/',
    component: AddRide,
  },

  /* Bids */
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
