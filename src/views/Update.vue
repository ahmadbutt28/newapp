<template>
  <div>
    <Navbar />
    <v-app class="background">
      <div class="backgruond">
        <v-main class="d-flex justify-center align-center mt-16 mb-16">
          <v-col cols="10" lg="4" class="mx-auto">
            <v-card
              class="pa-4 transprant"
              style="background-color: rgba(255, 255, 255, 0.4)"
            >
              <div class="text-center">
                <h2 class="black--text">Update Profile</h2>
              </div>
              <v-form @submit.prevent="submitHandler" ref="form">
                <v-card-text>
                  <div class="float-left">
                   <v-avatar size="150" class="mb-10">
                        <img :src="currentUser.user_profile_image_path+'/'+currentUser.profile_image"  alt="upload"  />
                      </v-avatar>
                      </div>
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
                  <!-- <v-text-field
                  v-model="email"
                    :rules="emailRule"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    prepend-inner-icon="mdi-email"
                    required
                  /> -->
                  <!-- <v-text-field
                  v-model="password"
                    :rules="passwordRule"
                    :type="passwordShow ? 'text' : 'password'"
                    label="Password"
                    placeholder="Password"
                    prepend-inner-icon="mdi-key"
                    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordShow = !passwordShow"
                    required
                  /> -->
                  <!-- <v-text-field
                    :rules="passwordRule"
                    :type="passwordShow ? 'text' : 'password'"
                    label="Confirm Password"
                    placeholder="Password"
                    prepend-inner-icon="mdi-key"
                    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordShow = !passwordShow"
                    required
                  /> -->
                  <v-file-input
                    v-on:change="storeImg"
                    :rules="imageRule"
                    label="File input"
                    filled
                    shaped
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                  <!-- <v-switch label="Remember me" color="blue-grey darken-1"></v-switch> -->
                  <!-- <div>
                  <router-link class="text-decoration-none" to="/Login">
                    Have an account?
                  </router-link>
                </div> -->
                </v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn type="submit" color="black">
                    <span class="white--text px-8">Update </span>
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-main>
        <!-- <v-snackbar top color="red" v-model="snackbar">
        Please Enter Correct Email or Password
      </v-snackbar> -->
      </div>
    </v-app>
  </div>
</template>

<script>
// Importing validation
import Navbar from "./Navbar.vue";
import {
  UsernameRule,
  emailRule,
  passwordRule,
  numberRule,
  imageRule,
} from "./validation/validation.js";

export default {
  components: {
    Navbar,
  },
  name: "Signup",

  data: () => ({
     currentUser: "",
    userData: {
      name: "",
      age: "",
      profile_image: "",
    },
    UsernameRule: UsernameRule,
    numberRule: numberRule,
    emailRule: emailRule,
    passwordRule: passwordRule,
    imageRule: imageRule,
    loading: false,
    snackbar: false,
    passwordShow: false,
  }),
  mounted() {
       this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.currentUser)
    this.userData.name=this.currentUser.name;
    this.userData.age=this.currentUser.age;
    this.userData.profile_image=this.currentUser.profile_image;
    console.log(this.userData)
  },
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
          this.$store.dispatch("updateProfile", this.userData);
        // this.loading = true;
        
      }
    },
    //  log(){

    //   localStorage.setItem("currentUser","");
    //   this.$router.push({name:"Signup"});
    // },
  },
};
</script>
<style scoped>
.background {
  background: url("https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
}
.transprant {
  /* opacity: 0.5; */
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
