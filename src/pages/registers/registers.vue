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
  left: 0;
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

.other-login {
  font-size: 15px;
  background-color: #fff;
  color: #aaa;
  padding: 0 10px;
}

input[type=text]:focus,
input[type=password]:focus,
input[type=email]:focus,
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

.text {
  height: 80%;
  width: 100%;
  font-size: 15px;
  background-color: transparent;
  border: 0px
}
</style>

<template>
<div class="db_login">
  <div class="db_login_top">
    <a href="javascript:void(0);" class="cancel" @click="goBack">取消</a>免費註冊
  </div>
  <div class="db_login_form">
    <p class="form_item">
      <input type="email" class="text" placeholder="信箱">
    </p>
    <p class="form_item">
      <input type="password" class="text" name="password" placeholder="密碼">
    </p>
    <p class="form_btn">
      <button type="submit">下一步</button>
    </p>

    <p class="form_btn">
      <p class="other-login">
        已閱讀並同意以下協議,
        <strong style="text-decoration:underline;">接受免除或者限制責任,訴訟管轄約定</strong> 等粗體標示條款,願意同步創建好好租帳戶
      </p>

    </p>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
