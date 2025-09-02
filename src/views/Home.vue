<template>
  <div class="home">
    <p class="home-title">任务列表</p>
    <ul class="task">
      <li v-for="(task, index) in taskData" :key="task.id" class="task-list">
        <p class="task-title">{{ task.title }}</p>
        <span class="task-createdAt"
          ><span class="task-createdAt-title"> 创建日期 </span>
          <p class="task-createdAt-date">{{ task.createdAt }}</p>
        </span>
        <button class="task-finish-btu" @click="finish">完成</button>
        <button class="task-modify-btu" @click="modify">修改</button>
        <button class="task-delete-btu" @click="erase(index)">删除</button>
      </li>
    </ul>
  </div>
  <!-- 修改弹窗 -->
  <div class="over" v-if="showModify">
    <div class="contentModify">
      <span class="contentTitle">
        <p>修改</p>
        <button class="btn" @click="cancel">X</button>
      </span>
      <div class="content">
        {{ useUserStore.$id }}
      </div>
      <div class="finish" @click="finishModify"><span>完成</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ITasklist } from '@/interface'
import { isContinueStatement } from 'typescript'
import { useUserStore } from '@/stores/user'

const showModify = ref(false)
const taskData: ITasklist[] = [
  {
    id: '0001',
    title: '第1个任务',
    status: 'start',
    createdAt: new Date().toDateString(),
    isfinish: false,
  },
  {
    id: '0002',
    title: '第2个任务',
    status: 'OK',
    createdAt: new Date().toDateString(),
    isfinish: false,
  },
  {
    id: '0003',
    title: '第3个任务',
    status: 'err',
    createdAt: new Date().toDateString(),
    isfinish: false,
  },
  {
    id: '0004',
    title: '第4个任务',
    status: 'ing',
    createdAt: new Date().toDateString(),
    isfinish: false,
  },
]
// console.log(taskData[0].title)
// console.log(useUserStore)
// 完成任务删除该条任务
function finish() {}
// 修改按钮，弹出修改弹窗
function modify() {
  showModify.value = true
}
// 修改弹窗,取消按钮功能
function cancel() {
  showModify.value = false
}
function erase(index: number) {
  taskData.splice(index, 1)
  alert('任务已删除')
}
function finishModify() {
  showModify.value = false
  alert('修改成功')
}
</script>

<style scoped>
p {
  margin: 0;
  display: inline;
}
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.home-title {
  display: inline;
  margin: 0;
  font-size: 2rem;
}
.task {
  width: 80%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem;
}

.task .task-list {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5rem;
  border: #eaeaea 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 8px;
  margin-top: 1.1rem;

  transition: all ease-in 0.2s;
}

.task .task-list:hover {
  background-color: #f4f4f4;
}

.task .task-list .task-title {
  cursor: pointer;
}

.task .task-list .task-createdAt {
  cursor: pointer;
}

.task-createdAt-title {
  width: 10rem;
  color: #1a1a1a;
}

.task-createdAt-date {
  color: #4b4b4b;
  font-size: 14px;
}

.task-modify-btu {
  position: absolute;
  right: 6rem;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  background-color: #2558e4;
  height: 2rem;
  width: 4rem;
  margin-left: 1.2rem;
  cursor: pointer;
}

.task-delete-btu {
  height: 2rem;
  width: 4rem;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #d11a14;
  margin-left: 1.2rem;
}
.task-finish-btu {
  position: absolute;
  right: 12rem;
  height: 2rem;
  width: 4rem;
  border-radius: 5px;
  border: black solid;
  color: #000000;
  background-color: #ffffff;
  margin-left: 1.2rem;
}

/* 修改弹窗 */
.over {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #8d282800;
  width: 100vw;
  height: 100vh;
}
.contentModify {
  padding: 2rem;
  height: 60%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0022ff;
  border-radius: 10px;
  box-shadow: 0 0 15px black;
}
.contentTitle {
  background-color: #fff;
  /* box-shadow: 0 0 10px black; */
  border-radius: 10px 10px 0 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
}
.btn {
  position: absolute;
  right: 1rem;
}
.content {
  /* padding: 1em; */
  height: 80%;
  width: 100%;
  box-shadow: 0 0 10px black inset;
  background-color: #fff;
}
.finish {
  height: 10%;
  width: 100%;
  background-color: #fff;
  /* box-shadow: 0 0 10px black inset; */
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
