<template>
  <div id="app" class="full-height">
    <div id="nav" class="flex center">
      <img class="green-logo" src="./assets/green_logo.svg" alt="green log">
      <div v-if="isLoggedIn">
        <router-link to="/home">Home</router-link>
        |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div v-bind:class="{ main: isLoggedIn }">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    /*
        logout: function () {
          this.$store.dispatch('logout')
              .then(() => {
                this.$router.push('/login')
              })
        }
    */
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err;
      });
    });
  }
}
</script>

<style lang="scss">
@import './styles/shared-styles.scss';
@import url('https://cdn.d.greeninvoice.co.il/assets/web-app/2.2.331/components/webfonts/all.min.css');

html, body {
  height: 100vh; /*both html and body*/
}

body {
  margin: 0; /*reset default margin*/
}

#app {
  font-family: almoni-neue-dl;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .green-logo {
    position: fixed;
    //top: 38px;
    right: 86px;
    width: 221px;
  }
}

#nav {
  padding-top: 38px;
  position: fixed;
  width: 100%;
  height: 23px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  padding-top: 38px;
}
</style>
