import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  interface ITasklist {
    id: string
    title: string
    status: 'OK' | 'start' | 'ing' | 'err'
    createdAt: string
  }
  const taskData: ITasklist[] = [
    {
      id: '0001',
      title: '第一个认为你',
      status: 'start',
      createdAt: new Date().toDateString(),
    },
    {
      id: '0002',
      title: '第2个认为你',
      status: 'OK',
      createdAt: new Date().toDateString(),
    },
    {
      id: '0003',
      title: '第3个认为你',
      status: 'err',
      createdAt: new Date().toDateString(),
    },
    {
      id: '0004',
      title: '第4个认为你',
      status: 'ing',
      createdAt: new Date().toDateString(),
    },
  ]
})
