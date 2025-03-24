<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      v-if="location && location.length > 0"
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-25"
    >
      <div
        v-for="(loc, index) in location"
        :key="index"
        class="card flex flex-col items-center p-6 border rounded-lg shadow-md w-full xs:w-[40rem] sm:w-[160rem] md:w-[22rem] lg:w-[20rem] xl:w-[20rem]"
      >
        <!-- location -->
        <!-- || is used if data is unavail/doesnt exist -->
        <h1 class="text-gray-600 text-2xl font-semibold mb-2">
          {{ loc.police_precinct_geographic || 'Not Available' }}
        </h1>

        <!-- type -->
        <!-- <strong> is used for bolding text! -->
        <p class="text-lg text-gray-600 mb-2">
          <strong>Location Type:</strong> {{ loc.location_type || 'Not Available' }}
        </p>

        <!-- population -->
        <p class="text-lg text-gray-600 mb-4">
          <strong>Population:</strong> {{ loc.population || 'Not Available' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const location = ref([])

async function getData() {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/rvmf-4sg6.json')
    let data = await res.json()
    location.value = data
  } catch (error) {
    alert('errer')
  }
}

onMounted(() => {
  getData()
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
