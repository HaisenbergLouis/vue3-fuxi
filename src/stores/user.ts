// src/stores/user.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref('')
  const isLogin = ref(false)
  const token = ref('')

  function login(inputUsername: string, password: string) {
    if (inputUsername === 'admin' && password === '1234') {
      username.value = inputUsername
      isLogin.value = true
      token.value = 'fake-jwt-token'
      return { success: true }
    }
    return { success: false, error: '用户名或密码错误' }
  }

  function register(inputUsername: string, password: string) {
    if (!inputUsername || !password) {
      return { success: false, error: '用户名和密码不能为空' }
    }
    return { success: true }
  }

  function logout() {
    username.value = ''
    isLogin.value = false
    token.value = ''
  }

  return { username, isLogin, token, login, register, logout }
})
