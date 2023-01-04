<template>
  <main-products>
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Product Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Product Name"
          v-model="newProduct.title"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput2">Product Stock</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="Product Quantity"
          v-model="newProduct.stock"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput3">Product Price(in USD($))</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="Product Price"
          v-model="newProduct.price"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput4">Discount Percentage</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput4"
          placeholder="Product Price"
          v-model="newProduct.discountPercentage"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Product Description</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="newProduct.description"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Image Url</label>
        <input
          type="url"
          class="form-control"
          id="exampleFormControlFile1"
          v-model="newProduct.thumbnail"
        />
      </div>
      <router-link to="/home">
        <button type="submit" class="btn btn-dark" @click="AddNewProduct">
          Add A Product
        </button>
      </router-link>
    </form>
  </main-products>
</template>
<style scoped>
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      newProduct: {
        title: null,
        stock: null,
        price: null,
        description: null,
        thumbnail: null,
        discountPercentage: null,
      },

      show: false,
      latestProducts: [],
    };
  },
  // mounted() {
  //   this.getLatestProducts();
  // },
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
            value: this.latestProducts,
          });

          // this.$router.push({
          //   name: 'home',
          //   // path: '/home',
          //   params: { NewProduct: this.latestProducts },
          // });
          // console.log(
          //   '🚀 ~ file: AddProduct.vue:80 ~ .then ~ this.latestProducts',
          //   this.latestProducts
          // );
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