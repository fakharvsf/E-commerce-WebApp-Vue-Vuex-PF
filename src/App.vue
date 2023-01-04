<template>
  <the-header></the-header>

  <router-view> </router-view>

  <footer-card></footer-card>
</template>
<script>
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
    };
  },

  beforeCreate() {
    this.$store.commit('Cart/initializeStore');
  },
  mounted() {
    this.cart = this.$store.state['Cart/cart'];
    console.log(this.$store.state['Cart/newProduct'], 'im ne one');
    console.log(
      '🚀 ~ file: App.vue:28 ~ mounted ~ this.$store.state.cart.items;',
      this.$store.state.cart
    );
    console.log('🚀 ~ file: App.vue:28 ~ mounted ~ this.cart', this.cart);
  },
  computed: {
    cartTotalLength() {
      let totalLength = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity;
      }
      console.log(
        '🚀 ~ file: App.vue:37 ~ cartTotalLength ~ totalLength',
        totalLength
      );
      return totalLength;
    },
  },
};
</script>
<style>
#app {
  background: #f2f2f2;
}
</style>

