<template>
  <div>
    <div class="flex row-reverse full-height">
      <img class="green-logo" src="../assets/green_logo.svg" width="221px" alt="green log">
      <div class="flex flex-1 min-500 full-height center">
        <div class="flex column flex-end half-width">
          <label class="title">היי, טוב לראות אותך</label>
          <form class="flex column full-width flex-end" @submit.prevent="login">
            <div class="form-field full-width rtl">
              <input required v-model="email" type="email" placeholder="מייל"/>
              <div class="helper-text">כתובת המייל איתה נרשמת לחשבונית ירוקה</div>
            </div>
            <div class="form-field full-width rtl">
              <input required v-model="password" type="password" placeholder="סיסמה"/>
              <div class="helper-text"><u>שכחת סיסמה?</u></div>
            </div>
            <div class="flex row-reverse form-field full-width space-between">
              <button class="rectangle-6 login-button login-button-text" type="submit">כניסה</button>
              <button type="reset" class="flex center space-evenly login-button google-login-button">
                <img src="../assets/Google_G.svg" alt="Google G" width="24" height="24">
                כניסה מהירה
              </button>
            </div>
          </form>
          <label class="register">עוד לא הצטרפת? <u href="">ל-30 יום נסיון חינם</u></label></div>
      </div>
      <div class="flex column flex-1 full-height">
        <img class="pink-bg max-100 login-img full-height" alt="Vue logo" src="../assets/green_login_page.svg">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', {email, password})
          .then(() => {
            return this.$router.push('/home');
          })
          .catch(err => console.log(err))
    }
  }
}
</script>
<style>
@import '../styles/shared-styles.scss';

.pink-bg {
  background: #FFDCDC;
}

.title {
  color: #23445A;
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 48px;
  text-align: right;
}

.green-logo {
  position: absolute;
  top: 38px;
  right: 86px;
}

.rectangle-6 {
  width: 228px;
  background-color: #18C746;
  border: none;
}

.login-button-text {
  color: #FFFFFF;
}

.google-login-button {
  width: 172px;
  border: 1px solid #0084F4;
  color: #0084F4;

}

.login-button {
  height: 56px;
  border-radius: 100px;
  font-family: inherit;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;

}

input[type="email"], input[type="password"] {
  width: 100%;
  border: none;
  border-bottom: 1px solid #23445A;
  line-height: 22px;
  font-size: 18px;
  color: #23445A;
  font-family: inherit;
}

.register {
  color: #0084F4;
  font-family: inherit;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 22px;
  text-align: right;
}

.helper-text {
  text-align: right;
  font-size: 14px;
  line-height: 25px;
}

.form-field {
  color: #23445A;
}

@media screen and (max-width: 600px) {
  .login-img {
    display: none;
  }
}
</style>
