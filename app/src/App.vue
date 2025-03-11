<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import GetData from './components/GetData.vue'
</script>

<template>
  <div>
    <NavBar />
    <GetData />

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <div class="min-h-screen flex flex-col pt-16">
      <div class="flex-1 p-4" data-theme="emerald">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
