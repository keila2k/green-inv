<template>
  <div id="app">
    <Navigation
        v-if="isLoggedIn"
        :nav-links="navLinks"
        :image-path="require('./assets/leaf-new.svg')"
        background="#fff"
        link-color="#777"
        hoverBackground="#ddd"
    />
    <div v-bind:class="{ content: isLoggedIn }">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navigation from "./components/Navigation";

export default {
  data: () => ({
    navLinks: [
      {
        text: 'Home',
        path: '/home',
        icon: '⌂'
      },
      {
        text: 'About',
        path: '/about',
        icon: '✎'
      }
    ]
  }),
  components: {Navigation},
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  comments: {
    Navigation,
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
  height: 100vh;
}

figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}

.content {
  padding: 10px;
  height: calc(100% - 60px - 10*2px);
}

@media screen and (max-width: 759px) {
  .content {
    padding-left: 70px;
  }
}
</style>
