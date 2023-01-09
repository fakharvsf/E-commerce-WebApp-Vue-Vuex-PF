<template>
  <main-products>
    <div id="product-container">
      <span>OnSale</span>
      <div class="container">
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
  <div class="main-products">
    <footer>
      <nav
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <span v-for="(PageNo, index) in totalProducts" :key="index">
            <li v-if="index % 10 === 0">
              <a
                class="pagination-link"
                aria-label="Goto page 1"
                @click="nextPage(Math.ceil(PageNo / 10))"
                >{{ Math.ceil(PageNo / 10) }}</a
              >
            </li>
          </span>

          <!-- <li><span class="pagination-ellipsis">&hellip;</span></li> -->
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
import { toast } from 'bulma-toast';

export default {
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
    totalProducts: 100,
    nextPagea: null,
    previousPage: null,
  }),
  created() {
    this.noOfProducts = 9;
    this.productsToSkip = 0;
  },
  mounted() {
    this.getLatestProducts();
    document.title = 'Home | ShopCart';
  },
  methods: {
    nextPage(pageNo) {
      console.log(pageNo);
      this.productsToSkip = 0;
      this.nextPagea = pageNo + 1;
      console.log(
        '🚀 ~ file: ShopingCard.vue:142 ~ nextPage ~ this.nextPagea',
        this.nextPagea
      );

      this.previousPage = pageNo - 1;
      console.log(
        '🚀 ~ file: ShopingCard.vue:145 ~ nextPage ~ this.previousPage',
        this.previousPage
      );
      if (pageNo > 1 && pageNo < 10) {
        if (pageNo == 2) {
        }
        // this.productsToSkip += this.noOfProducts + 0;
        console.log(
          '🚀 ~ file: ShopingCard.vue:154 ~ nextPage ~ this.productsToSkip',
          this.productsToSkip
        );
      }
    },
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
    async getLatestProducts() {
      this.$store.commit({ type: 'setIsLoading', value: true });
      await axios
        .get(
          `https://dummyjson.com/products?limit=${this.noOfProducts}&skip=${this.productsToSkip}`
        )
        .then((response) => {
          this.latestProducts = response.data.products;

          console.log(this.latestProducts);
          this.$store.commit({ type: 'setIsLoading', value: false });
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
.main-products {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
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