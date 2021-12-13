import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    users: [],
    loginUser: [],
    Snackbar: false,
    snackbarErrorMsg: "",
  },
  mutations: {
    SET_USER(state, users) {
      state.users = users;
    },
    LOGIN_USER(state, loginUser) {
      state.loginUser = loginUser;
    },
    SET_SNACKBAR(state, Snackbar) {
      state.Snackbar = Snackbar;
    },
    SET_SNACKBARMSG_ERRRORMSG(state, snackbarErrorMsg) {
      state.snackbarErrorMsg = snackbarErrorMsg;
    },
  },
  actions: {
    updateSnackBarStatus({ commit }) {
      commit("SET_SNACKBAR", false);
    },
    //**************Sign Up Api Hiiting*************************** */
    loadUser({ commit }, payload) {
      console.log(commit);
      console.log(payload);
      axios
        .post("http://192.168.88.37:8080/user/register", payload)
        .then((response) => {
          let data = response.data;
          console.log(response);
          commit("SET_USER", data);
          if (response.status === 200) {
            // this.$router.push({name:"Verify"})
          }
        })
        .catch((error) => {
          console.log(error.response);
          commit("SET_SNACKBAR", true);
          commit("SET_SNACKBARMSG_ERRRORMSG", error.response.data.message);
        });
    },
    //****************Login Api Hiiting************************** */
    loginUser({ commit }, payload) {
      console.log(commit);
      // alert("login")
      console.log(payload);
      axios
        .post("http://192.168.88.37:8080/user/UserLogin", payload)
        .then((response) => {
          let data = response.data;
          // console.log(response.data.data.User_data);
          console.log(response.data.message);
          console.log(response.data);
          console.log(response);
          commit("LOGIN_USER", data);
          localStorage.setItem(
            "currentUser",
            JSON.stringify(response.data.data.User_data)
          );
          localStorage.setItem(
            "currentUsertoken",
            JSON.stringify(response.data.data.Authentication)
          );
        })
        .catch((error) => {
          console.log(error.response);
          commit("SET_SNACKBAR", true);
          commit("SET_SNACKBARMSG_ERRRORMSG", error.response.data.message);
        });
    },
    // ***********************Update Profile Api Hiiting*********************************/
    updateProfile({ commit }, payload) {
      console.log(commit);
      console.log(payload);

      const currentUserToken = JSON.parse(
        localStorage.getItem("currentUsertoken")
      );
      console.log(currentUserToken);

      const currentUserId = JSON.parse(localStorage.getItem("currentUser")).id;
      console.log(currentUserId);

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + currentUserToken,
      };
      axios
        .put(
          `http://192.168.88.37:8080/user/updateUser/${currentUserId}`,
          payload,
          {
            headers: headers,
          }
        )
        .then(function (response) {
          localStorage.setItem(
            "currentUser",
            JSON.stringify(response.data.data.User_data)
          );
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response);
          // commit("SET_SNACKBAR", true);
          // commit("SET_SNACKBARMSG_ERRORMSG", error.response.status);
        });
    },
    //********Forgot password Api Hitting************************ */
    ForpassData({ commit }, payload) {
      console.log(commit);
      console.log(payload);
      //Signup Api Hiiting for the Forgot Password
      axios
        .post("http://192.168.88.37:8080/user/forgotPassword", payload)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //***************Reset Password Api Hiiting********************
    resetPass({ commit }, payload) {
      console.log(commit);
      console.log(payload);

      const currentUserToken = JSON.parse(
        localStorage.getItem("currentUsertoken")
      );
      console.log(currentUserToken);

      const currentUserId = JSON.parse(localStorage.getItem("currentUser")).id;
      console.log(currentUserId);

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + currentUserToken,
      };
      axios
        .put(
          `http://192.168.88.37:8080/user/updateUserPassword/61b1b6b78047000017002618${currentUserId}`,
          payload,
          {
            headers: headers,
          }
        )
        .then(function (response) {
          localStorage.setItem(
            "currentUser",
            JSON.stringify(response.data.data.User_data)
          );
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response);
          // commit("SET_SNACKBAR", true);
          // commit("SET_SNACKBARMSG_ERRORMSG", error.response.status);
        });
    },
    //********Verify After Signup OTP Api hiiting*************************** */ 
    otpData({ commit }, payload) {
      console.log(commit);
      console.log(payload);
      //verify otp api calling
      axios
        .post("", payload)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  getters: {
    getSnackbarStutes(state) {
      return state.Snackbar;
    },
    getSnackbarErrorMsg(state) {
      return state.snackbarErrorMsg;
    },
  },
  modules: {},
});
