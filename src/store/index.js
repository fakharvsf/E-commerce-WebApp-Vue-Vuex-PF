import { createStore } from 'vuex';
import LoginModule from './modules/Login/index';
import CartModule from './modules/Cart/index';

const store = createStore({
  modules: { Cart: CartModule, Login: LoginModule },
  state() {
    return {
      isLoading: false,
    };
  },
  getters: {},
  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload;
      console.log(
        '🚀 ~ file: index.js:16 ~ setIsLoading ~ state.isLoading',
        state.isLoading
      );
    },
  },
});
export default store;
