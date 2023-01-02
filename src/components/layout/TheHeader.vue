<template>
  <header>
    <!--Bootstrap nav bar  toggle  -->
    <div id="nav__bg-color">
      <nav
        class="navbar sticky-top navbar-expand-lg navbar-dark nav-bar-container"
      >
        <router-link to="/home" class="navbar-brand">ShopCart</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="Navbar-toggler"
          @click="showMe"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="navbar-collapse Form-content"
          id="navbarTogglerDemo02"
          data-toggle="collapse"
        >
          <!-- :class="{ 'is-active': showMenu }" -->
          <div id="form-Disp" :class="{ 'is-active': showMobileMenu }">
            <form class="d-flex my-2 my-lg-0">
              <div class="search-bar">
                <i class="uil uil-search search-api"></i>
                <input
                  type="search"
                  placeholder="Search for anything"
                  id="feed-search"
                />
              </div>
              <div>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  id="btn__override"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div class="d-flex ms-auto">
            <ul class="navbar-nav" :class="{ 'is-active': showMobileMenu }" is->
              <li class="nav-item active">
                <router-link to="/home" class="nav-link home-bbtn"
                  >Home <span class="sr-only">(current)</span></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/addproduct" class="nav-link"
                  >Add a Product</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/catagories" class="nav-link cat-bbtn"
                  >Catagories</router-link
                >
              </li>
              <li class="d-flex">
                <!-- <router-link> -->
                <div class="nav-buttons">
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    id="btn__override"
                    @click="checkAuth"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    id="btn__override"
                  >
                    <i class="fa fa-shopping-cart"></i>Cart <strong>(0)</strong>
                  </button>
                </div>
                <!-- </router-link> -->
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
  <script>
export default {
  data() {
    return {
      showMenu: true,
      showMobileMenu: false,
    };
  },
  created() {
    window.addEventListener('resize', this.CheckDisplay);
  },
  destroyed() {
    window.removeEventListener('resize', this.CheckDisplay);
  },
  methods: {
    showMe() {
      this.showMenu = !this.showMenu;
      this.showMobileMenu = !this.showMobileMenu;
      console.log(screen.width);
    },
    CheckDisplay() {
      console.log(this.showMenu);
      if (screen.width > 991) {
        this.showMobileMenu = false;
        console.log(screen.width, this.showMobileMenu);
      }
    },
    checkAuth() {
      const Token = localStorage.getItem('token');
      if (Token != null) {
        alert('you are already signned in');
      } else {
        this.$router.replace('/login');
      }
    },
  },
};
</script>
  <style scoped>
#btn__override {
  background-color: #008080;
  color: whitesmoke;
}

#nav__bg-color {
  background-color: #325454;
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
.Form-content {
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
}
a {
  text-decoration: none;
}

@media only screen and (max-width: 650px) {
  #form-Disp {
    display: none;
  }
}
@media only screen and (min-width: 990) {
  .is-active {
    display: block;
  }
}
</style>