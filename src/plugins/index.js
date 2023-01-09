/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader';
import vuetify from './vuetify';
import router from '../router/router';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:5173/';

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify, axios).use(router);
}
