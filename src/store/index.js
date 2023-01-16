import { createStore } from 'vuex';
// Importing Store Modules
import LoginModule from './modules/Login/index';
import CartModule from './modules/Cart/index';

const store = createStore({
  // Registring Modules
  modules: { Cart: CartModule, Login: LoginModule },
  // Main State
  state() {
    return {
      isLoading: false,
      category: null,
    };
  },
  getters: {},
  // Mutation for Loading Spinner
  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload;
      console.log(
        '🚀 ~ file: index.js:16 ~ setIsLoading ~ state.isLoading',
        state.isLoading
      );
    },
    getCategory(state, payload) {
      state.category = payload;
      console.log(
        '🚀 ~ file: index.js:28 ~ getCategory ~ state.category',
        state.category
      );
    },
  },
});
export default store;
