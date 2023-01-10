<template>
  <div>
    <footer>
      <div class="main">
        <div class="col1">
          <h3 class="heading">About the store</h3>
          <ul>
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> Become a customer </a>
            </li>
            <li>
              <a href="#"> About us </a>
            </li>
            <li>
              <a href="#"> FAQ </a>
            </li>
            <li>
              <a href="#"> Return policy </a>
            </li>
            <li>
              <a href="#"> Contact us </a>
            </li>
          </ul>
        </div>

        <div class="col2">
          <h3 class="heading">Language</h3>
          <div class="languages">
            <a href="#">Deutsch</a>
            <a href="#">English</a>
            <a href="#">Espaṅol</a>
            <a href="#">Français</a>
            <a href="#">Indonesian</a>
            <a href="#">Italian</a>
          </div>
        </div>

        <div class="col3">
          <h3 class="heading">Get in touch</h3>
          <div class="social">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <p class="terms">
        <a href="#">Terms of purchase</a>
        <a href="#">Security and privacy</a>
        <a href="#">Newsletter</a>
      </p>
    </footer>
  </div>
</template>
<style scoped>
/* -----------------FOOTER DSIGN--------------- */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  font-family: open sans;
  transition: ease 0.5s;
  text-decoration: none;
  color: white;
  list-style-type: none;
}

footer {
  background: #1e3161;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 15px;
  box-shadow: #2f4374 0 10px 20px 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.main {
  width: 100%;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
.heading {
  margin-bottom: 15px;
}
.col1 {
  flex: 1;
  min-width: 200px;
}
.col2 {
  flex: 2;
  min-width: 300px;
}
.col3 {
  flex: 1;
  min-width: 200px;
}

.col1 a {
  display: inline-block;
  padding: 7px 0;
  font-size: 14px;
}
.col1 a:hover {
  color: #58bed5;
}

.col2 .languages {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
}
.col2 a {
  display: inline-block;
  padding: 3px 5px;
  border-radius: 3px;
}
.col2 a:hover {
  background: #58bed5;
}

.social {
  display: flex;
  gap: 20px;
}
.col3 ion-icon {
  font-size: 30px;
}
.social a:hover ion-icon {
  color: #5ac1d8;
}

.terms {
  display: flex;
  gap: 20px;
  font-size: 12px;
}
.terms a {
  color: #7783a0;
}
</style>
