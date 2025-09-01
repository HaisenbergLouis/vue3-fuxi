<template>
  <div class="home">
    <p class="home-title">任务列表</p>
    <ul class="task">
      <li v-for="task in taskData" class="task-list">
        <p class="task-title">{{ task.title }}</p>
        <div class="last">
          <span class="task-createdAt"
            ><span class="task-createdAt-title"> 创建日期 </span>
            <p class="task-createdAt-date">{{ task.createdAt }}</p>
          </span>
          <button class="task-modify-btu" @click="modify">修改</button>
          <button class="task-delete-btu" @click="erase">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ITasklist } from '@/interface'

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
function modify(e: Event) {
  console.log(e.target)
}
function erase() {}
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
  color: #1a1a1a;
}

.task-createdAt-date {
  color: #4b4b4b;
  font-size: 14px;
}

.task-modify-btu {
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
</style>
