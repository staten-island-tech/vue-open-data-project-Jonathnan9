<template>
  <div style="width: 75%; margin: auto">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  incidents: {
    type: Array,
    required: true,
  },
})

const canvas = ref(null)
let chart = null

//getdata
function getPrecinctShootings(incidentData) {
  const precinct = incidentData.filter((item) => item.location_type === 'Police Precinct')
  const precinctName = precinct.map((b) => b.police_precinct_geographic)
  //pareseint 10 returns a decimal/integer instead of string and map makes a new array from results of function
  const shootingNumbers = precinct.map((b) => parseInt(b.shootings, 10))
  return { precinctName, shootingNumbers }
}

//updates chart
watch(
  () => props.incidents,
  (newData) => {
    if (!canvas.value || !newData.length) return

    const { precinctName, shootingNumbers } = getPrecinctShootings(newData)

    //clears prev chart
    if (chart) {
      chart.destroy()
    }

    chart = new Chart(canvas.value, {
      type: 'bar',
      data: {
        labels: precinctName,
        datasets: [
          {
            label: 'Shootings per Precinct',
            data: shootingNumbers,
            backgroundColor: [
              'rgba(138, 43, 226, 0.6)', // bx
              'rgba(255, 165, 0, 0.6)', // bk
              'rgba(0, 128, 255, 0.6)', // m
              'rgba(50, 205, 50, 0.6)', // q
              'rgba(220, 20, 60, 0.6)', // si
            ],
            borderColor: '#333',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped></style>
