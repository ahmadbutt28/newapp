<template>
  <div>
    <v-app-bar color="#4d5156" dense dark>
      <v-toolbar-title>Snap Share</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon to="Dashboard">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon to="Gallery">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <div>
        <v-row justify="space-around">
          <v-col cols="auto">
            <v-dialog transition="dialog-top-transition" max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="transparent" v-bind="attrs" v-on="on">
                  <v-icon>mdi-cloud-upload</v-icon>
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="#4d5156" dark
                    >Drag and Drop your images here</v-toolbar
                  >
                  <v-card-text>
                    <div class="text-h2 pa-12">
                      <vue-dropzone
                        ref="myVueDropzone"
                        id="dropzone"
                        :options="dropzoneOptions"
                      ></vue-dropzone>
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </div>

      <v-btn icon to="/Update">
        <v-icon>mdi-update</v-icon>
      </v-btn>
      <v-btn icon to="/Reset">
        <v-icon>mdi-key</v-icon>
      </v-btn>
      <v-btn icon to="/Login">
        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <v-menu left bottom>
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template> -->

        <!-- <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list> -->
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
// import Navbar from "./Navbar.vue";
// import Footer from "./Footer.vue";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    // Navbar,
    // Footer,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 15,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
};
</script>
