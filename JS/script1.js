const ct = document.getElementById('myPieChart').getContext('2d');
   const myPieChart = new Chart(ct, {
       type: 'pie',  // Specify the chart type
       data: {
           labels: ['In Progress', 'Completed', 'Yet to Start'],
           datasets: [{
               label: 'Dataset 1',
               data: [20, 50, 30], // Data values
               backgroundColor: [
                   'rgba(255, 222, 33, 0.6)',
                   'rgba(0, 255, 0, 0.8)',
                   'rgba(128, 128,128, 0.6)'
               ],
               borderColor: [
                'rgba(255, 222, 33, 0.6)',
                'rgba(0, 255, 0, 0.8)',
                'rgba(128, 128,128, 0.6)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           responsive: true, // Make chart responsive
           plugins: {
               legend: {
                   position: 'top', // Position the legend at the top
               }
           }
       }
   });
