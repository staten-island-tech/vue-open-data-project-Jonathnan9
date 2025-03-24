<template>
  <div style="width: 75%; margin: auto">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const canvas = ref(null)
let chart = null

// Data fetching function
async function fetchData() {
  const response = await fetch(
    "https://data.cityofnewyork.us/resource/rvmf-4sg6.json?location_type='New York City'",
  )
  const data = await response.json()
  return data
}

// getdata
function getChartData(data) {
  const actualWhiteShootings = parseInt(data[0].actual_shootings_white, 10)
  const expectedWhiteShootings = parseInt(data[0].expected_shootings_white, 10)

  return {
    labels: ['White Shootings'],
    datasets: [
      {
        label: 'Actual Shootings',
        data: [actualWhiteShootings],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Expected Shootings',
        data: [expectedWhiteShootings],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  }
}
//chart
onMounted(async () => {
  const data = await fetchData()
  const chartData = getChartData(data)

  chart = new Chart(canvas.value, {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Actual vs. Expected White Shootings',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Category',
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Shootings',
          },
          beginAtZero: true,
        },
      },
    },
  })
})
</script>

<style lang="scss" scoped></style>
