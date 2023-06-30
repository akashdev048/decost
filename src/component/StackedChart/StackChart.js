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
          categories: ['June 2021', 'June 2021', 'June 2021', 'June 2021', 'June 2021', 'June 2021','June 2021','June 2021','June 2021','June 2021','June 2021','June 2021'],
        },
        yaxis: {
          min: 0,
          max: 140000,
          labels: {
            formatter: function (value) {
              return value/1000 + 'k';
            },
          },
           tickAmount: 7,
        },
        title: {
          text: 'Cost ($)',
        },
        colors: ['#70566D', '#D38B5D', '#16C098'],
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: false,
            },
            horizontal: false,
            columnWidth: '25%', // Adjust the column width as needed
          },
        },
        legend: {
          position: 'top',
        },
      },
      series: [
        {
          name: 'Series A',
          data: [30000, 40000, 35000, 50000, 49000, 60000,30000, 40000, 35000, 50000, 49000, 60000],
        },
        {
          name: 'Series B',
          data: [23000, 12000, 54000, 61000, 32000, 56000,30000, 40000, 35000, 50000, 49000, 60000],
        },
        {
          name: 'Series C',
          data: [42000, 23000, 54000, 23000, 24000, 65000,30000, 40000, 35000, 500000, 49000, 60000],
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
