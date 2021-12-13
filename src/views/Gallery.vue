<template>
  <div>
    <v-app class="bg">
      <Navbar />
      <v-main class="pa-0">
        <v-container>
          <v-container>
           <v-row align="center" justify="center" dense>
          <v-col cols="12"  xs="3" sm="3" md="3" lg="2">
             <v-avatar size="150" color="indigo">
              <img  src="https://images.unsplash.com/photo-1637441394275-7bc7779f3838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </v-avatar>
          </v-col>
           <v-col cols="12"  xs="9" sm="9" md="9" lg="10">
            <h1>Ahmad Hassan Butt</h1>
            <p>Ahmadhassanbutt15@gmail.com</p>
            <a>0 Following | 0 Followers</a>  
          </v-col>
           </v-row>
        </v-container>
          <div>
            <v-col class="d-flex align-center justify-center">
              <h1 class="display-3">Gallery</h1>
            </v-col>
          </div>
          <v-toolbar
            class="align-center justify-center mb-2"
            rounded="lg"
            fixed
            color="#4d5156"
            elevation="2"
            elevate-on-scroll
          >
            <div class="d-flex align-center justify-center">
              <v-list class="d-flex flex-row ma-0 pa-0">
                <v-list-item
                  v-for="item in baritems"
                  :key="item.title"
                  @click="router(item.val, item.title)"
                >
                  <v-list-item-content>
                    <v-list-item-title class="body-1 font-weight-bold">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>

            <v-spacer></v-spacer>
            <div class="d-flex align-end justify-center">
              <v-col cols="12">
                <v-text-field
                  label="Search"
                  color="white"
                  outlined
                  placeholder="Search images"
                  append-icon="mdi-magnify"
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </div>
          </v-toolbar>
        </v-container>
        <v-container>
          <div>
            <v-row>
              <v-col class="d-flex align-center justify-center">
                <h1 class="display-1">{{ category }}</h1>
              </v-col>
            </v-row>
            <v-row class="d-flex flex-row">
              <v-col
                v-for="n in picture"
                :key="n"
                class="d-flex child-flex"
                cols="12"
                lg="4"
                md="4"
                sm="6"
                xs="10"
              >
                <v-card rounded="lg" elevation="5" class="d-flex justify-end">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn text id="imgbtn" dark v-bind="attrs" v-on="on">
                        <v-icon size="25px" class="ms-5 me-n3"
                          >mdi-dots-vertical</v-icon
                        >
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        id="listitem"
                        v-for="(item, index) in imageSetting"
                        :key="index"
                      >
                        <v-list-item-title
                          id="imgeMenu"
                          text
                          @click="router(Ahmad)"
                          ><v-icon class="me-2">{{ item.icon }}</v-icon
                          >{{ item.title }}</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-menu>

                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Navbar from "../views/Navbar.vue";

export default {
  name: "Gallery",
  picture: 10,
  components: {
    Navbar,
  },
  data() {
    return {
      drawer: false,
      picture: 10,
      category: "",
      user: {
        initials: "Ahmad Hassan Butt",
        fullName: "Ahmad Hassan Butt",
        email: "Ahmadhassanbutt15@gmail.com",
      },
      items: [
        { title: "Home", icon: "mdi-collage" },
        { title: "Gallery", icon: "mdi-image-multiple" },
        { title: "About Us", icon: "mdi-information" },
        { title: "Logout", icon: "mdi-logout" },
      ],
      imageSetting: [
        { title: "Public", icon: "mdi-earth" },
        { title: "Private", icon: "mdi-file-lock" },
        { title: "Hidden", icon: "mdi-lock-alert" },
        { title: "Share", icon: "mdi-share" },
        { title: "Get link", icon: "mdi-file-link" },
        { title: "Delete", icon: "mdi-delete" },
      ],
      baritems: [
        { title: "Public", val: 15 },
        { title: "Private", val: 5 },
        { title: "Hidden", val: 2 },
      ],
    };
  },
  methods: {
    router(val, cat) {
      this.picture = val;
      this.category = cat;
      // this.$router.push(route);
    },
  },
};
</script>

<style scoped>
#imgbtn {
  position: absolute;
  z-index: 1;
}
#imgeMenu {
  cursor: pointer;
}
#listitem :hover {
  color: #4d5156;
  font-weight: bold;
}
.bg {
  background: url("https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
}
.transprant {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
