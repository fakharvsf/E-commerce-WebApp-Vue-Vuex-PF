// importing
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  // Setting Name Saping to true
  namespaced: true,
  state() {
    return {
      newProduct: [],
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
