<template>
  <main-products>
    <v-container>
      <div class="page-checkout">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h1 class="title">Checkout</h1>
          </div>
          <!-- CheckOut Summary -->
          <div class="column is-12 box">
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th class="discount">Discount</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in cart" :key="item.id">
                  <td>{{ item.product }}</td>
                  <td>$ {{ item.price }}</td>
                  <td>{{ item.quantity }}</td>
                  <td class="discount">{{ item.discountPercentage }}%</td>
                  <td>${{ getItemTotal(item).toFixed(2) }}</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{{ cartTotalLength }}</td>
                  <td></td>
                  <td class="discount"></td>

                  <td>
                    <strong>${{ cartTotalPrice.toFixed(2) }}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="column is-12 box">
            <h2 class="subtitle">Shipping details</h2>

            <p class="has-text-grey mb-4">* All fields are required</p>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <!-- --------------Getting form data----------------- -->

                    <v-text-field
                      v-model="firstName"
                      :rules="nameRules"
                      :counter="10"
                      label="First Name"
                      required
                      variant="outlined"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="lastName"
                      :rules="nameRules"
                      :counter="10"
                      required
                      label="Last Name"
                      variant="outlined"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Email"
                      variant="outlined"
                      v-model="email"
                      :rules="emailRules"
                      required
                      clearable
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      :rules="numberRules"
                      v-model="number"
                      required
                      label="Phone Number"
                      variant="outlined"
                      type="number"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      :rules="nameRules"
                      v-model="address"
                      required
                      label="Address"
                      variant="outlined"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      :rules="nameRules"
                      v-model="city"
                      required
                      label="City"
                      variant="outlined"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      :rules="numberRules"
                      v-model="zipCode"
                      required
                      label="Zip Code"
                      variant="outlined"
                      clearable
                    ></v-text-field>
                  </v-col>

                  <div class="d-flex justify-center align-center w-100">
                    <div>
                      <!-- --------------Submit Form Button and Validation ----------------- -->

                      <v-btn
                        variant="outlined"
                        size="large"
                        class="btn-dark"
                        rounded="pill"
                        @click="validate"
                      >
                        <v-icon
                          ><i
                            class="fa-sharp fa-solid fa-credit-card"
                          ></i> </v-icon
                        >&nbsp Pay
                      </v-btn>
                    </div>
                  </div>
                </v-row>
              </v-container>
            </v-form>
          </div>
        </div>
      </div>
    </v-container>
  </main-products>
</template>
<style scoped>
@media only screen and (max-width: 425px) {
  .discount {
    display: none;
  }
}
</style>

<script>
export default {
  name: 'Checkout',
  data() {
    return {
      cart: [
        {
          price: 0,
          quantity: 0,
        },
      ],
      valid: true,
      firstName: '',
      lastName: '',
      number: '',
      address: '',
      city: '',
      zipCode: '',
      // Rules for Form Validation
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      numberRules: [
        (v) => !!v || 'Number is required',
        (v) => (v && v.length < 12) || 'Number must be 11 characters',
      ],

      card: {},
    };
  },
  mounted() {
    // Getting Cart
    document.title = 'Checkout | ShopCart';
    this.cart = this.$store.state.Cart.cart.items;
    console.log(
      '🚀 ~ file: CheckoutPage.vue:139 ~ mounted ~ this.cart',
      this.cart
    );
    this.getCart();
  },
  methods: {
    // Getting Cart function
    getCart() {
      setTimeout(() => {
        this.cart = this.$store.state.Cart.cart.items;
        console.log(
          '🚀 ~ file: CartPage.vue:5555 ~ setTimeout ~ this.cartItems',
          this.cart
        );
      }, 4000);
    },
    // Sum of total items sum
    getItemTotal(item) {
      return (
        item.quantity *
        Math.round(item.price - (item.discountPercentage * item.price) / 100)
      );
    },
    // Validation Function
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert('Form is valid');
    },
  },
  computed: {
    // Sum of total price sum

    cartTotalPrice() {
      return this.cart.reduce((acc, curVal) => {
        let Price = Math.round(
          curVal.price - (curVal.discountPercentage * curVal.price) / 100
        );
        return (acc += Price * curVal.quantity);
      }, 0);
    },
    // Sum of total length sum

    cartTotalLength() {
      return this.cart.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
  },
};
</script>
