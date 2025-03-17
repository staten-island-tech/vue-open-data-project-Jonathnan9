<template>
  <div></div>
</template>

<script setup>
//https://data.cityofnewyork.us/Public-Safety/NYPD-Shooting-Incident-Data-Year-To-Date-/5ucz-vwe8/data_preview
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const thing = ref('')
async function getData() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/5ucz-vwe8.json`)
  let data = await res.json()
  thing.value = data
  console.log(thing)
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>
