import React,{useEffect} from 'react';

import ReactApexChart from "react-apexcharts";




const MixedLineBarChart = ({data1,data2,data3,data4}) => {

  useEffect(() => {
 console.log("data 1 gettins", data1);
  }, [data1,data2,data3,data4])

  let series = [
    {
    name: '7D MA',
    type: 'column',
    data: data1.length!==0 ? Object.values(data1.COST): [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 34, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  },
  {
    name: '14D MA',
    type: 'line',
    data: data2.length!==0? Object.values(data2.COST_USED_7_DAY_AVG): [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 20, 30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  },
  {
    name: '21D MA',
    type: 'line',
    data: data3.length!==0? Object.values(data3.COST_USED_14_DAY_AVG): [25, 20, 31, 25, 40, 30, 55, 45, 50, 30, 32, 33, 25, 20, 31, 25, 40, 30, 55, 45, 50, 30, 32]
  },
  {
    name: '30D MA',
    type: 'line',
    data: data4.length!==0? Object.values(data4.COST_USED_21_DAY_AVG): [20, 40, 45, 28, 23, 55, 60, 45, 51, 30, 35, 40, 20, 40, 45, 28, 23, 55, 60, 45, 51, 30, 35]
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
      position: 'bottom',
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


    labels: data1.length!==0 ? Object.values(data1.DATE): ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
      'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13',
      'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23'
    ],

    markers: {
      size: 0
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: data1.length!==0 ? Object.values(data1.DATE): ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
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