<template>
  <div>
    <div class="navbar bg-base-200 fixed z-30">
      <div class="flex-none">
        <SideBar />
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Domestic Vioence Incidents in NYC</a>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from './SideBar.vue'
import SearchBar from './SearchBar.vue'
</script>

<style lang="scss" scoped></style>
