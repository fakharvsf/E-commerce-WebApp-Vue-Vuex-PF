<template>
  <header>
    <!--Bootstrap nav bar  toggle  -->
    <div id="nav__bg-color">
      <nav
        class="navbar sticky-top navbar-expand-lg navbar-dark nav-bar-container"
      >
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

        <div class="navbar-collapse Form-content" id="navbarTogglerDemo02">
          <!-- :class="{ 'is-active': showMenu }" -->
          <div id="form-Disp">
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
            <ul class="navbar-nav align-center">
              <li class="nav-item active">
                <router-link to="/home" class="nav-link home-bbtn"
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
                <div>
                  <a
                    class="nav-link"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="../../assets/Images/HomePage/Shopping cart circle icon.png"
                      width="50"
                      height="50"
                      class="rounded-circle"
                    /><strong>(0)</strong>
                  </a>
                </div>
                <!-- <router-link> -->
                <div class="collapse navbar-collapse" id="navbar-list-4">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                          width="40"
                          height="40"
                          class="rounded-circle"
                        />
                      </a>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <button class="dropdown-item" @click="checkAuth">
                          Login
                        </button>
                        <button class="dropdown-item" href="#">Log Out</button>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- <div class="nav-buttons"></div> -->

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
      // showMenu: true,
      // showMobileMenu: false,
    };
  },
  // created() {
  //   window.addEventListener('resize', this.CheckDisplay);
  // },
  // destroyed() {
  //   window.removeEventListener('resize', this.CheckDisplay);
  // },
  methods: {
    // showMe() {
    //   this.showMenu = !this.showMenu;
    //   this.showMobileMenu = !this.showMobileMenu;
    //   console.log(screen.width);
    // },
    // CheckDisplay() {
    //   console.log(this.showMenu);
    //   if (screen.width > 991) {
    //     this.showMobileMenu = false;
    //     console.log(screen.width, this.showMobileMenu);
    //   }
    // },
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
  background-color: #1e3161;
  color: whitesmoke;
}
#btn__override:hover {
  background-color: #68aaaa;
}

#nav__bg-color {
  background-color: #1e3161;
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