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
    // {
    //   name: 'CatagoriesspecificProduct',
    //   path: '/catagories/:productCatagory/:productId',
    //   component: () => import('./Pages/Catagories/CatagoryproductPage.vue'),
    // },
    {
      path: '/addproduct',
      component: () => import('./Pages/AddProduct.vue'),
    },
    {
      name: 'ProductPage',
      path: '/product/:data',
      component: () => import('./Pages/ProductPage.vue'),
    },
    {
      name: 'SearchPage',
      path: '/search/:qr',
      component: () => import('./Pages/SearchPage.vue'),
    },

    {
      path: '/login',
      component: () => import('./Pages/LoginPage.vue'),
    },
    {
      name: 'CartPage',
      path: '/cart/:ProdQant/:totalPrice',
      component: () => import('./Pages/CartPage.vue'),
    },

    { path: '/:notFound(.*)', component: () => import('./Pages/NotFound.vue') },
  ],
});

export default router;
