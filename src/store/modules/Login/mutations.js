export default {
  // Setting Auth true OR false according to token
  initializeStore(state) {
    if (localStorage.getItem('token')) {
      state.token = localStorage.getItem('token');
      state.isAuthenticated = true;
    } else {
      state.token = '';
      state.isAuthenticated = false;
    }
  },
  // storing token in Store and updating Auth Status
  setToken(state, token) {
    state.token = token;
    state.isAuthenticated = true;
  },
  // removing token from Store and updating Auth Status
  removeToken(state) {
    state.token = '';
    state.isAuthenticated = false;
  },
};
