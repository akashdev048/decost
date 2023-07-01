import React,{useEffect,useState} from "react";
import ReactApexChart from "react-apexcharts";
const BarChart = ({data10,data11}) => {
  // Define your chart data

  const[user,setUser]= useState([])
  const[data,setData]= useState([])

  useEffect(() => {
    if (data10.length!==0) {
      setUser(Object.values(data10.USER))
      setData(Object.values(data10.TIME_IN_MIN))
    }
  }, [data10])


  const handleCost = ()=>{
    if (data10.length!==0) {
      setUser(Object.values(data10.USER))
      setData(Object.values(data10.TIME_IN_MIN))
    }
  }

  const handleTime = ()=>{
    if (data11.length!==0) {
      setUser(Object.values(data11.USER))
      setData(Object.values(data11.COST))
    }
  }
  const chartData = {
    series: [
      {
        data: data.length!==0 ? data : [360, 500, 200, 300, 150, 200, 400, 50, 150, 450],
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
        categories: user.length!==0 ? user : [
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
        <button onClick={handleCost}>Cost</button>
        <button  onClick={handleTime}>Time</button>
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