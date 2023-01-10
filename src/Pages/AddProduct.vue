<template>
  <main-products>
    <!-- <form class="add-Product-form">
      <div class="form-group">
        <label for="exampleFormControlInput1">Product Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Product Name"
          v-model="newProduct.title"
        />
      </div> -->
    <!-- <div class="form-group">
        <label for="exampleFormControlInput2">Product Stock</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="Product Quantity"
          v-model="newProduct.stock"
        />
      </div> -->
    <!-- <div class="form-group">
        <label for="exampleFormControlInput3">Product Price(in USD($))</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="Product Price"
          v-model="newProduct.price"
        />
      </div> -->
    <!-- <div class="form-group">
        <label for="exampleFormControlInput4">Discount Percentage</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput4"
          placeholder="Product Price"
          v-model="newProduct.discountPercentage"
        />
      </div> -->

    <!-- <div class="form-group">
        <label for="exampleFormControlTextarea1">Product Description</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="newProduct.description"
        ></textarea> -->
    <!-- </div> -->
    <!-- <div class="form-group">
        <label for="exampleFormControlFile1">Image Url</label>
        <input
          type="url"
          class="form-control"
          id="exampleFormControlFile1"
          v-model="newProduct.thumbnail"
        />
      </div> -->
    <!-- <router-link to="/home">
        <button type="submit" class="btn btn-dark" @click="AddNewProduct">
          Add A Product
        </button>
      </router-link> -->
    <!-- </form> -->
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
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
              clearable
              v-model="newProduct.stock"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Product Price"
              prefix="$"
              variant="outlined"
              clearable
              v-model="newProduct.price"
            ></v-text-field> </v-col
          ><v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Discount Percentage"
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
              variant="outlined"
              v-model="newProduct.thumbnail"
            ></v-text-field>
          </v-col>
          <div class="d-flex justify-center align-center w-100">
            <div>
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

<script>
import axios from 'axios';
export default {
  data() {
    return {
      rules: [(v) => v.length <= 50 || 'Max 50 characters'],
      newProduct: {
        title: null,
        stock: null,
        price: null,
        description: null,
        thumbnail: null,
        discountPercentage: null,
      },
      newProduct2: {
        id: 1,
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
    document.title = 'New Product | ShopCart';
  },
  methods: {
    getLatestProducts() {
      const alpha = axios
        .post('https://dummyjson.com/products/add', {
          title: this.newProduct.title,
          price: this.newProduct.price,
          thumbnail: this.newProduct.thumbnail,
          stock: this.newProduct.stock,
          discountPercentage: this.newProduct.discountPercentage,
        })
        .then((response) => {
          this.latestProducts = response.data;

          this.$store.commit({
            type: 'Cart/newProduct',
            value: this.newProduct2,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    AddNewProduct() {
      this.getLatestProducts();
    },
  },
};
</script>
