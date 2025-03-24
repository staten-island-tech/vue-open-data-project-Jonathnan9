<template>
  <div>
    <ShootingsChart :incidents="incidents" />
  </div>
</template>

<script setup>
import ShootingsChart from '@/components/PrecinctChart.vue'
import { onMounted, ref } from 'vue'

const incidents = ref([])

async function getShootings() {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/rvmf-4sg6.json?$limit=5000')
    const data = await res.json()
    incidents.value = data
  } catch (error) {
    console.error('Failed to fetch shooting incident data.', error)
  }
}

onMounted(() => {
  getShootings()
})
</script>

<style scoped></style>
