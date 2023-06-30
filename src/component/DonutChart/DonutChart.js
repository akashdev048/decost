import React from 'react'
import Chart from 'react-apexcharts';

import "./donut-chart.css";


export const DonutChart1 = () => {
  const chartData = {
    series: [78, 14, 8],
    labels: ['Finance', 'Operation', 'Sales'],
  };

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    labels: chartData.labels,
    colors: ['#16C098', '#D38B5D', '#70566D', ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            show: false,
            position: 'bottom',
          },
        },
      },
    ],
  };
  return (
    <div>
      <label className='chart-label'>Workload Consumption</label>
      <div className='chart-tabs'>
        <button>Cost</button>
        <button disabled className='disable-tab-btn'>Time</button>
      </div>
      <Chart
        options={chartOptions}
        series={chartData.series}
        type="donut"
        width="70%"
        height='400px'
      />
    </div>
  )
}

export const DonutChart2 = () => {
  const chartData = {
    series: [75, 19, 8],
    labels: ['Data  science', 'Batch elt', 'Ad hoc reporting'],
  };

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    labels: chartData.labels,
    colors: ['#16C098', '#D38B5D', '#70566D', ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            show: false,
            position: 'bottom',
          },
        },
      },
    ],
  };
  return (
    <div>
      <label className='chart-label'>Warehouse Consumption</label>
      <div className='chart-tabs'>
        <button>Cost</button>
        <button disabled className='disable-tab-btn'>Time</button>
      </div>
      <Chart
        options={chartOptions}
        series={chartData.series}
        type="donut"
        width="70%"
        height='400px'
      />
    </div>
  )
}

export const DonutChart3 = () => {
  const chartData = {
    series: [70, 20, 12],
    labels: ['Prd loader', 'Prd analyst', 'Prd developer'],
  };

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    labels: chartData.labels,
     colors: ['#16C098', '#D38B5D', '#70566D', ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            show: false,
            position: 'bottom',
          },
        },
      },
    ],
  };
  return (
    <div>
      <label className='chart-label'>Role Consumption</label>
      <div className='chart-tabs'>
        <button>Cost</button>
        <button disabled className='disable-tab-btn'>Time</button>
      </div>
      <Chart
        options={chartOptions}
        series={chartData.series}
        type="donut"
        width="70%"
        height='400px'
      />
    </div>
  )
}

export const DonutChart4 = () => {
  const chartData = {
    series: [78, 20, 4],
    labels: ['John Lebriwske', 'Jean Andrew', 'Andre  Mern'],
  };

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    labels: chartData.labels,
     colors: ['#16C098', '#D38B5D', '#70566D', ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            show: false,
            position: 'bottom',
          },
        },
      },
    ],
  };
  return (
    <div>
      <label className='chart-label'>User Consumtion</label>
      <div className='chart-tabs'>
        <button>Cost</button>
        <button disabled className='disable-tab-btn'>Time</button>
      </div>
      <Chart
        options={chartOptions}
        series={chartData.series}
        type="donut"
        width="70%"
        height='400px'
      />
    </div>
  )
}
