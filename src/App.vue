<template>
  <the-header class="sticky-top"></the-header>
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
    this.$store.commit('Cart/initializeStore');
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
  // watch: {
  //   isOnLoading() {
  //     console.log(
  //       '🚀 ~ file: App.vue:30 ~ isOnLoading ~ isOnLoading',
  //       this.isOnLoading
  //     );
  //   },
  // },
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
/*
button:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);

}
a:hover {
  color: #000;

  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 4px 8px rgba(0, 0, 0, 0.15),
    inset 0px 8px 16px rgba(0, 0, 0, 0.15);
  transition: 0.2s;
  transform: translateY(2px);
}*/
.navbar {
  background-color: #1e3161 !important;
}
</style>

