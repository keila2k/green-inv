<template>
  <div>
    <div class="login-wrapper rtl">
      <img class="green-logo" src="../assets/green_logo.svg" alt="green-logo">
      <div class="login-form flex center">
        <div class="flex column">
          <h1 class="title">היי, טוב לראות אותך</h1>
          <form class="" @submit.prevent="login">
            <div class="form-field full-width">
              <input required v-model="email" type="email" placeholder="מייל"/>
              <div class="helper-text">כתובת המייל איתה נרשמת לחשבונית ירוקה</div>
            </div>
            <div class="form-field full-width">
              <input required v-model="password" type="password" placeholder="סיסמה"/>
              <div class="helper-text"><u>שכחת סיסמה?</u></div>
            </div>
            <div class="flex login-buttons row form-field full-width space-between">
              <button class="rectangle-6 btn login-button-text" type="submit">כניסה</button>
              <button type="reset" class="flex center btn google-login-button">
                כניסה מהירה
                <img src="../assets/Google_G.svg" alt="Google G" width="24" height="24">
              </button>
            </div>
          </form>
          <label class="register">עוד לא הצטרפת? <u href="">ל-30 יום נסיון חינם</u></label></div>
      </div>
      <div class="pink-bg flex column full-height"></div>

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
<style lang="scss">
@import '../styles/shared-styles.scss';

.login-wrapper {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 50% 50%;
}

.login-form {
  padding: 120px 25px;

  h1 {
    margin-bottom: 70px;
  }
}

.green-logo {
  width: 221px;
  position: fixed;
  right: 86px;
  top: 38px;
}

.pink-bg {
  background: #ffdcdc url('../assets/green_login_page.svg') 100% no-repeat;
  background-size: 85%;
  background-position-x: 230px;
}

.title {
  color: #23445A;
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 48px;
  text-align: right;
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
  background: none;
  justify-content: center;
  gap: 10px;
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

@media screen and (max-width: 990px) {
  .pink-bg {
    display: none;
  }
  .login-wrapper {
    grid-template-columns: 100%;
  }
  .login-buttons {
    flex-direction: column;
  }
  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
}


</style>
