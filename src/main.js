/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';
import BaseCard from './components/UI/MainProducts.vue';
import ShoppingCard from './components/layout/ShopingCard.vue';
import CatalogCard from './components/layout/CatalogCard.vue';
import CatalogProduct from './components/layout/CatalogProduct.vue';
import MainProducts from './components/UI/MainProducts.vue';
import store from './store/index';
// import store from './store/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import BaseSpinner from './components/UI/BaseSpinner.vue';

// Plugins
import { registerPlugins } from '@/plugins';

const app = createApp(App);

registerPlugins(app);
app.use(bootstrap);

app.use(store);
// app.use();
app.component('base-card', BaseCard);
app.component('shopping-card', ShoppingCard);
app.component('main-products', MainProducts);
app.component('catalog-card', CatalogCard);
app.component('catalog-product', CatalogProduct);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
