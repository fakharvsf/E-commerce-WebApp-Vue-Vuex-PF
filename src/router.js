import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('./Pages/HomePage/HomePage.vue') },
    {
      path: '/catagories',
      component: () => import('./Pages/Catagories/Catagories.vue'),
    },
    {
      name: 'CatagoriesProduct',
      path: '/catagories/:productCata',
      component: () => import('./Pages/Catagories/CatagoryProducts.vue'),
    },
    {
      path: '/addproduct',
      component: () => import('./Pages/AddProduct.vue'),
    },
    {
      // path: '/:category/:product/',
      name: 'ProductPage',
      path: '/product/:data',
      component: () => import('./Pages/ProductPage.vue'),
    },
    { path: '/login', component: () => import('./Pages/LoginPage.vue') },
    { path: '/:notFound(.*)', component: () => import('./Pages/NotFound.vue') },
  ],
});

export default router;
