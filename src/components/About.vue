<template>
  <div>
    <h1>User details</h1>
    <div class="about flex column">
      <div class="form-field" v-for="field in fields.filter(field => !field.fieldGetter)" :key="field.id">
        <label class="field-name">{{ capitalize(field.fieldName) }}</label>
        <input disabled required v-model="user[field.fieldName]"/>
      </div>
      <div class="form-field" v-for="field in fields.filter(field => field.fieldGetter)" :key="field.id">
        <label class="field-name">{{ capitalize(field.fieldName) }}</label>
        <span class="input" style="display: block">{{ field.fieldGetter(user[field.fieldName]) }}</span>
      </div>
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
      var result = s.replace(/([A-Z])/g, " $1");
      return result.charAt(0).toUpperCase() + result.slice(1)
    }
  },
  data() {
    return {
      fields: [
        {
          fieldName: 'firstName',
          fieldGetter: null
        }, {
          fieldName: 'lastName',
          fieldGetter: null
        }, {
          fieldName: 'idNumber',
          fieldGetter: null
        }, {
          fieldName: 'email',
          fieldGetter: null
        }, {
          fieldName: 'phone',
          fieldGetter: null
        }, {
          fieldName: 'activeBusinessCount',
          fieldGetter: null
        }, {
          fieldName: 'businesses',
          fieldGetter: (businesses) => businesses.map(entry => entry.name).join(', ')
        },
      ]
    }
  },
  computed: {
    ...mapState(['user'])
  },
  components: {}
}
</script>
<style>
.form-field {
  text-align: left;
}

.about {
  max-width: 300px;
  margin: auto;
  height: 100%;
}

input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #23445A;
  line-height: 22px;
  font-size: 18px;
  color: #23445A;
  font-family: inherit;
}

.input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #23445A;
  line-height: 22px;
  font-size: 18px;
  color: #23445A;
  font-family: inherit;
  background: rgba(239, 239, 239, 0.3);
}
</style>
