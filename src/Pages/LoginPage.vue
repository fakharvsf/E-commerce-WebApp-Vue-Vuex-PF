<template>
  <div class="container">
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
          <v-alert dense outlined type="error">
            I'm a dense alert with the <strong>outlined</strong> prop and a
            <strong>type</strong> of error
          </v-alert>

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      userName: '',
      Password: '',
      errors: [],
      // verificationData: [],
    };
  },
  methods: {
    async logIn() {
      axios.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('token');
      const formData = {
        username: this.username,
        password: this.password,
      };

      await axios
        .post('https://dummyjson.com/auth/login', formData)
        .then((response) => {
          const token = response.data.auth_token;
          this.$store.commit('setToken', token);

          axios.defaults.headers.common['Authorization'] = 'Token ' + token;
          console.log(response);

          localStorage.setItem('token', token);
          const toPath = this.$route.query.to || '/cart';
          this.$router.push(toPath);
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors.push('Something went wrong. Please try again');

            console.log(JSON.stringify(error));
          }
        });

      // console.log(this.verificationData);

      // console.log(this.verificationData);
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap');

/* Reset */

.container {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f1f1f1;
  font-weight: 300;
  padding: 0 24px;
}

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
}

input {
  width: 100%;
  padding: 8px 0;
  border: none;
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
</style>