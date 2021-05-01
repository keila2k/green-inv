<template>
  <div class="home">
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
@import '../styles/shared-styles.scss';
</style>
