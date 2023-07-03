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
        categories: ['Mar 2021', 'Apr 2021', 'May 2021', 'June 2021', 'July 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2021', 'Feb 2021'],
      },
      yaxis: {
        min: 0,
        max: 140000,
        labels: {
          formatter: function (value) {
            return value / 1000 + 'k';
          },
        },
        tickAmount: 7,
      },
      title: {
        text: 'Overall Cost trend > Schema Cost Distribution ( Finance )',
      },
      colors: ['#129A7A', '#45CDAD', '#A2E6D6'],
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
        name: 'Load Layer',
        data: [30000, 40000, 35000, 50000, 49000, 60000, 30000, 40000, 35000, 50000, 49000, 60000],
      },
      {
        name: 'Transform Layer',
        data: [23000, 12000, 54000, 61000, 32000, 56000, 30000, 40000, 35000, 50000, 49000, 60000],
      },
      {
        name: 'View Layer',
        data: [42000, 23000, 54000, 23000, 24000, 65000, 30000, 40000, 35000, 500000, 49000, 60000],
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
