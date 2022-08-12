import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: '',
        data: [20,40,10,132, 120, 46, 88],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  const Graph = ({ title })=>{

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: title,
          },
        },
        scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
                grid: {
                  display: true
                }
            },
          } 
      };

      return <Bar options={options} data={data} />
  }

  export default Graph;