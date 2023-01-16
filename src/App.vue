<template>
  <!-- Header -->
  <the-header class="sticky-top mb-1"></the-header>
  <!-- Loading Spinner With Condition -->
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <!-- Router view to be changed between routes -->
  <router-view v-slot="{ Component }" :key="$route.fullPath">
    <transition name="scale-slide">
      <component :is="Component" />
    </transition>
  </router-view>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <!-- Footer -->
  <footer-card v-if="!isLoading"></footer-card>
</template>
<script>
// Importingg Axios
import axios from 'axios';
// Importing Components
import TheHeader from './components/layout/TheHeader.vue';
import FooterCard from './components/layout/FooterCard.vue';
export default {
  // Registring Components
  components: {
    TheHeader,
    FooterCard,
  },
  // Data
  data() {
    return {
      cart: {
        items: [],
      },
      cartLength: null,
      isOnLoading: false,
    };
  },
  // Before Creation initializing store by committing Mutation
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
  // On Mount getting Cart from Store
  mounted() {
    this.cart = this.$store.state.Cart.cart;

    this.cartTotalLength; //to check cart length
  },

  computed: {
    //  /to check cart length
    cartTotalLength() {
      this.$store.dispatch({
        type: 'Cart/checkCartLength',
      });

      let totalLength = this.$store.state.Cart.cartLength;
      return totalLength;
    },
    //To check Loading Status
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
  /*background-color: #1e3161 !important;*/
  background: #0071dc !important;
}
/*Transition for router-view*/
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}
.scale-slide-enter-from {
  left: -100%;
}
.scale-slide-enter-to {
  left: 0%;
}
.scale-slide-leave-from {
  transform: scale(1);
}
.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>

