<template>
  <header class="sticky-top">
    <!--Bootstrap nav bar  toggle  -->
    <div id="nav__bg-color">
      <nav class="navbar navbar-expand-lg navbar-dark nav-bar-container">
        <router-link to="/home" class="navbar-brand">ShopCart</router-link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="Navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="navbar-collapse Form-content collapse"
          id="navbarTogglerDemo02"
        >
          <!-- SearchBar -->
          <div id="form-Disp">
            <form class="d-flex my-2 my-lg-0 my-search-form">
              <div class="search-bar">
                <i class="uil uil-search"></i>
                <input
                  type="search"
                  placeholder="Search for anything"
                  id="feed-search"
                  v-model="searchQuerry"
                />
              </div>
              <div>
                <v-btn
                  variant="outlined"
                  id="btn__override"
                  color="white"
                  size="large"
                  type="submit"
                  class="btn-dark btn-sm"
                  rounded="pill"
                  @click.prevent="getQuery"
                >
                  Search
                </v-btn>
              </div>
            </form>
          </div>
          <div class="d-flex ms-auto">
            <ul class="navbar-nav align-center">
              <li class="nav-item active">
                <router-link to="/home" class="nav-link home-btn"
                  >Home <span class="sr-only">(current)</span></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/addproduct" class="nav-link"
                  >Add Product</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/catagories" class="nav-link cat-bbtn"
                  >Catagories</router-link
                >
              </li>
              <li class="d-flex">
                <span
                  class="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    class="fa-solid fa-cart-shopping cart-anker"
                    @click="toCart"
                  >
                    <strong class="cart-count">{{ getLength }}</strong>
                  </i>
                </span>
              </li>
              <li class="ms-1">
                <!-- User Details and Auth Update -->
                <div class="collapse navbar-collapse" id="navbar-list-4">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <div v-if="$store.state.Login.isAuthenticated">
                        <router-link to="/my-acount" class="nav-link">
                          <img
                            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                            width="40"
                            height="40"
                            class="rounded-circle"
                          />
                        </router-link>
                      </div>
                      <div v-else>
                        <router-link to="/login" class="nav-link">
                          <v-btn
                            variant="outlined"
                            id="btn__override"
                            color="white"
                            size="large"
                            type="submit"
                            class="btn-dark btn-sm"
                            rounded="pill"
                            @click.prevent="getQuery"
                          >
                            Search
                          </v-btn>
                        </router-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
// importing
import axios from 'axios';
export default {
  // Data
  data() {
    return {
      searchQuerry: null,
      length: null,
    };
  },
  // getting length of cart from store
  computed: {
    getLength() {
      this.length = this.$store.state.Cart.cartLength;

      return this.length;
    },
  },
  //methods
  methods: {
    //Route to cart
    toCart() {
      this.$router.push({
        path: '/cart',
      });
    },
    //Route to Search Page

    getQuery() {
      this.$router.push({
        name: 'SearchPage',
        params: { qr: this.searchQuerry },
      });
    },
  },
};
</script>
  <style scoped>
header {
  box-shadow: 0 8px 8px -4px black;
}
#btn__override {
  color: whitesmoke;
}
#btn__override:hover {
  background-color: #424649;
}

#nav__bg-color {
  background-color: #0071dc;
}
.is-active {
  display: none;
}
.nav-bar-container {
  width: 80%;
  margin: 0 auto;
}
.search-bar input[type='search']::placeholder {
  color: gray;
}

input[type='search'] {
  background: transparent;
  width: 15vw;
  color: var(--color-dark);
  margin-left: 1rem;
  font-size: 0.9rem;
  outline: 0;
  border: none;
}
.navbar-dark .search-bar {
  background: hsl(252, 30%, 95%);
  border-radius: 2rem;
  padding: 0.4rem;
}

.d-flex {
  gap: 1rem;
}
.cart-anker {
  position: relative;
}
.cart-count {
  background: red;
  color: white;
  border-radius: 0.8rem;
  font-size: 0.7rem;
  width: -moz-fit-content;
  width: fit-content;
  padding: 0.1rem 0.4rem;
  position: absolute;
  top: -0.5rem;
  right: -01rem;
}
.Form-content {
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
}
a {
  text-decoration: none;
}

@media only screen and (max-width: 650px) {
  .my-search-form {
    display: flex;
    flex-direction: column;
  }
  input[type='search'] {
    width: 25vw;
  }
}
@media only screen and (min-width: 990) {
  .is-active {
    display: block;
  }
}
</style>
