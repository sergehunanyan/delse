/* Auth */
import Loading from '../pages/auth/loading.svelte'
import Login from '../pages/auth/login.svelte'
import Forgot from '../pages/auth/forgot.svelte';
import ForgotConfirm from '../pages/auth/forgotConfirm.svelte';
import ForgotPassword from '../pages/auth/password.svelte';
import Register from '../pages/auth/register.svelte';
import RegisterSecond from '../pages/auth/registerSecond.svelte';
import Confirm from '../pages/auth/confirm.svelte';
import UserPolicy from '../pages/auth/policy.svelte';
import UserRules from '../pages/auth/rules.svelte';
import OrganizationPolicy from '../pages/auth/organizationPolicy.svelte';
import OrganizationRules from '../pages/auth/organizationRules.svelte';

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
import SearchRide from '../pages/ride/search.svelte';
import RideResults from '../pages/ride/results.svelte';

/* Bid */
import Bid from '../pages/bid/index.svelte';
import BidRequests from '../pages/bid/requests.svelte';
import AddBid from '../pages/bid/add.svelte';
import SearchBid from '../pages/bid/search.svelte';
import BidResults from '../pages/bid/results.svelte';

/* Package */
import Package from '../pages/package/index.svelte';
import Shipping from '../pages/package/shipping.svelte';

let routes = [

  {
    path: '/loading/',
    component: Loading,
  },
  /* Auth */
  {
    path: '/login/',
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
    path: '/confirm/',
    component: Confirm,
  },
  {
    path: '/forgot/',
    component: Forgot,
  },
  {
    path: '/forgot-confirm/',
    component: ForgotConfirm,
  },
  {
    path: '/forgot-password/',
    component: ForgotPassword,
  },
  {
    path: '/policy/',
    component: UserPolicy,
  },
  {
    path: '/rules/',
    component: UserRules,
  },
  {
    path: '/organization-policy/',
    component: OrganizationPolicy,
  },
  {
    path: '/organization-rules/',
    component: OrganizationRules,
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
  {
    path: '/search-ride/',
    component: SearchRide,
  },
  {
    path: '/ride-results/',
    component: RideResults,
  },



  /* Bids */
  {
    path: '/bid/',
    component: Bid,
  },
  {
    path: '/bid-requests/',
    component: BidRequests,
  },
  {
    path: '/add-bid/',
    component: AddBid,
  },
  {
    path: '/search-bid/',
    component: SearchBid,
  },
  {
    path: '/bid-results/',
    component: BidResults,
  },



  /* Packages */
  {
    path: '/package/',
    component: Package,
  },
  {
    path: '/shipping/',
    component: Shipping,
  },

  /* Notifications */
  {
    path: '/notifications/',
    component: Notifications,
  },
];

export default routes;
