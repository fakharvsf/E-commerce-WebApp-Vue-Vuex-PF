<template>
  <!-- Style Wrapper -->
  <main-products>
    <!-------------------------- Style Wrapper ------------------------------>

    <div id="product-container">
      <!-- Header -->

      <span>OnSale</span>
      <div class="container">
        <!-------------------------- Product Card ------------------------------>
        <div
          class="wrapper"
          v-for="(product, index) in latestProducts"
          :key="product.id"
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
                @focus="productid = product.id"
              >
                View Details
              </button>
              <!-- overlay -->

              <div class="add">
                <span class="product_fav"><i class="fas fa-edit"></i></span>
                <span class="product_fav"
                  ><i
                    class="fa fa-trash"
                    @click="deleteFromCart(product.id, index)"
                  ></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-products>
  <!------------------------------ Pagination Component --------------------->
  <pagination-card
    :totalPages="12"
    :perPage="10"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
  ></pagination-card>
</template>

<script>
// Importing Components and Dependencies
import axios from 'axios';
import { toast } from 'bulma-toast';
import PaginationCard from './PaginationCard.vue';

export default {
  // Defining Components
  components: { PaginationCard },
  //Data
  data: () => ({
    show: false,
    latestProducts: [],
    imagesrc: [],
    productid: null,
    showModal: false,
    addNewProduct: null,
    deletedProduct: null,
    noOfProducts: null,
    productsToSkip: null,

    currentPage: 1,
  }),

  //Before creation pages and Product limit define
  created() {
    this.noOfProducts = 9;
    this.productsToSkip = 0;
  },
  //On Mount Get data from API and Rename Page
  mounted() {
    this.getLatestProducts();
    document.title = 'Home | ShopCart';
  },
  // Defining different Methods
  methods: {
    // Function will execute every time when page is changed
    onPageChange(page) {
      this.latestProducts = [];
      // console.log('🚀 ~ file: ShopingCard.vue:123 ~ onPageChange ~ page', page);

      if (page == 1) {
        this.productsToSkip = 0;
        this.getLatestProducts();
      } else if (page > 1) {
        this.productsToSkip = this.noOfProducts * (page - 1);
        this.getLatestProducts();
      }

      this.currentPage = page;
    },
    // Sending Api Request to delete data
    async deleteFromCart(prodId, index) {
      await axios
        .delete(`https://dummyjson.com/products/${prodId}`)
        .then((response) => {
          this.deletedProduct = response;

          console.log(this.deletedProduct);
          this.latestProducts.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
          // Showing Toast Error on fail
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
    // Getting data from API Function
    async getLatestProducts() {
      // Setting Loading spinner to true
      this.$store.commit({ type: 'setIsLoading', value: true });
      await axios
        .get(
          `https://dummyjson.com/products?limit=${this.noOfProducts}&skip=${this.productsToSkip}`
        )
        .then((response) => {
          this.latestProducts = response.data.products;

          console.log(this.latestProducts);
          // Setting Loading spinner to false

          this.$store.commit({ type: 'setIsLoading', value: false });
        })
        .catch((error) => {
          console.log(error);
          // Showing Toast Error on fail
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
    // On clicking detail btn Routing user to ProductPage
    getIds() {
      this.$router.push({
        name: 'ProductPage',
        params: { data: this.productid },
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
  margin-top: 20px;
}

.thumbnail img {
  display: inline-block;
  width: 50px;
  height: 50px;
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
