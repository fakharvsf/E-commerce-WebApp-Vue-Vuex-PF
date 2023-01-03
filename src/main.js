import { createApp } from 'vue';
import VueCarousel from '@chenfengyuan/vue-carousel';
import BaseCard from './components/UI/MainProducts.vue';
import ShoppingCard from './components/layout/ShopingCard.vue';
import CatalogCard from './components/layout/CatalogCard.vue';
import CatalogProduct from './components/layout/CatalogProduct.vue';
import MainProducts from './components/UI/MainProducts.vue';
import App from './App.vue';
import router from './router';
import vuetify from './vuetify';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:5173';
const app = createApp(App);
// app.use();
app.use(router, axios, vuetify, bootstrap);
// app.use();
app.component('base-card', BaseCard);
app.component('shopping-card', ShoppingCard);
app.component('main-products', MainProducts);
app.component('catalog-card', CatalogCard);
app.component('catalog-product', CatalogProduct);
app.component(VueCarousel.name, VueCarousel);

app.mount('#app');
