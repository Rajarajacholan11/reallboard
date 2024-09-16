// Bar chart data and config
   const ctx = document.getElementById('myChart').getContext('2d');
   const myBarChart = new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['M', 'T', 'W', 'T', 'F'],
       datasets: [{
         label: 'Data',
         data: [4, 3, 5, 7, 4, ],
         backgroundColor: [
           'rgba(0, 255, 0, 0.2)',
           'rgba(0, 255, 0, 0.2)',
           'rgba(0, 255, 0, 0.8)',
           'rgba(0, 255, 0, 0.8)',
           'rgba(0, 255, 0, 0.8)',
         ],
         borderColor: [
            'rgba(0, 255, 0, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(0, 255, 0, 0.8)',
            'rgba(0, 255, 0, 0.8)',
            'rgba(0, 255, 0, 0.8)',
         ],
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






   
   

 