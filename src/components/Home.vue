<template>
  <div class="home flex column center space-between">
    <h1>Hello {{ user.firstName }}, welcome to your {{ user.businesses.map(element => element.name).join(',') }}</h1>
    <button class="btn google-login-button" @click="logout">Logout</button>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Home',
  computed: mapState([
    'user'
  ]),
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
    }
  },
  components: {}
}

</script>
<style>
h1 {
  margin: 0;
}

.home {
  height: 80%;
}
</style>
