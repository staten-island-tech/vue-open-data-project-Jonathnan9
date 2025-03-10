<template>
  <div>
    <h2>{{ thing.police_precinct_geographic }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const thing = ref('')
async function getData() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/rvmf-4sg6.json`)
  let data = await res.json()
  thing.value = data
  console.log(thing)
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>
