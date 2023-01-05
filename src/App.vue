<template>
  <the-header class="sticky-top"></the-header>

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
      cartLength: null,
    };
  },
  // watch: {
  //   cart() {
  //     this.cart = this.$store.state.Cart.cart;
  //     console.log("🚀 ~ file: App.vue:27 ~ cart ~ this.cart", this.cart)
  //   },
  // },
  beforeCreate() {
    this.$store.commit('Cart/initializeStore');
  },
  mounted() {
    // this.$watch(()=>{

    // })
    this.cart = this.$store.state.Cart.cart;
    // console.log(this.$store.state.Cart.cart);
    this.cartTotalLength;

    // console.log(
    //   '🚀 ~ file: App.vue:28 ~ mounted ~ this.$store.state.cart.items;',
    //   this.cart.items
    // );
    console.log(
      '🚀 ~ file: App.vue:28 ~ mounted ~ this.cart',
      this.cart.items.length
    );
  },

  computed: {
    cartTotalLength() {
      let totalLength = 0;

      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity;
      }
      this.cartLength = totalLength;
      console.log(
        '🚀 ~ file: App.vue:48 ~ cartTotalLength ~ this.cartLength',
        this.cartLength
      );
      this.$store.commit({
        type: 'Cart/cartLengthUpdate',
        value: this.cartLength,
      });
      // this.$store.commit('', );

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
  transition: all ease 0.2s;
}

button:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  /*box-shadow: 0 0 5px #ccc;*/
  /* drop-shadow(0 0 5px #ccc)*/
}
a:hover {
  color: #000;

  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 4px 8px rgba(0, 0, 0, 0.15),
    inset 0px 8px 16px rgba(0, 0, 0, 0.15);
  transition: 0.2s;
  transform: translateY(2px);
}
</style>

