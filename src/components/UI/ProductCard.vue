<template>
  <main-products>
    <div id="product-container">
      <span>Related Products</span>
      <div class="container">
        <div
          class="wrapper"
          v-for="product in latestProducts"
          :key="product.category"
        >
          <div class="card">
            <span class="off bg-dark"
              >-{{ Math.round(product.discountPercentage) }}% OFF</span
            >
            <div class="text-center">
              <img
                class="main-image"
                :src="`${product.thumbnail}`"
                width="200"
              />
            </div>
            <div class="thumbnail text-center">
              <img
                onclick="change_image(this)"
                :src="`${product.images[0]}`"
                width="70"
              />
              <img
                onclick="change_image(this)"
                :src="`${product.images[0]}`"
                width="70"
              />
            </div>
            <div class="about text-center">
              <h6>{{ product.title }}</h6>
              <div class="d-flex justify-center">
                <div>
                  <del class="text-danger">{{ '$' + product.price }}</del>
                </div>
                <strong style="color: green"
                  >${{
                    Math.round(
                      product.price -
                        (product.discountPercentage * product.price) / 100
                    )
                  }}</strong
                >
              </div>
            </div>
            <div
              class="
                cart-button
                mt-3
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <button
                class="btn btn-dark text-uppercase details-bbtn"
                @click="getIds"
                @focus="productId = product.id"
              >
                View Details
              </button>
              <!-- overlay -->

              <div class="add">
                <span class="product_fav"><i class="fa fa-heart"></i></span>
                <span class="product_fav"
                  ><i class="fa fa-shopping-cart"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-products>
</template>

<script>
// import axios from 'axios';
import { productsOfCategory } from '../../Services/UserService';
import { toast } from 'bulma-toast';

export default {
  props: {
    category: {
      type: String,
      required: true,
      default: 'smartphones',
    },
  },
  data: () => ({
    show: false,
    latestProducts: [],
    imagesrc: [],
    productId: null,
    showModal: false,
    prodCata: null,
  }),
  mounted() {
    this.productsOfCategory();
  },
  created() {
    //When this page is created we get the Catagory
    this.prodCata = this.category;
    // console.log(this.prodCata, 'wwwwwwww');
  },
  methods: {
    //To get products of specific Category
    productsOfCategory() {
      this.$store.commit({ type: 'setIsLoading', value: true });

      productsOfCategory(this.prodCata)
        .then((response) => {
          // if (response.data.products.id < 10) {
          this.latestProducts = response.data.products;
          this.$store.commit({ type: 'setIsLoading', value: false });

          document.title =
            this.latestProducts[0].category.toUpperCase() + ' | ShopCart';

          console.log(this.latestProducts[0].category);
          // }
        })
        .catch((error) => {
          console.log(error);
          //Error using bulma toast
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
    //Getting ids to show a specific product on next page
    getIds() {
      console.log(this.productId, this.prodCata);
      this.$router.replace({
        name: 'ProductPage',
        params: { data: this.productId },
      });
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* gap: 1rem; */
  flex-wrap: wrap;
  overflow: hidden;
}

#product-container > span {
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: 900;
  font-size: 2.5rem;
}
@media only screen and (max-width: 785px) {
  .container {
    justify-content: center;
    gap: 1rem;
    --bs-gutter-x: 0;
    max-width: 625px;
  }
}
.d-flex {
  gap: 1rem;
}
/* Card for Products */

.card {
  border: none;
  padding: 10px;
  width: 19rem;
  margin-bottom: 1rem;

  position: relative;
}

.off {
  position: absolute;
  left: 76%;
  top: 3%;
  width: 72px;
  text-align: center;
  height: 25px;
  line-height: 8px;
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.thumbnail {
  margin-top: 1.25rem;
}

.thumbnail img {
  display: inline-block;
  width: 3.125rem;
  height: 3.125rem;
  border: 1px solid #eee;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
}

.thumbnail img:hover {
  border: 1px solid #00000059;
}

.about {
  margin-top: 1.25rem;
}

.product_fav i {
  line-height: 2.5rem;
  color: #343a40;
  font-size: 15px;
}

.product_fav {
  display: inline-block;
  width: 2.3rem;
  height: 2.4rem;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 11%;
  text-align: center;
  cursor: pointer;
  margin-left: 3px;

  transition: all 200ms ease;
}

.product_fav:hover {
  background: #343a40;
}

.product_fav:hover i {
  color: #fff;
}
.main-image {
  height: 45vh;
}
</style>
