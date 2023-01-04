import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      newProduct: 5,
      cart: {
        items: [],
      },
    };
  },
  mutations,
  actions,
  getters,
};
