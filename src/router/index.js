import { createRouter as createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'

// Import components
import SymbolsView from '../views/SymbolsView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import RegisterView from '../views/RegisterView.vue'
import ExchangeView from '../views/ExchangeView.vue'
import ConnectView from '../views/ConnectView.vue'
import DataEntriesView from '../views/DataEntriesView.vue'


/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */
const routes = [
    {
      path: '/',
      name: 'symbols',
      component: SymbolsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/connect",
      name: "connect",
      component: ConnectView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/data-entries/:id",
      name: "data-entries",
      component: DataEntriesView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/exchanges",
      name: "exchanges",
      component: ExchangeView,
      meta: {
        requiresAuth: true
      }
    }
  ];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to) => {

  // Get the Vuex store
  const store = useStore();

  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    return {name: "login"};
  }
  // Otherwise, do nothing and they'll go to their next destination
});

export default router;
