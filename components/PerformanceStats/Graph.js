import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
  
  const Graph = ({ title, data, xAxis })=>{

    const graphData = {
      labels: xAxis,
      datasets: [
        {
          label: '',
          data: data,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ],
    };

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

      return <Bar options={options} data={graphData} />
  }

  export default Graph;