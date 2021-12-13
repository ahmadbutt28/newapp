<template>
  <v-app class="background">
    <div class="backgruond">
      <v-main class="d-flex justify-center align-center mt-16 mb-16">
        <v-col cols="10" lg="4" class="mx-auto">
          <v-card class="pa-4 transprant">
            <div class="text-center">
              <h2 class="black--text">Signup</h2>
            </div>
            <v-form @submit.prevent="submitHandler" ref="form">
              <v-card-text>
                <v-text-field
                  v-model="userData.name"
                  :rules="UsernameRule"
                  label="Username"
                  placeholder="John Doe"
                  prepend-inner-icon="mdi-account-circle"
                  required
                >
                </v-text-field>
                <v-text-field
                  v-model="userData.age"
                  :type="'number'"
                  :rules="numberRule"
                  label="Age"
                  placeholder="23"
                  prepend-inner-icon="mdi-calendar-month"
                  required
                >
                </v-text-field>
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

                 <v-text-field
                  v-model="userData.password_confirmation"
                  :rules="passwordRule"
                  :type="passwordShow ? 'text' : 'password'"
                  label="Conform Password"
                  placeholder="Password"
                  prepend-inner-icon="mdi-key"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShow = !passwordShow"
                  required
                />
                <v-file-input
                v-on:change="storeImg"
                 
                  :rules="imageRule"
                  label="File input"
                  filled
                  shaped
                  prepend-icon="mdi-camera"
                ></v-file-input>
                <!-- <v-switch label="Remember me" color="blue-grey darken-1"></v-switch> -->
                <div>
                  <router-link class="text-decoration-none" to="/Login">
                    Have an account?
                  </router-link>
                </div>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn type="submit" color="black">
                  <span class="white--text px-8">Sign Up </span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-main>
       <v-snackbar top color="red" :value="getSnackbarStutes" timeout="5000">
       {{getSnackbarErrorMsg}}
    </v-snackbar>
    </div>
  </v-app>
</template>

<script>
// Importing validation
import {
  UsernameRule,
  emailRule,
  passwordRule,
  numberRule,
  imageRule,
} from "./validation/validation.js";
import {mapGetters} from 'vuex'

export default {
  name: "Signup",

  data: () => ({
    userData: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      age: "",
      profile_image: "",
    },
     snackbar:false,
    UsernameRule: UsernameRule,
    numberRule: numberRule,
    emailRule: emailRule,
    passwordRule: passwordRule,
    imageRule: imageRule,
    passwordShow: false,
  }),

  methods: {
        storeImg(event) {
      let vm = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          vm.userData.profile_image = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
    submitHandler() {
      if (this.$refs.form.validate()) {
         this.$store.dispatch("updateSnackBarStatus");
        this.$store.dispatch("loadUser", this.userData);
        console.log(this.userData)
      }
    },
   
  },
    computed:{
        ...mapGetters(['getSnackbarStutes']),
        ...mapGetters(['getSnackbarErrorMsg'])
    }
};
</script>
<style scoped>
.background {
  background: url("https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
}
.transprant {
  /* opacity: 0.5; */
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
