<template>
  <section class="page-404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 d-flex flex-column justify-center">
          <div
            class="
              col-sm-10 col-sm-offset-1
              text-center
              d-flex
              flex-column
              justify-center
            "
          >
            <div class="four-zero-four-bg">
              <h1 class="text-center">404</h1>
            </div>

            <div class="contant-box-404">
              <h3 class="h2">Look like you're lost</h3>

              <p>the page you are looking for not avaible!</p>
              <router-link to="/home">
                <v-btn
                  variant="outlined"
                  size="large"
                  class="btn-dark"
                  rounded="pill"
                >
                  <v-icon>mdi-home</v-icon>
                  Go to Home
                </v-btn>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/*======================
    404 page
=======================*/

.page-404 {
  padding: 40px 0;
  background: #fff;
  font-family: 'Arvo', serif;
}

.page-404 img {
  width: 100%;
  margin: 0 auto;
}

.four-zero-four-bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four-zero-four-bg h1 {
  font-size: 80px;
}

.four-zero-four-bg h3 {
  font-size: 80px;
}

a {
  text-decoration: none;
}
.contant-box-404 {
  margin-top: -50px;
}
</style>
