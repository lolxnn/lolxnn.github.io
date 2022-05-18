const ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.width  = window.innerWidth * 0.8;
ctx.canvas.height = window.innerHeight * 0.8;

const dataArr = [135, 135, 134, 134, 133, 132, 130, 129, 129, 127, 125, 124, 125, 123, 121];

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

const listDate = [];
const startDate ='2022-05-01';
const endDate = '2022-05-15';
const dateMove = new Date(startDate);
let strDate = startDate;
while (strDate < endDate) {
  strDate = dateMove.toISOString().slice(0, 10);
  listDate.push(strDate);
  dateMove.setDate(dateMove.getDate() + 1);
};

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: listDate,
      datasets: [{
          label: 'Peso (kg)',
          data: dataArr,
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
            tension: 0.15
        }]

    },
    options: {
        responsive: false,
        scales:{
          ticks: {
            display:false,
            beginAtZero: true,
          },
          y:{
            min: Math.ceil((dataArr.min() / 1.2) / 10) * 10,
            max: Math.ceil((dataArr.max() + 15) / 10) * 10
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
