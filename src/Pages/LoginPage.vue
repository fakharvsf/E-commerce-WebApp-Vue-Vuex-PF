<template>
  <div class="container mb-2" id="container">
    <div>
      <div class="d-flex is-align-self-flex-start">
        <v-alert
          v-model="alert"
          border="start"
          variant="tonal"
          closable
          close-label="Close Alert"
          color="blue"
          title="User Information"
        >
          <div><strong>User Name: </strong>--> kminchelle</div>
          <strong>User Name: </strong>--> 0lelplR
        </v-alert>

        <div v-if="!alert" class="text-center align-center">
          <v-btn @click="alert = true"> Account Info </v-btn>
        </div>
      </div>
    </div>

    <div class="sign-in-form">
      <!-- Left (Form Image) -->
      <div class="form-image">
        <img src="../assets/Images/Loginpage/form-bg.png" alt="" />
      </div>
      <!-- Right (Form Content) -->
      <form class="form-content" @submit.prevent="logIn">
        <!-- Form Heading -->
        <div class="form-heading">
          <img src="../assets/Images/Loginpage/logo.png" alt="" />
          <h1>Login Form</h1>
          <p>Please fill out all the required fields to Login!</p>
        </div>
        <!-- Input Wrap -->
        <div class="input-wrap">
          <div class="input">
            <input
              type="text"
              id="username"
              placeholder=" "
              required="yes"
              v-model="userName"
            />
            <div class="label">
              <label for="username">Username</label>
            </div>
          </div>

          <div class="input">
            <input
              type="password"
              id="password"
              placeholder=" "
              required="yes"
              v-model="Password"
            />
            <div class="label">
              <label for="password">Password</label>
            </div>
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// importing Dependencies
import axios from 'axios';
import { toast } from 'bulma-toast';
import { logIn } from '../Services/UserService';
export default {
  // Data
  name: 'Login',
  data() {
    return {
      alert: true,
      userName: '',
      Password: '',
      errors: [],
    };
  },
  // on mount renaming the Page
  mounted() {
    document.title = 'Login | ShopCart';
  },
  methods: {
    // Login checking Authentication and Updating status
    async logIn() {
      // removing headers and token if existed
      axios.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('token');
      // Getting usernaem and Password
      const formData = {
        username: this.userName,
        password: this.Password,
      };
      // Api requesting by Post method
      logIn(formData)
        .then((response) => {
          // storing credentials in variables
          const username = response.data.username;
          const userId = response.data.id;
          const token = response.data.token;
          const profileImage = response.data.image;
          const firstName = response.data.firstName;
          const lastName = response.data.lastName;
          const fullName = firstName + ' ' + lastName;
          // Commiting Mutations
          this.$store.commit({
            type: 'Login/setToken',
            value: token,
          });

          // Setting headers, token and other credentials to local storage

          axios.defaults.headers.common['Authorization'] = 'Token ' + token;
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          localStorage.setItem('userid', userId);
          localStorage.setItem('profileImage', profileImage);
          localStorage.setItem('fullName', fullName);

          // Sending the user to the page from which they came from
          const toPath = this.$route.query.to || '/cart';
          this.$router.push(toPath);
        })
        // Showing error if failed
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              // Getting errors stored in the data if a property was wrong
              this.errors.push(`${property}: ${error.response.data[property]}`);
              // using Bulma toast to show Error Message
              toast({
                message: 'Something went wrong.Please try again! ????',
                type: 'is-danger',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
              });
            }
          } else {
            // Getting errors stored in the data
            this.errors.push('Something went wrong. Please try again');
            toast({
              message: 'Something went wrong.Please try again! ????',
              type: 'is-danger',
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: 'bottom-right',
            });
            // Logging the error in console
            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>
<style scoped !important>
/* Importing Fonts */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap');

/* Reset */
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: max-content;
  place-items: center;
  background-color: #f1f1f1 !important;
  font-weight: 300;
  padding: 0 24px;
}

/* ----------------------- Styling sign in form --------------------------- */
.sign-in-form {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 12px;
  background-color: #fff;
}

.form-image {
  display: none;
}

/* Form Content */
.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
}

/* From Heading */

.form-heading {
  text-align: center;
  margin-bottom: 32px;
}

.form-heading img {
  width: 7rem;
  height: auto;
}

h1 {
  font-size: 24px;
  font-weight: 500;
}

p {
  font-size: 14px;
}

/* Form fields */

.input-wrap {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
}

.input {
  display: flex;
  flex-direction: column;
  position: relative;
  border: none !important;
}

input {
  width: 100%;
  padding: 8px 0;
  border: none !important;
  border-bottom: 1px solid #181824;
  transition: 300ms;
  font-size: 14px;
  font-weight: 300;
}

input:focus {
  outline: none;
  box-shadow: 0 1px 0 0 #6236ff;
  border-color: #6236ff;
}

.label {
  display: flex;
  position: absolute;
  height: 100%;
  align-items: center;
  transition: 300ms ease;
}

label {
  display: block;
  font-size: 14px;
  color: #b0b0b0;
}

/* Label Effect */
input:focus + .label,
input:not(:placeholder-shown) + .label {
  transform: translateY(-27px);
}

input:focus + .label label,
input:not(:placeholder-shown) + .label label {
  font-weight: 500;
  color: initial;
}

button {
  padding: 12px 18px;
  border: none;
  align-self: flex-start;
  background-color: #6236ff;
  color: #fff;
  border-radius: 12px;
  transition: 300ms;
}

button:hover {
  cursor: pointer;
  background-color: #f1f1f1;
  color: #6236ff;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

/* Desktop Styles */
@media (min-width: 900px) {
  .sign-in-form {
    flex-direction: row;
  }
  /*Small Mobiles*/

  /* Image / Branding */

  .form-image {
    display: block;
    flex-basis: 45%;
    background-image: url('../assets/Images/Loginpage/bg-black-square.png');
    border-radius: 12px 0 0 12px;
  }

  .form-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px 0 0 12px;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
  }
}
@media only screen and (max-width: 395px) {
  #container {
    height: 130vh !important;
  }
}
</style>
