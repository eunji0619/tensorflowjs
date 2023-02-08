<template>
  <div>ex7 예제 with Chartjs</div>
  <button @click="chart">Chartjs</button><br />
  <canvas id="myChart"></canvas>
</template>

<script setup>
import Chart from 'chart.js/auto'
function chart() {
  const ctx = document.getElementById('myChart')
  const dataset = [
    {
      label: 'Scatter Dataset',
      data: [
        {
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: 10
        },
        {
          x: 10,
          y: 5
        },
        {
          x: 0.5,
          y: 5.5
        }
      ],
      backgroundColor: 'rgb(255, 99, 132)'
    }
  ]

  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: dataset
    },
    options: {
      responsive: false,
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  })
}
</script>
