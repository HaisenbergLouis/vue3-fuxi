<template>
  <div class="over">

    <div class="box">
      <div class="head">
        <div class="register">
          <button @click="showRegister = true">注册</button>
        </div>
        <div class="login">
          <button v-if="!isLogin" @click="showLogin = true">登录</button>
          <span v-if="isLogin">欢迎，{{ username }}</span>
          <button v-if="isLogin" @click="handleLogout">退出</button>
        </div>
      </div>


      <div class="nav">
        <ul>
          <li>
            <RouterLink to="/">首页</RouterLink>
          </li>
          <li>
            <RouterLink to="/news">新闻</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">关于</RouterLink>
          </li>

        </ul>
      </div>
      <div class="display">
        <RouterView></RouterView>
      </div>

    </div>
    <!-- 注册弹窗 -->
    <div v-if="showRegister" class="modal">
      <div class="modal-content">
        <h3>注册</h3>
        <form @submit.prevent="handleRegister">
          <input v-model="registerForm.username" placeholder="用户名" required />
          <input v-model="registerForm.password" type="password" placeholder="密码" required />
          <button type="submit">注册</button>
          <button type="button" @click="showRegister = false">取消</button>
        </form>
        <div v-if="registerError" class="error">{{ registerError }}</div>
      </div>
    </div>

    <!-- 登录弹窗 -->
    <div v-if="showLogin" class="modal">
      <div class="modal-content">
        <h3>登录</h3>
        <form @submit.prevent="handleLogin">
          <input v-model="loginForm.username" placeholder="用户名" required />
          <input v-model="loginForm.password" type="password" placeholder="密码" required />
          <button type="submit">登录</button>
          <button type="button" @click="showLogin = false">取消</button>
        </form>
        <div v-if="loginError" class="error">{{ loginError }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

// 登录相关
const showLogin = ref(false)
const loginForm = ref({ username: '', password: '' })
const loginError = ref('')
const isLogin = ref(false)
const username = ref('')

// 注册相关
const showRegister = ref(false)
const registerForm = ref({ username: '', password: '' })
const registerError = ref('')

function handleLogin() {
  if (
    loginForm.value.username === 'admin' &&
    loginForm.value.password === '1234'
  ) {
    isLogin.value = true
    username.value = loginForm.value.username
    loginError.value = ''
    showLogin.value = false
  } else {
    loginError.value = '用户名或密码错误'
  }
}

function handleLogout() {
  isLogin.value = false
  username.value = ''
}

function handleRegister() {
  if (!registerForm.value.username || !registerForm.value.password) {
    registerError.value = '用户名和密码不能为空'
    return
  }
  // 假注册逻辑
  registerError.value = ''
  showRegister.value = false
  alert('注册成功')
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.over {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 99vw;
  background-color: aqua;
}

.box {
  display: flex;
  align-items: center;

  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: rgb(230, 180, 17);
}

.head {
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.head .register,
.login {
  margin-right: 20px;
}

.nav {
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.display {
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
}

.nav ul {
  background-color: rgb(10, 215, 72);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
}

.nav ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  width: 100px;
  height: 50px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  min-width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}

/* ...existing code... */
</style>
