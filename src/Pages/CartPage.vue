<template>
  <main-products>
    <section class="h-100 h-custom" style="background-color: #d2c9ff">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
            <div
              class="card card-registration card-registration-2"
              style="border-radius: 15px"
            >
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-lg-8">
                    <div class="p-5">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                          mb-5
                        "
                      >
                        <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 class="mb-0 text-muted">
                          {{ cartTotalLength }} items
                        </h6>
                      </div>
                      <hr class="my-4" />

                      <div
                        class="
                          row
                          mb-4
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                        v-for="(item, index) in cartItems"
                        :key="item.id"
                      >
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img
                            :src="`${item.thumbnail}`"
                            class="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted">{{ item.category }}</h6>
                          <h6 class="text-black mb-0">{{ item.product }}</h6>
                        </div>
                        <div
                          class="
                            col-md-3 col-lg-3 col-xl-2
                            d-flex
                            justify-content-around
                            gap-3
                          "
                        >
                          <div
                            class="
                              d-flex
                              flex-column
                              justify-content-center
                              align-center
                            "
                          >
                            <div><strong>Price: </strong></div>
                            <div>
                              <sub>
                                <del class="text-danger">{{
                                  item.price
                                }}</del></sub
                              >
                              <strong class="text-success">{{
                                Math.round(
                                  item.price -
                                    (item.discountPercentage * item.price) / 100
                                )
                              }}</strong>
                            </div>
                          </div>

                          <div class="d-flex flex-column align-center">
                            <div><strong>Quantity:</strong></div>
                            <div class="d-flex align-center">
                              <button
                                class="btn btn-link px-2"
                                @click.prevent="decrementQuantity(item, index)"
                              >
                                <i class="fas fa-minus"></i>
                              </button>
                              <span id="form1">{{ item.quantity }}</span>
                              <button
                                class="btn btn-link px-2"
                                @click.prevent="incrementQuantity(item)"
                              >
                                <i class="fas fa-plus"></i>
                              </button>
                            </div>
                          </div>

                          <!-- :value="item.quantity" -->
                          <!-- <input
                            id="form1"
                            min="0"
                            name="quantity"
                            @focus="value = 'item.quantity'"
                            type="number"
                            v-model="tempValue"
                            class="form-control form-control-sm"
                          />

                           -->
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">
                            <div><strong>Total: </strong></div>

                            ${{
                              Math.round(
                                item.price -
                                  (item.discountPercentage * item.price) / 100
                              ) * item.quantity
                            }}
                          </h6>
                          <!-- <h6>{{ cartTotalLength }}</h6> -->
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <!-- <div
                          v-if="item.isShow"
                          ></div> -->
                          <div class="text-muted btn">
                            <i
                              class="fas fa-times"
                              @click="deleteFromCart(index)"
                            ></i>
                          </div>
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="pt-5">
                        <h6 class="mb-0">
                          <router-link to="/home" class="text-body"
                            ><i class="fas fa-long-arrow-alt-left me-2"></i>Back
                            to shop</router-link
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 bg-grey">
                    <div class="p-5">
                      <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase">
                          Products {{ cartItems.length }}
                        </h5>
                        <h5>
                          ${{ cartTotalPrice }}

                          <!-- {{
                            Math.round(
                              item.price -
                                (item.discountPercentage * item.price) / 100
                            ) * 1
                          }} -->
                        </h5>
                      </div>

                      <h5 class="text-uppercase mb-3">Shipping</h5>

                      <div class="mb-4 pb-2">
                        <select class="select">
                          <option value="1">Standard-Delivery- $5.00</option>
                        </select>
                      </div>

                      <h5 class="text-uppercase mb-3">Give code</h5>

                      <div class="mb-5">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="form3Examplea2"
                            >Enter your code</label
                          >
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-5">
                        <h5 class="text-uppercase">Total price</h5>
                        <h5>$ {{ cartTotalPrice + 5 }}</h5>
                      </div>
                      <router-link to="/cart/checkout">
                        <button
                          type="button"
                          class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Checkout
                        </button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main-products>
</template>
<script>
export default {
  name: 'CartPage',
  data() {
    return {
      isShow: false,
      cartItems: null,
      prodQuantity: null,
      length: null,
      itemQuant: null,
      tempValue: null,
    };
  },
  watch: {
    isShow() {
      console.log(
        '🚀 ~ file: CartPage.vue:198 ~ isShow ~ this.isShow',
        this.isShow
      );
    },
  },
  created() {
    this.$store.commit({ type: 'setIsLoading', value: true });

    this.cartItems = this.$store.state.Cart.cart.items;
    this.$store.commit({ type: 'setIsLoading', value: false });

    console.log(
      '🚀 ~ file: CartPage.vue:175 ~ mounted ~ this.cartItems',
      this.cartItems.length
    );
  },
  mounted() {
    document.title = 'Cart | ShopCart';

    this.cartTotalPrice;
    // this.cartTotalLength;
    // console.log(
    //   '🚀 ~ file: CartPage.vue:234 ~ mounted ~     this.cartTotalLength',
    //   this.cartTotalLength
    // );
    console.log(
      '🚀 ~ file: CartPage.vue:271 ~ mounted ~ this.cartTotalPrice',
      this.cartTotalLength
    );
  },

  computed: {
    cartTotalLength() {
      return this.cartItems.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },

    cartTotalPrice() {
      return this.cartItems.reduce((acc, curVal) => {
        let Price = Math.round(
          curVal.price - (curVal.discountPercentage * curVal.price) / 100
        );
        return (acc += Price * curVal.quantity);
      }, 0);
    },
  },
  methods: {
    deleteFromCart(index) {
      console.log(this.isShow);
      this.cartItems.splice(index, 1);
      this.checkLength();
      this.updateCart();

      console.log(this.cartItems);
      // isShow = !isShow;
      // console.log(index);
      // this.cartItems[index].this.isShow = !this.cartItems[index].this.isShow;
      // let isShow = this.isShow;
      // this.cartItems[index].isShow = !this.cartItems[index].isShow;
      // console.log(this.isShow);
      // isShow = this.isShow;
      // console.log(this.isShow);
    },
    incrementQuantity(item) {
      item.quantity += 1;
      this.checkLength();

      this.updateCart();
    },
    checkLength() {
      this.$store.dispatch({
        type: 'Cart/checkCartLength',
      });
    },
    decrementQuantity(item, index) {
      item.quantity -= 1;
      this.checkLength();
      if (item.quantity === 0) {
        this.checkLength();
        this.deleteFromCart(index);
      }
      this.updateCart();
    },
    updateCart() {
      localStorage.setItem('cart', JSON.stringify(this.$store.state.Cart.cart));
    },
    // decreaseCart(index) {
    //   this.$store.commit({
    //     type: 'Cart/cartLengthDecrease',
    //     value: this.itemQuant,
    //   });

    //   this.tempValue = this.tempValue - 1;
    //   console.log(
    //     '🚀 ~ file: CartPage.vue:191 ~ addToCart ~ this.itemQuant',
    //     this.tempValue,
    //     index
    //   );
    // },
  },
};
</script>
<style scoped>
#form1 {
  width: 1.1rem;
}
@media (min-width: 992px) {
  .card-registration-2 .bg-grey {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}

@media (max-width: 991px) {
  .card-registration-2 .bg-grey {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}
</style>