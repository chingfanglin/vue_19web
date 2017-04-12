<style scoped>
.db_login {
  font-size: 16px;
}

.db_login .db_login_top {
  position: relative;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #333;
  font-weight: 600;
  border-bottom: 1px solid #f0f0f0;
}

.db_login .db_login_top .cancel {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  padding: 0 20px;
  color: #42bd56;
  font-size: 14px;
  font-weight: normal;
}

.db_login .db_login_form {
  padding: 0 15px;
  margin: 25px 0 5px;
}

.db_login .db_login_form .form_item {
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  margin-bottom: -1px;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
}

.db_login .form_item:nth-of-type(1) {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.db_login .form_item:nth-of-type(2) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.db_login .db_login_form input {
  border: none;
}

.db_login .db_login_form .form_btn {
  margin-top: 10px;
}

.db_login .form_btn button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  background-color: #17AA52;
  border-radius: 3px;
}

.fb_btn button {
  background-color: #003C9D !important;
}

.ge_btn button {
  background-color: #E63F00 !important;
}

.hr-or {
  width: 100%;
  height: 10px;
  border-bottom: 2px solid #cdcdcd;
  text-align: center;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}

.other-login {
  font-size: 15px;
  background-color: #fff;
  color: #aaa;
  padding: 0 10px;
}

.text {
  height: 80%;
  width: 100%;
  font-size: 15px;
  background-color: transparent;
  border: 0px
}

input[type=text]:focus,
input[type=password]:focus,
textarea:focus {
  transition: border linear .2s, box-shadow linear .5s;
  -moz-transition: border linear .2s, -moz-box-shadow linear .5s;
  -webkit-transition: border linear .2s, -webkit-box-shadow linear .5s;
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 8px transparent;
  -moz-box-shadow: 0 0 8px transparent;
  -webkit-box-shadow: 0 0 8px transparent;
}


.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  margin-bottom: 8px;
  border-radius: 4px;
  -webkit-background-clip: padding-box;
}
</style>

<template>
          <div class="db_login">
              <div class="db_login_top">
                  <a class="cancel" href="#/reg">註冊</a> 登入好好租
              </div>
              <div class="db_login_form">
                  <p class="form_item">
                      <input type="text" class="text" id="username" name="username" placeholder="帳號">
                  </p>
                  <p class="form_item">
                      <input type="password" class="text" id="pasword" name="pasword" placeholder="密碼" >
                  </p>
                  <p class="form_btn">
                      <button type="submit" @click="Login">登入</button>
                  </p>
              </div>
              <div class="hr-or">
                  <span class="other-login">
          		    使用其它方式登入 & 找回密碼
          		  </span>
              </div>
              <div class="db_login_form" onclick="fb_login();">
                  <p class="form_btn fb_btn">
                      <button type="submit">Facebook</button>
                  </p>
              </div>
              <div class="db_login_form" name="googleSignIn" id="googleSignIn">
                  <div id="my-signin2"></div>
              </div>

          </div>

</template>

<script>
import { md5 } from 'vux'

export default {
  components: {
    md5
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    Login () {
      const username = document.getElementById('username').value
      const pass = document.getElementById('pasword').value
      if (!username || !pass) {
        this.$vux.alert.show({
          title: '提示訊息',
          content: '請輸入帳號密碼!!'
        })
        return
      }
      const user = {
        name: username,
        password: md5(pass)
      }

      this.$vux.loading.show({
        text: 'Loading'
      })
      console.log(user)
      setTimeout(() => {
        this.$vux.loading.hide()
        this.$router.push({
          'path': '/home'
        })
      }, 1950)
    }
  }
}
</script>
