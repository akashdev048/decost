import React from "react";
import ReactApexChart from "react-apexcharts";
const BarChart = () => {
  // Define your chart data
  const chartData = {
    series: [
      {
        data: [360, 500, 200, 300, 150, 200, 400, 50, 150, 450],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false, // Set show property to false
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#C8A1FF"],
      xaxis: {
        categories: [
          "John Lebriwske",
          "Andre  Mern",
          "Jean Andrew",
          "John Lebriwske",
          "Jean Andrew",
          "Andre  Mern",
          "John Lebriwske",
          "Andre  Mern",
          "Jean Andrew",
          "John Lebriwske",
        ],
      },
    },
  };

  return (
    <div>
      <div className='chart-tabs'>
        <button>Cost</button>
        <button disabled className='disable-tab-btn'>Time</button>
      </div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;