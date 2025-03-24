<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SpecificArea from './components/SpecificArea.vue'
</script>

<template>
  <div>
    <NavBar />
    <SpecificArea />
    <RouterLink to="/">Home</RouterLink>

    <div class="min-h-screen flex flex-col pt-16">
      <div class="flex-1 p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
