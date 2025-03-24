<template>
  <div>
    <div class="relative max-w-xs" id="searchBar">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
      <input
        id="searchInput"
        class="w-full py-2 pl-4 pr-10 border border-neutral-600 rounded-md text-base bg-transparent"
        type="text"
        placeholder="Search.."
        @keyup.enter="showAlert = true"
      />
      <i
        class="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-e"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showAlert = ref(false)
</script>

<style lang="scss" scoped></style>
