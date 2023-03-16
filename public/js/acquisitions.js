// const { Chart } = require("chart.js")

const ctx = document.getElementById('myChart');         
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      label: 'Macro Breakdown',
      data: [2, 5, 8, 5, 7, 11, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const waterChart = document.getElementById('myChart2');         
new Chart(waterChart, {
  type: 'bar',
  data: {
    labels: ['Today',],
    datasets: [{
      label: 'Water Intake',
      data: [64],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const exChart = document.getElementById('myChart3'); 
new Chart(exChart, {
  type: 'bar',
  data: {
    labels: ['Today',],
    datasets: [{
      label: 'Calories',
      data: [2000],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const lbsChart = document.getElementById('myChart4'); 
new Chart(lbsChart, {
  type: 'line',
  data: {
    labels: ['Today',],
    datasets: [{
      label: 'Calories',
      data: [200],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});