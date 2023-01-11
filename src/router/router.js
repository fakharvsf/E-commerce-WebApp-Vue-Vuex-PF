import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: 'home',
      path: '/home',
      component: () => import('../Pages/HomePage/HomePage.vue'),
    },
    {
      path: '/catagories',
      component: () => import('../Pages/Catagories/Catagories.vue'),
    },
    {
      name: 'CatagoriesProduct',
      path: '/catagories/:productCata',
      component: () => import('../Pages/Catagories/CatagoryProducts.vue'),
    },

    {
      path: '/addproduct',
      component: () => import('../Pages/AddProduct.vue'),
    },
    {
      name: 'ProductPage',
      path: '/product/:data',
      component: () => import('../Pages/ProductPage.vue'),
    },
    {
      name: 'SearchPage',
      path: '/search/:qr',
      component: () => import('../Pages/SearchPage.vue'),
    },

    {
      name: 'Login',

      path: '/login',
      component: () => import('../Pages/LoginPage.vue'),
    },
    {
      name: 'MyAccount',
      path: '/my-acount',
      component: () => import('../Pages/MyAccount.vue'),
      meta: {
        requireLogin: true,
      },
    },
    {
      name: 'CartPage',
      path: '/cart',
      component: () => import('../Pages/CartPage.vue'),
    },
    {
      name: 'Checkout',
      path: '/cart/checkout',
      component: () => import('../Pages/CheckoutPage.vue'),
      meta: {
        requireLogin: true,
      },
    },

    {
      path: '/:notFound(.*)',
      component: () => import('../Pages/NotFound.vue'),
    },
  ],
});
// Checking condition before each route for auth
router.beforeEach((to, _, next) => {
  if (
    to.matched.some((record) => record.meta.requireLogin) &&
    !store.state.Login.isAuthenticated
  ) {
    next({ name: 'Login', query: { to: to.path } });
  } else {
    next();
  }
});

export default router;
