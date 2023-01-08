// import Vue from 'vue';
import { createApp } from 'vue';
import BaseCard from './components/UI/MainProducts.vue';
import ShoppingCard from './components/layout/ShopingCard.vue';
import CatalogCard from './components/layout/CatalogCard.vue';
import CatalogProduct from './components/layout/CatalogProduct.vue';
import MainProducts from './components/UI/MainProducts.vue';
import App from './App.vue';
import router from './router';
import vuetify from './vuetify';
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import BaseSpinner from './components/UI/BaseSpinner.vue';

//Paginate

// // import the package
// import VueAwesomePaginate from 'vue-awesome-paginate';

// // import the necessary css file
// import 'vue-awesome-paginate/dist/style.css';

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:5173';
const app = createApp(App);
// app.use();
app.use(router, axios, vuetify, bootstrap);
// app.use(VueTailwindPagination);
app.use(store);
// app.use();
app.component('base-card', BaseCard);
app.component('shopping-card', ShoppingCard);
app.component('main-products', MainProducts);
app.component('catalog-card', CatalogCard);
app.component('catalog-product', CatalogProduct);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
