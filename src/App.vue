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
      </div>
      <RouterView></RouterView>
    </div>

  </div>

</template>

<script setup lang="ts">


</script>

<style scoped>
.over {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  background-color: aqua;
}

.nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
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

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 800px;
  width: 1000px;
  background-color: rgb(230, 180, 17);
}
</style>
