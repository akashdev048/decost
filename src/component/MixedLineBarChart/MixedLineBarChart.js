import React from 'react';

import ReactApexChart from "react-apexcharts";




const MixedLineBarChart = () => {

  let series = [
    {
    name: '7D MA',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 34, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  },
  {
    name: '14D MA',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 20, 30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  },
  {
    name: '21D MA',
    type: 'line',
    data: [25, 20, 31, 25, 40, 30, 55, 45, 50, 30, 32, 33, 25, 20, 31, 25, 40, 30, 55, 45, 50, 30, 32]
  },
  {
    name: '30D MA',
    type: 'line',
    data: [20, 40, 45, 28, 23, 55, 60, 45, 51, 30, 35, 40, 20, 40, 45, 28, 23, 55, 60, 45, 51, 30, 35]
  }
  ]


  let options = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    legend: {
      show: true,
      position: 'top',
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    colors: ["#9C8F9B", "#C5C533", "#2A952A", "#DF96A3"],


    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
      'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13',
      'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23'
    ],

    markers: {
      size: 0
    },
    xaxis: {
      labels: {
        rotate: -90
      },
      categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
        'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13',
        'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23'
      ],
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'COST',
      },
      min: 0
    }
  }


  return (
    <ReactApexChart options={options} series={series} type="line" height={450} />
  );

};




export default MixedLineBarChart;