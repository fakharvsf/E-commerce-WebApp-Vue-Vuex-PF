<template>
  <main-products>
    <div>
      <div class="form-title mt-3">
        <h1>Add New Product</h1>
      </div>
    </div>
    <!-- --------------Vuetify Form----------------- -->
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <!-- --------------Getting form data----------------- -->

            <v-text-field
              label="Product Name"
              variant="outlined"
              clearable
              v-model="newProduct.title"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Product Stock"
              variant="outlined"
              type="number"
              clearable
              v-model="newProduct.stock"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Brand Name"
              variant="outlined"
              clearable
              v-model="newProduct.brand"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Product Category"
              variant="outlined"
              clearable
              v-model="newProduct.category"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Product Price"
              type="number"
              prefix="$"
              variant="outlined"
              clearable
              v-model="newProduct.price"
            ></v-text-field> </v-col
          ><v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Discount Percentage"
              prefix="%"
              type="number"
              variant="outlined"
              clearable
              v-model="newProduct.discountPercentage"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <!-- v-model="form.bio" -->
            <v-textarea
              color="teal"
              prepend-icon="mdi-comment"
              counter="50"
              :rules="rules"
              v-model="newProduct.description"
            >
              <template v-slot:label>
                <div>Product Description <small>(Required)</small></div>
              </template>
            </v-textarea>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field
              label="image URL"
              prepend-icon="mdi-link"
              variant="outlined"
              v-model="newProduct.thumbnail"
            ></v-text-field>
          </v-col>
          <div class="d-flex justify-center align-center w-100">
            <div>
              <!-- --------------Submit Form Button ----------------- -->

              <v-btn
                variant="outlined"
                size="large"
                color="info"
                rounded="pill"
                @click="AddNewProduct"
              >
                <v-icon>mdi-pencil</v-icon>
                Add Product
              </v-btn>
            </div>
          </div>
        </v-row>
      </v-container>
    </v-form>
  </main-products>
</template>
<style scoped>
/* === HEADING STYLE=== */
.form-title h1 {
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: #202020;
  text-transform: uppercase;
  word-spacing: 1px;
  letter-spacing: 2px;
}
</style>

<script>
//Importing Modules & Dependencies
// import axios from 'axios';
import { getLatestProduct } from '../Services/UserService';
export default {
  //Data

  data() {
    return {
      rules: [(v) => v.length <= 50 || 'Max 50 characters'],
      newProduct: {
        title: '',
        stock: null,
        price: null,
        discountPercentage: 12.96,

        brand: '',
        category: '',
        description: '',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/1/1.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
        ],
      },
      newProduct2: {
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/1/1.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
        ],
      },

      show: false,
      latestProducts: [],
    };
  },
  mounted() {
    //Changing Title of Page

    document.title = 'New Product | ShopCart';
  },
  methods: {
    //NewProduct Addition in API

    getLatestProduct() {
      this.$store.commit({ type: 'setIsLoading', value: true });
      // const alpha = axios
      //   .post('https://dummyjson.com/products/add', this.newProduct2)
      getLatestProduct(this.newProduct2)
        .then((response) => {
          this.latestProducts = response.data;
          console.log(
            '🚀 ~ file: AddProduct.vue:147 ~ .then ~ response.data',
            response.data
          );

          this.$store.commit({
            type: 'Cart/newProduct',
            value: this.newProduct2,
          });
          this.$store.commit({ type: 'setIsLoading', value: false });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    AddNewProduct() {
      this.getLatestProduct();
    },
  },
};
</script>
