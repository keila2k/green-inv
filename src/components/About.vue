<template>
  <div class="about">
    <h1>User info</h1>
    <div v-for="field in fields" :key="field.id">
      <span>{{ capitalize(field) }}: </span>
      <span>{{ user[field] }}</span>
    </div>
    <div>
      <span>Businesses: </span>
      <span>{{ user.businesses.map(entry => entry.name).join(', ') }}</span>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: 'About',
  methods: {
    capitalize: (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  },
  data() {
    return {
      fields: [
        'firstName',
        'lastName',
        'idNumber',
        'email',
        'phone',
        'activeBusinessCount',
      ]
    }
  },
  computed: {
    ...mapState(['user'])
  },
  components: {}
}
</script>
