<template>
  <!-- Wrapper -->
  <main-products>
    <div id="d-flex">
      <!-- Heading -->
      <div class="cat-heading"><h1>Featured Catagories</h1></div>
      <div>
        <div class="cat-Title">
          <h1><span>Everything a click away</span></h1>
        </div>
        <!--  Card for Catagories -->
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
                  <p class="text-muted">
                    Starting from ${{ Math.min(catagory.products[0].price) }}
                  </p>
                  <v-btn
                    variant="outlined"
                    size="large"
                    class="btn-dark btn-sm"
                    rounded="pill"
                    @click="getPCat"
                    @focus="productCat = catagory.products[0].category"
                  >
                    View Products
                  </v-btn>
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
import {
  getProductsCatagories,
  getProductsByCatagories,
} from '../../Services/UserService';
import { toast } from 'bulma-toast';

export default {
  //initialize Vriables
  data: () => ({
    productCat: null,
    ProductbyCatagories: [],
    ProductCatagories: [],
  }),
  mounted() {
    //On Mounting Getting data from API
    this.getProductsCatagories();
  },
  methods: {
    //Getting Data from Backend
    getProductsCatagories() {
      //Starting loding component
      this.$store.commit({ type: 'setIsLoading', value: true });

      getProductsCatagories()
        .then((response) => {
          this.ProductCatagories = response.data;
          console.log(this.ProductCatagories);
          this.getProductsByCatagories(this.ProductCatagories);

          //Stoping loding component
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
      for (let i = 0; i <= cat.length - 2; i++) {
        getProductsByCatagories(cat[i])
          .then((response) => {
            this.ProductbyCatagories.push(response.data);
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
      this.$router.push({
        name: 'CatagoriesProduct',
        params: { productCata: this.productCat },
      });
    },
  },
};
</script>

<style scoped>
/* ++++++++++++++++++++++++++++Importing Font++++++++++++++++++++++++++++*/
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';

/* ++++++++++++++++++++++++++++Card Styling++++++++++++++++++++++++++++*/
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
/* ++++++++++++++++++++++++++++Card Tyles Styling++++++++++++++++++++++++++++*/

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
/* ++++++++++++++++++++++++++++Image transition++++++++++++++++++++++++++++*/
img {
  transition: transform 0.5s ease;
}
img:hover {
  transform: scale(1.5);
}

/* ++++++++++++++++++++++++++++Side Images Styling++++++++++++++++++++++++++*/

.card-img-tiles .thumblist > img {
  display: block;
  width: 100%;
  margin-bottom: 6px;
}

.btn-sm {
  padding: 0.45rem 0.5rem !important;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

/* ++++++++++++++++++++++++++++Header Styling++++++++++++++++++++++++++*/

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
  grid-template-rows: 1.688rem 0;
  grid-gap: 1.25rem;
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
  width: 16rem;
  text-align: center;
  margin: auto;
  white-space: nowrap;
  border: 2px solid #222;
  padding: 0.3rem 0.68rem 0.18rem 0.68rem;
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
  left: -1.25rem;
}
.cat-heading h1:after {
  right: -1.25rem;
}
</style>
