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
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput2">Product Quantity</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="Product Quantity"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput3">Product Price(in USD($))</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="Product Price"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Product Description</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Choose Image</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <button type="submit" class="btn btn-dark">Add A Product</button>
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
      name: null,
      quantity: null,
      price: null,
      description: null,
      show: false,
      latestProducts: [],
    };
  },
  mounted() {
    this.getLatestProducts();
  },
  methods: {
    getLatestProducts() {
      const alpha = axios
        .post('https://dummyjson.com/products/add', {
          title: 'BMW Pencil',
        })
        .then((response) => {
          // if (response.data.products.id < 10) {
          this.latestProducts = response.data;
          console.log(
            '🚀 ~ file: AddProduct.vue:80 ~ .then ~ this.latestProducts',
            this.latestProducts
          );

          // console.log(this.latestProducts[6]);
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>