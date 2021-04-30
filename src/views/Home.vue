<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hello {{ user.firstName }}, welcome to your {{ user.businesses.map(element => element.name).join(',') }}</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Home',
  /*  data() {
      const {firstName, businesses} = store?.getters?.user;
      const businessName = businesses[0]?.name
      return {
        firstName,
        businessName
      }
    },*/
  computed: mapState([
    'user'
  ]), methods: {
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
