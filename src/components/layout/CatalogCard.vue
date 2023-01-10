<template>
  <main-products>
    <div id="d-flex">
      <div class="cat-heading"><h1>Featured Catagories</h1></div>
      <div>
        <div class="cat-Title">
          <h1><span>Everything a click away</span></h1>
        </div>
        <div class="container">
          <div class="row">
            <div
              class="col-md-4 col-sm-6 catalog-card"
              v-for="catagory in ProductbyCatagories"
              :key="catagory"
            >
              <div class="card mb-30">
                <a class="card-img-tiles" href="#" data-abc="true">
                  <div class="inner">
                    <div class="main-img">
                      <img
                        :src="`${catagory.products[0].images[0]}`"
                        alt="Category"
                      />
                    </div>
                    <div class="thumblist">
                      <img
                        :src="`${catagory.products[1].images[0]}`"
                        alt="Category"
                      /><img
                        :src="`${catagory.products[2].images[0]}`"
                        alt="Category"
                      />
                    </div></div
                ></a>
                <div class="card-body text-center">
                  <h4 class="card-title">
                    {{ catagory.products[0].category }}
                  </h4>
                  <p class="text-muted">Starting from $499</p>
                  <button
                    class="btn btn-outline-success btn-sm"
                    data-abc="true"
                    @click="getPCat"
                    @focus="productCat = catagory.products[0].category"
                  >
                    View Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-products>
</template>
<script>
import axios from 'axios';
import { toast } from 'bulma-toast';

export default {
  data: () => ({
    productCat: null,
    ProductbyCatagories: [],
    ProductCatagories: [],
  }),
  mounted() {
    this.getProductsCatagories();
  },
  methods: {
    //Getting Data from Backend
    async getProductsCatagories() {
      this.$store.commit({ type: 'setIsLoading', value: true });

      await axios
        .get('https://dummyjson.com/products/categories')
        .then((response) => {
          this.ProductCatagories = response.data;
          console.log(this.ProductCatagories);
          this.getProductsByCatagories(this.ProductCatagories);
          this.$store.commit({ type: 'setIsLoading', value: false });
          //Renaming Page title

          document.title = 'Categories | ShopCart';
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //Getting Product from each Category to show some results like pics
    async getProductsByCatagories(cat) {
      console.log(cat);
      for (let i = 0; i <= cat.length - 2; i++) {
        console.log(cat);

        await axios
          .get(`https://dummyjson.com/products/category/${cat[i]}`)
          .then((response) => {
            this.ProductbyCatagories.push(response.data);
            console.log(this.ProductbyCatagories, 'by');
          })
          .catch((error) => {
            console.log(error);
            //Showing Error using Bulma Toast
            toast({
              message: 'Something went wrong.Please try again! 😒',
              type: 'is-danger',
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: 'bottom-right',
            });
          });
      }
    },
    getPCat() {
      //Onclick Redirecting user to page containing only that category ptoducts
      console.log(this.productCat);
      this.$router.push({
        name: 'CatagoriesProduct',
        params: { productCata: this.productCat },
      });
    },
  },
};
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
.mt-100 {
  margin-top: 100px;
}
.card {
  border-radius: 7px !important;
  border-color: #e1e7ec;
}

.mb-30 {
  margin-bottom: 30px !important;
}

.card-img-tiles {
  display: block;
  border-bottom: 1px solid #e1e7ec;
}

a {
  color: #0da9ef;
  text-decoration: none !important;
}

.card-img-tiles > .inner {
  display: table;
  width: 100%;
}

.card-img-tiles .main-img,
.card-img-tiles .thumblist {
  display: table-cell;
  width: 65%;
  padding: 15px;
  vertical-align: middle;
}

.card-img-tiles .main-img > img:last-child,
.card-img-tiles .thumblist > img:last-child {
  margin-bottom: 0;
}

.card-img-tiles .main-img > img,
.card-img-tiles .thumblist > img {
  display: block;
  width: 100%;
  margin-bottom: 6px;
}
.thumblist {
  width: 35%;
  border-left: 1px solid #e1e7ec !important;
  display: table-cell;
  width: 65%;
  padding: 15px;
  vertical-align: middle;
}
.main-img {
  overflow: hidden;
}
.thumblist {
  overflow: hidden;
}
img {
  transition: transform 0.5s ease;
}
img:hover {
  transform: scale(1.5);
}
.card-img-tiles .thumblist > img {
  display: block;
  width: 100%;
  margin-bottom: 6px;
}
.btn-group-sm > .btn,
.btn-sm {
  padding: 0.45rem 0.5rem !important;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.cat-Title h1 {
  text-align: center;
  font-size: 50px;
  text-transform: uppercase;
  color: #222;
  letter-spacing: 1px;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
}
.cat-Title h1 span {
  margin-top: 5px;
  font-size: 15px;
  color: #444;
  word-spacing: 1px;
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;

  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 27px 0;
  grid-gap: 20px;
  align-items: center;
}

.cat-Title h1 span:after,
.cat-Title h1 span:before {
  content: ' ';
  display: block;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  height: 5px;
  background-color: #f8f8f8;
}

.cat-heading {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.cat-heading h1 {
  position: relative;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0px;
  text-transform: uppercase;
  width: 25rem;
  text-align: center;
  margin: auto;
  white-space: nowrap;
  border: 2px solid #222;
  padding: 5px 11px 3px 11px;
}
.cat-heading h1:before,
.cat-heading h1:after {
  background-color: #c50000;
  position: absolute;
  content: '';
  height: 7px;

  width: 7px;
  border-radius: 50%;
  bottom: 12px;
}
.cat-heading h1:before {
  left: -20px;
}
.cat-heading h1:after {
  right: -20px;
}
</style>
