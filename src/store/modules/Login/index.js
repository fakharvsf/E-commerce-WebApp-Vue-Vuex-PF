import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      isAuthenticated: false,
      token: '',
    };
  },
  mutations,
  actions,
  getters,
};
