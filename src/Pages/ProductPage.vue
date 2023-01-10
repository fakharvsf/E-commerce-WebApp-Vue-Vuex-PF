<template>
  <keep-alive>
    <div>
      <div class="card mb-2 Products-Content flex-wrap">
        <div class="row no-gutters">
          <div class="col-md-4 mt-5">
            <div class="">
              <figure
                class="figure-zoom"
                style="
                  background-image: url(https://i5.walmartimages.com/asr/625fa51f-c13a-4150-8c56-25d16fb9c25f.a4d62fcf07bd843d480bcd9500e03b6c.jpeg?);
                "
              >
                <img
                  id="Product-image-show"
                  :src="`${src[currentSrc]}`"
                  class="card-img img-fluid"
                  alt="Guide to Web Design"
                  style="padding: 5px; border-radius: 8px"
                />
              </figure>

              <div
                style="height: 100px"
                class="d-flex nav nav-tabs flex-nowrap overflow-auto"
                id="nav-image"
                role="tablist"
              >
                <img
                  v-for="(image, index) in src"
                  :key="index"
                  href="#nav-f01img"
                  data-toggle="tab"
                  id="nav-fa01img-tab"
                  role="tab"
                  aria-controls="nav-f01img"
                  aria-selected="true"
                  class="p-1 h-100"
                  :src="`${image}`"
                  @click="changeImage"
                />
              </div>
            </div>
          </div>
          <!-- Description -->
          <div class="col-md-8 text-justify">
            <div class="card-body">
              <h4 class="card-title">
                <strong>{{ product.title }}</strong>
                <p>{{ product.description }}</p>
              </h4>
              <h4 class="card-title">
                <div class="d-flex discount-text">
                  <div>
                    <del class="text-danger">{{ '$' + product.price }}</del>
                  </div>
                  <strong style="color: green">${{ actualPrice }}</strong>
                </div>
              </h4>
              <button
                type="button"
                class="btn btn-outline-success"
                style="margin-top: 15px; margin-bottom: 20px"
                id="buy-now-btn"
              >
                Buy Now
              </button>
              <div class="mb-3">
                <input
                  type="number"
                  class="text-center"
                  v-model="productQuantity"
                />
                <button
                  type="button"
                  aria-describedby="button-addon2"
                  class="btn btn-outline-success"
                  style="margin-top: 15px; margin-bottom: 20px"
                  @click="addToCart"
                >
                  Add to Cart
                </button>
              </div>

              <div>
                <h4 style="font-weight: 400">Delivery Description</h4>
                <hr />
                <p class="card-text" style="padding: 5px">
                  Free shipping, arrives by Thu, Jan 5 to Sacramento, 95829
                  <br />Want it faster? Add an address to see options
                </p>
              </div>
            </div>
            <div>
              <div
                style="flex-wrap: wrap"
                class="d-flex nav nav-tabs mt-5"
                id="nav-dbda"
                role="tablist"
              >
                <a
                  class="nav-link active"
                  id="nav-power-tab "
                  style="flex-shrink: 0 !important"
                  data-toggle="tab"
                  href="#nav-description"
                  role="tab"
                  aria-controls="nav-description"
                  aria-selected="true"
                >
                  <div class="">Description</div>
                </a>
                <a
                  class="nav-link"
                  id="nav-capsule-tab "
                  style="flex-shrink: 0 !important"
                  data-toggle="tab"
                  href="#nav-benefituse"
                  role="tab"
                  aria-controls="nav-benefituse"
                  aria-selected="false"
                >
                  <div>BENEFITS & USES</div>
                </a>
                <a
                  class="nav-link"
                  id="nav-capsule-tab  "
                  style="flex-shrink: 0 !important"
                  data-toggle="tab"
                  href="#nav-dosage"
                  role="tab"
                  aria-controls="nav-dosage"
                  aria-selected="false"
                >
                  <div>Warrenty</div>
                </a>
              </div>
            </div>
            <div
              style="min-height: 200px"
              class="tab-content mt-2 ml-5 d-flex flex-wrap"
              id="nav-dbdaContent"
            >
              <div
                class="tab-pane fade show active"
                id="nav-description"
                role="tabpanel"
                aria-labelledby="nav-description-tab"
              >
                <div class="w-full text-base font-normal d-flex flex-wrap mr-5">
                  <div>
                    <div><strong>Category: </strong>{{ product.category }}</div>
                    <br />
                    <div><strong>Brand: </strong>{{ product.brand }}</div>
                    <br />
                    <div>
                      <strong>Details: </strong>{{ product.description }}
                    </div>
                    <br />
                    <div><strong>Phone Model: </strong>{{ product.title }}</div>
                    <br />
                    <div><strong>In Stock: </strong>{{ product.stock }}</div>
                    <br />
                    <div><strong>Ratings: </strong>{{ product.rating }}</div>
                    <br />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade show content-tohide"
                id="nav-benefituse"
                role="tabpanel"
                aria-labelledby="nav-benefituse-tab"
              >
                <div class="w-full text-base font-normal">
                  <ul class="list-disc">
                    <li class="">Modern design with linen upholstery</li>
                    <li class="">
                      Upholstered armrests provide extra seating comfort
                    </li>
                    <li class="">Sleek metal sleigh legs</li>
                    <li class="">Sturdy wood frame is built to last</li>
                    <li class="">
                      Split back design for multiple seating/lounging positions
                    </li>
                    <li class="">Sofa opens into a full size sleeper</li>
                    <li class="">
                      Multi-functional piece ideal for small living spaces
                    </li>
                    <li class="">Assembles quickly</li>
                    <li class="">Ships in one box</li>
                    <li class="">Product dimensions: 73"L x 34"W x 32"H</li>
                    <li class="">
                      Sleeping dimensions: 71"L x 43.5"W x 15.5"H
                    </li>
                    <li class="">
                      Shipping dimensions: 44.5"L x 36.5"W x 14"H
                    </li>
                    <li class="">Weight limit: 600 lbs</li>
                  </ul>
                </div>
              </div>
              <div
                class="tab-pane fade show"
                id="nav-dosage"
                role="tabpanel"
                aria-labelledby="nav-dosage-tab"
              >
                <div class="w-full text-base font-normal">
                  <strong>Warranty length</strong><br />
                  Walmart Warranty Applies <br /><strong
                    >Warranty information</strong
                  ><br />
                  1-Year Limited Warranty. <br /><strong
                    >⚠️WarningWARNING - California Proposition 65</strong
                  ><br />
                  Fomaldehyde
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </keep-alive>
</template>
<script>
import axios from 'axios';
import { toast } from 'bulma-toast';

export default {
  name: 'ProductPage',
  // props: [''],
  data() {
    return {
      cartLength: null,
      cart: null,
      product: {},
      src: [],
      currentSrc: 0,
      prodId: 1,
      quantity: 1,
      totalExpense: null,
      productQuantity: null,
      desprice: null,
    };
  },
  created() {
    this.prodId = this.$route.params.data;
    // console.log(this.prodId);
  },
  mounted() {
    this.getProduct();
  },
  computed: {
    actualPrice() {
      const price = Math.round(
        this.product.price -
          (this.product.discountPercentage * this.product.price) / 100
      );
      this.desprice = price;
      // console.log(price, this.desprice);

      return this.desprice;
    },
  },
  methods: {
    changeImage() {
      if (this.currentSrc < this.src.length - 1) {
        this.currentSrc++;
      } else {
        this.currentSrc = 0;
      }
    },
    async getProduct() {
      // const category_slug = this.$route.params.category;
      // const product_slug = this.$route.params.product;
      this.$store.commit({ type: 'setIsLoading', value: true });

      await axios
        .get(`https://dummyjson.com/products/${this.prodId}`)
        .then((response) => {
          // if (response.data.products.id < 10) {
          this.product = response.data;
          this.src = this.product.images;
          console.log(this.src, 'sssss');
          this.$store.commit({ type: 'setIsLoading', value: false });

          document.title = this.product.title + ' | ShopCart';
          // }
        })
        .catch((error) => {
          console.log(error);
          toast({
            message: 'Something went wrong.Please try again! 😒',
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right',
          });
        });
    },

    // ShopatCart() {
    //   this.totalExpense = this.desprice * this.productQuantity;
    //   this.$router.push({
    //     name: 'CartPage',
    //     params: {
    //       ProdQant: this.productQuantity,
    //       totalPrice: this.totalExpense,
    //     },
    //   });
    // },
    addToCart() {
      if (isNaN(this.productQuantity) || this.productQuantity < 1) {
        this.productQuantity = 1;
      }
      const item = {
        id: this.product.id,
        product: this.product.title,
        quantity: this.productQuantity,
        thumbnail: this.product.thumbnail,
        category: this.product.category,
        price: this.product.price,
        discountPercentage: this.product.discountPercentage,
      };
      this.$store.commit('Cart/addToCart', item);

      this.cart = this.$store.state.Cart.cart;
      // console.log(this.cart);

      this.$store.dispatch({
        type: 'Cart/checkCartLength',
      });
      toast({
        message: 'The Product was added to Cart',
        type: 'is-success',
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: 'bottom-right',
      });

      // this.$store.commit('', );
    },
  },
};
</script>
<style scoped>
.discount-text {
  column-gap: 1rem;
}
input[type='number'] {
  border-bottom: 1px solid black;
  width: 6rem;
  height: auto;
  padding: 0.5rem;
}
</style>
