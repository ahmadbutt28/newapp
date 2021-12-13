<template>
  <div class="background">
    <Navbar />
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="6" lg="8">
            <v-card
              class="transprant"
              style="background-color: rgba(255, 255, 255, 0.5)"
            >
              <v-card-text>
                <div class="mt-10 mb-10">
                  <h1 class="black--text text-center">
                    Upload and share your images.
                  </h1>
                </div>

                <div>
                  <v-container>
                    <div class="mt-3">
                      <vue-dropzone
                        ref="myVueDropzone"
                        id="dropzone"
                        :options="dropzoneOptions"
                      ></vue-dropzone>
                    </div>
                  </v-container>
                  <div class="text-center">
                    <!-- <v-btn color="blue" dark @click="sheet = !sheet">
                      START UPLOAD
                    </v-btn> -->
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
                        <!-- <div class="py-3">                            Drag and drop or paste images here to upload                          </div> -->
                      </v-sheet>
                    </v-bottom-sheet>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
// import Footer from "./Footer.vue";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    Navbar,
    // Footer,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        addRemoveLinks: true,
        maxFilesize: 15,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
};
</script>

<style>
.background {
  background: url("https://images.unsplash.com/photo-1548620798-a0e06ddcb8f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  height: 100%;
  background-size: cover;
}
.transprant {
  /* opacity: 0.5; */
  background-color: rgba(255, 255, 255, 0.8);
}
#dropzone {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
