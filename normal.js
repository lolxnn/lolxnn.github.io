const ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.width  = window.innerWidth * 0.8;
ctx.canvas.height = window.innerHeight * 0.8;

const dataArr = [135, 135, 134, 134, 133, 132, 130, 129, 129, 127, 125, 124, 125, 123, 121];
const dataArr2 = [125, 165, 134, 144, 133, 132, 130, 129, 129, 127, 125, 124, 125, 123, 121];


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
  listDate.push(new Date(strDate));
  dateMove.setDate(dateMove.getDate() + 1);
};

const formattedDates = [];
for(i = 0; i < listDate.length; i++) {
  var month = listDate[i].getMonth();
  var day = listDate[i].getDate();
  var monthList = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
  formattedDates.push(new String(day + ' ' + monthList[month]))
}

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: formattedDates,
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
                'rgba(154, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(175, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            tension: 0.15
        }
      ]

    },
    options: {
        responsive: false,
        scales:{
          ticks: {
            display: false,
            beginAtZero: true,
          }
        },
        plugins: {
          legend: {
              display: true,
          }
      }
      
    }
  
}
);
