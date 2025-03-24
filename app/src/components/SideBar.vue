<template>
  <div class="drawer-start">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content relative">
      <label for="my-drawer-3" class="btn btn-circle swap swap-rotate z-50">
        <sortIcon />
      </label>
    </div>

    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar"></label>

      <ul class="menu bg-base-200 text-base-content min-h-full w-102 p-6">
        <div class="min-h-screen flex flex-col pt-16 text-xl">
          <h1 class="text-2xl pb-3">Data Pages</h1>
          <RouterLink to="/" class="hover:underline">Home</RouterLink>
          <RouterLink to="/shootings-by-borough" class="hover:underline"
            >Shootings By Borough</RouterLink
          >
          <RouterLink to="/shootings-by-precinct" class="hover:underline"
            >Shootings By Precinct</RouterLink
          >
          <RouterLink to="/shootings-by-race" class="hover:underline"
            >Expected Vs. Actual Shootings By Race</RouterLink
          >
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import sortIcon from './icons/IconBurger.vue'
</script>

<style lang="scss" scoped></style>
