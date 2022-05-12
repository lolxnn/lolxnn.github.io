const ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Dolore', 'Rigidita\'', 'Vita quotidiana', 'Attivita\' di casa', 'Attivita\' fuori casa', 'Autonomia nel lavoro', 'Autonomia nella vita e relazione'],
        datasets: [{
            label: 'Punteggio',
            data: [8, 6, 6, 10, 2, 4, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: false,
        scales:{
          ticks: {
            display:false,
            beginAtZero: true,
          },
          r:{
            min: 0,
            max: 10,
          },
        },
        plugins: {
          legend: {
              display: false,
          }
      }
      
    }
  
}
);