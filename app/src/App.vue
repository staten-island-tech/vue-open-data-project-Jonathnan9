<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import GetData from './components/GetData.vue'
import DisplayCharts from './components/DisplayCharts.vue'
</script>

<template>
  <div>
    <NavBar />
    <GetData />
    <DisplayCharts />

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <div class="min-h-screen flex flex-col pt-16">
      <div class="flex-1 p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
