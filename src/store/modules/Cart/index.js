import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      newProduct: null,
      cart: {
        items: [],
      },
      cartLength: null,
    };
  },
  mutations,
  actions,
  getters,
};
