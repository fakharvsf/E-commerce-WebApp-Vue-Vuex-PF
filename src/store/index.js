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
});
export default store;
