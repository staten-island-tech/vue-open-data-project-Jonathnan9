<template>
  <div
    class="card flex flex-col items-center p-6 border rounded-lg shadow-md xs:w-[40rem] sm:w-[160rem] md:w-[22rem] lg:w-[20rem] xl:[20rem]"
  >
    <h1 class="text-2xl font-semibold mb-2">{{ precinct.name }}</h1>
  </div>
</template>

<script setup>
defineProps({
  precinct: Object,
})
</script>

<style scoped>
.card {
  transition: transform 0.2s;
  background-color: white;
}

.card:hover {
  transform: scale(1.05);
}
</style>
