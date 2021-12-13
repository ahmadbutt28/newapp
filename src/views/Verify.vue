<template>
  <div>
    <!-- <Navbar/> -->
    <v-app>
      <v-main>
        <div class="background">
          <v-container fluid>
            <v-row align="center" justify="center" dense>
              <v-col cols="12" sm="8" md="6" lg="8">
                <v-card class="transprant">
                  <v-card-text>
                    <div class="mt-10 mb-10">
                      <h1 class="black--text text-center">
                        Your account is almost ready
                      </h1>
                      <h3 class="mt-3">
                        An email to [email address] has been sent with
                        instructions to activate your account. The activation
                        link is only valid for 48 hours. If you don't receive
                        the instructions try checking your junk or spam
                        filters..
                      </h3>
                    </div>
                    <div>
                      <div class="text-center">
                           <v-text-field
                v-model="user.otp"
                  :rules="otpRule"
                  type="text"
                  label="OTP"
                  placeholder="OTP"
                  prepend-inner-icon="mdi-tag "
                  required
                />
                        <v-btn  v-on:click="route" color="black" dark>
                          <!-- <router-link
                            class="text-decoration-none white--text"
                            to="/Login"
                            >Go to Login Page</router-link
                          > -->
                          Go to Login Page
                        </v-btn>

                        <v-bottom-sheet v-model="sheet">
                          <v-sheet class="text-center" height="200px">
                            <v-btn
                              class="mt-6"
                              text
                              color="red"
                              @click="sheet = !sheet"
                            >
                              close
                            </v-btn>
                            <div class="py-3">
                              <v-row>
                                <v-col cols="12" lg="4" class="mx-auto">
                                  <v-file-input
                                    label="File input"
                                    prepend-icon="mdi-cloud-upload"
                                    multiple
                                  ></v-file-input>
                                </v-col>
                              </v-row>
                            </div>
                          </v-sheet>
                        </v-bottom-sheet>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-main>
    </v-app>
  </div>
</template>
<script>
// import Navbar from '../views/Navbar'
export default {

  methods:{
    route(){
      this.$router.push({name: "Login"})
       this.$store.dispatch("otpData",this.user);
    }
    
  },
  components: {
    // Navbar,
  },
  data(){
    return{
      user: {
        otp:"",

      }
    }
  }
};
</script>
<style scoped>
.background {
  background-image: url("https://images.unsplash.com/photo-1548620798-a0e06ddcb8f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
}
.transprant {
  /* opacity: 0.5; background-color: aqua; */
  background-color: rgba(255, 255, 255, 0.2) !important;
}
</style>
