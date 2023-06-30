import React from 'react'
import Chart from 'react-apexcharts';


const DonutChart = () => {
const chartData = {
        series: [44, 55, 13, 43, 22],
        labels: ['Apple', 'Mango', 'Banana', 'Orange', 'Grapes'],
      };
      const chartOptions = {
        chart: {
          type: 'donut',
        },
        labels: chartData.labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show:false,
                position: 'bottom',
              },
            },
          },
        ],
      };
  return (
    <div>
    <Chart
      options={chartOptions}
      series={chartData.series}
      type="donut"
      width="70%"
    />
    </div>
  )
}

export default DonutChart