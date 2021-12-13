<template>
<div>
  <!-- <Login /> -->
  <Signup/>
  <!-- <Forpass/> -->
  <!-- <Verify/> -->
<!-- <Update/> -->
  </div>
</template>

<script>
// import Login from './Login.vue';
// import Verify from './Verify.vue';
import Signup from './Signup.vue';
// import Forpass from './Forpass.vue'
// import Update from './Update.vue'

export default {
  name: "Home",

  components: {
    // Login,
    // Verify,
    // Update
    Signup,
    // Forpass
   
  },
};
</script>
