<template>
  <!-- This folder contains a form for login and its validation comes from validation.js file -->
  <v-app class="background">
    <div class="backgruond">
      <v-main class="d-flex justify-center align-center mt-16 mb-16">
        <v-col cols="10" lg="4" class="mx-auto">
          <v-card class="pa-4 transprant">
            <div class="text-center">
              <!-- <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar> -->
              <h2 class="black--text">Login</h2>
            </div>
            <v-form @submit.prevent="submitHandler" ref="form">
              <v-card-text>
                <v-text-field
                 v-model="userData.email"
                  :rules="emailRule"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  prepend-inner-icon="mdi-email"
                  required
                />
                <v-text-field
                 v-model="userData.password"
                  :rules="passwordRule"
                  :type="passwordShow ? 'text' : 'password'"
                  label="Password"
                  placeholder="Password"
                  prepend-inner-icon="mdi-key"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShow = !passwordShow"
                  required
                />
                <!-- <v-switch label="Remember me" color="blue-grey darken-1"></v-switch> -->
                <div class="float-right">
                  <router-link class="text-decoration-none" to="/Signup">
                    doesn't have an account?
                  </router-link>
                </div>
                <div>
                  <router-link class="text-decoration-none" to="/Forpass">
                    Forgot Password?
                  </router-link>
                </div>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn :loading="loading" type="submit" color="black">
                  <span class="white--text px-8">Login</span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-main>
      <v-snackbar top color="red" v-model="snackbar">
        Please Enter Correct Email or Password
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
// Importing validation
import { emailRule, passwordRule } from "../views/validation/validation";

export default {
  name: "Login",

  data: () => ({
    userData:{
      email : "",
      password: "",
    },
    emailRule: emailRule,
    passwordRule: passwordRule,
    loading: false,
    snackbar: false,
    passwordShow: false,
  }),
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
         this.$store.dispatch("loginUser", this.userData);
          this.$router.push({ name: "Dashboard" });
      }
    },
  },
};
</script>
<style scoped>
.background {
  background: url("https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
}
.transprant {
  /* opacity: 0.5; background-color: aqua; */
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
