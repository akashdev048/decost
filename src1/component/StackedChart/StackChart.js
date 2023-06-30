import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StackChart = () => {
    // Define your chart data
    const chartData = {
      options: {
        chart: {
          id: 'stacked-column',
          stacked: true,
          toolbar: {
            show: false, // Set show property to false
          },
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '10%', // Adjust the column width as needed
          },
        },
        legend: {
          position: 'top',
        },
      },
      series: [
        {
          name: 'Series A',
          data: [30, 40, 35, 50, 49, 60],
        },
        {
          name: 'Series B',
          data: [23, 12, 54, 61, 32, 56],
        },
        {
          name: 'Series C',
          data: [42, 23, 54, 23, 24, 65],
        },
      ],
    };
  
    return (
      <div className='stacked_graph_container'>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
    );
  };
  

export default StackChart;
