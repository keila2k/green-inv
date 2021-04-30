<template>
  <div id="app" class="full-height">
    <div v-if="isLoggedIn" id="nav">
      <router-link to="/home">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
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
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
