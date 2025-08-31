<template>
  <div class="over">
    <div class="box">
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
        <div class="register">
          <button @click="showRegister = true">注册</button>
        </div>
        <div class="login">
          <button v-if="!isLogin" @click="showLogin = true">登录</button>
          <span v-if="isLogin">欢迎，{{ username }}</span>
          <button v-if="isLogin" @click="handleLogout">退出</button>
        </div>
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
          <!-- placeholder是提醒用户填什么东西
           required表示该输入框为必填项
           type指定输入内容的类型 -->
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
import { routeLocationKey, RouterLink, RouterView } from 'vue-router'
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
  if (loginForm.value.username === 'admin' && loginForm.value.password === '1234') {
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  /* background-color: aqua; */
}

.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* background-color: rgb(230, 180, 17); */
}

.nav {
  /* background-color: antiquewhite; */
  background-image: url(./images/微信图片_20250328210846.jpg);
  background-size: cover;
  background-position: 60% 53%;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100px;
}

.display {
  /* background-color: antiquewhite; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.nav ul {
  /* background-color: rgb(10, 215, 72); */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
  list-style: none;
}

.nav ul li {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 235, 215, 0.547);
  background-color: opc;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  margin-right: 20px;
  width: 100px;
  height: 50px;
}

a {
  text-decoration: none;
  font-size: 20px;
  color: black;
}

/* routerlink就是加强版的a标签 */
.router-link-active {
  text-decoration: none;
  color: saddlebrown;
}

.nav .register,
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  /* background-color: blue; */
  font-size: 30px;
  margin-right: 30px;
}
.login span {
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  font-size: 15px;
  margin-right: 10px;
}
.nav button {
  background-color: rgba(250, 235, 215, 0.547);
  background-color: opc;
  font-size: 15px;
  width: 80px;
  height: 50px;
  border-radius: 10px;
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

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}

/* ...existing code... */
</style>
