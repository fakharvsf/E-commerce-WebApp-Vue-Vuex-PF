<template>
  <div class="container">
    <div class="row"></div>
  </div>
  <!-- -----------------------My account Card--------------------- -->
  <div class="container">
    <div class="row">
      <div class="col-xs-11 col-sm-11 col-md-11 col-lg-9 col-centered">
        <div class="row header">
          <div class="col-sm-4">
            <img :src="`${image}`" alt="" class="img-rounded img-responsive" />
          </div>

          <div class="col-sm-8 right-text header-box">
            <div class="row">
              <div class="col-12 login-button">
                <v-btn
                  variant="outlined"
                  type="submit"
                  size="large"
                  class="btn-dark btn-sm"
                  rounded="pill"
                  @click="logout"
                >
                  Logout
                </v-btn>
              </div>
            </div>

            <div class="row h-75">
              <div class="col-12 header-text">
                <h2>User: {{ username }}</h2>
              </div>
              <div class="col-12 header-text">
                <h2>Full Name: {{ fullName }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// importing Dependencies
import axios from 'axios';

export default {
  name: 'MyAccount',
  // Data
  data() {
    return {
      username: null,
      image: null,
      fullName: null,
    };
  },
  // on mount getting user credentials from localStorage
  mounted() {
    this.username = localStorage.getItem('username');
    this.fullName = localStorage.getItem('fullName');
    this.image = localStorage.getItem('profileImage');
  },
  methods: {
    // on Logout deleting user credentials from localStorage
    logout() {
      axios.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('userid');
      localStorage.removeItem('fullName');
      localStorage.removeItem('profileImage');
      // on Logout deleting user token from localStorage and pushing to home
      this.$store.commit({
        type: 'Login/removeToken',
      });
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
.col-centered {
  float: none;
  margin: 0 auto;
}

.header {
  margin-top: 24px;
}

.login-button {
  padding: 0;
  padding-left: 14px;
  display: flex;
}

@media (max-width: 575px) {
  .login-button {
    display: flex;
    align-items: center; /* align vertical */
    justify-content: center; /* align horizontal */
  }
}

.header-text {
  display: flex;
  align-items: center; /* align vertical */
}

@media (max-width: 575px) {
  .header-text {
    display: flex;
    align-items: center; /* align vertical */
    justify-content: center; /* align horizontal */
  }
}

.btn-login {
  background: #1e3161;
  border-color: green;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  margin-right: 14px;
}

.btn-login:hover {
  background: black;
  border-color: green;
}
</style>
