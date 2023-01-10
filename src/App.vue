<template>
  <the-header class="sticky-top mb-1"></the-header>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>

  <router-view> </router-view>

  <footer-card v-if="!isLoading"></footer-card>
</template>
<script>
import axios from 'axios';

import TheHeader from './components/layout/TheHeader.vue';
import FooterCard from './components/layout/FooterCard.vue';
export default {
  components: {
    TheHeader,
    FooterCard,
  },
  data() {
    return {
      cart: {
        items: [],
      },
      cartLength: null,
      isOnLoading: false,
    };
  },

  beforeCreate() {
    // this.$store.commit('Cart/initializeStore');
    this.$store.dispatch('Cart/getCartOfUser');
    this.$store.dispatch('Cart/checkCartLength');
    this.cart = this.$store.state.Cart.cart;
    console.log(this.cart, 'im cart');

    this.$store.commit('Login/initializeStore');
    const token = this.$store.state.Login.token;
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Token' + token;
    } else {
      axios.defaults.headers.common['Authorization'] = '';
    }
  },
  mounted() {
    this.cart = this.$store.state.Cart.cart;

    this.cartTotalLength;

    console.log(
      '🚀 ~ file: App.vue:28 ~ mounted ~ this.cartllos',
      this.$store.state.isLoading
    );
  },

  computed: {
    cartTotalLength() {
      this.$store.dispatch({
        type: 'Cart/checkCartLength',
      });

      let totalLength = this.$store.state.Cart.cartLength;
      return totalLength;
    },
    isLoading() {
      console.log(this.$store.state.isLoading);
      this.isOnLoading = this.$store.state.isLoading.value;

      return this.isOnLoading;
    },
  },
};
</script>
<style>
#app {
  background: #f2f2f2;
  transition: all ease 0.2s;
}

.navbar {
  background-color: #1e3161 !important;
}
</style>

