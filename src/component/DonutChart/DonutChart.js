import React,{useEffect, useState} from 'react'
import Chart from 'react-apexcharts';
import "./donut-chart.css";


export const DonutChart1 = ({data3,data4}) => {


  const[series,setSeries]= useState([])
  const[labels,setLabels]= useState([])


  useEffect(() => {
    if (data3.length!==0) {
      setSeries(Object.values(data3.COST))
      setLabels(Object.values(data3.WORKLOAD))
    }
  }, [data3])


  const handleCost = ()=>{
    if (data3.length!==0) {
      setSeries(Object.values(data3.COST))
      setLabels(Object.values(data3.WORKLOAD))
    }
  }

  const handleTime = ()=>{
    if (data4.length!==0) {
      setSeries(Object.values(data4.TIME))
      setLabels(Object.values(data4.WORKLOAD))
    }
  }
  
  const chartData = {
    series: series.length!==0 ? series:[78, 14, 8],
    labels: labels.length!==0 ? series:['Finance', 'Operation', 'Sales']
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
        <button onClick={handleCost}>Cost</button>
        <button onClick={handleTime}>Time</button>
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

export const DonutChart2 = ({data1,data2}) => {
  const[warehouseseries,setWarehouseSeries]= useState([])
  const[warehouselabels,setWarehouseLables]= useState([])


  useEffect(() => {
    if (data1.length!==0) {
      setWarehouseSeries(Object.values(data1.COST))
      setWarehouseLables(Object.values(data1.WAREHOUSE))
    }
  }, [data1])


  const warehousehandleCost = ()=>{
    if (data1.length!==0) {
      setWarehouseSeries(Object.values(data1.COST))
      setWarehouseLables(Object.values(data1.WAREHOUSE))
    }
  }

  const  warehousehandleTime = ()=>{
    if (data2.length!==0) {
      setWarehouseSeries(Object.values(data2.TIME))
      setWarehouseLables(Object.values(data2.WAREHOUSE))
    }
  }
  const chartData = {
    series:warehouseseries.length!==0?warehouseseries:[75, 19, 8],
    labels: warehouselabels.length!==0? warehouselabels:['Data  science', 'Batch elt', 'Ad hoc reporting'],
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
        <button  onClick={warehousehandleCost}>Cost</button>
        <button  onClick={warehousehandleTime}>Time</button>
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

export const DonutChart3 = ({data7,data8}) => {
  const[roleseries,setroleSeries]= useState([])
  const[rolelabels,setroleLables]= useState([])


  useEffect(() => {
    if (data7.length!==0) {
      setroleSeries(Object.values(data7.COST))
      setroleLables(Object.values(data7.ROLE))
    }
  }, [data7])


  const rolehandleCost = ()=>{
    if (data7.length!==0) {
      setroleSeries(Object.values(data7.COST))
      setroleLables(Object.values(data7.ROLE))
    }
  }

  const rolehandleTime = ()=>{
    if (data8.length!==0) {
      setroleSeries(Object.values(data8.TIME))
      setroleLables(Object.values(data8.ROLE))
    }
  }
  const chartData = {
    series: roleseries.length!==0?roleseries:[70, 20, 12],
    labels: rolelabels.length!==0?rolelabels:['Prd loader', 'Prd analyst', 'Prd developer'],
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
        <button onClick={rolehandleCost}>Cost</button>
        <button onClick={rolehandleTime}>Time</button>
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

export const DonutChart4 = ({data5,data6}) => {
  const[userseries,setuserSeries]= useState([])
  const[userlabels,setuserLables]= useState([])


  useEffect(() => {
    if (data5.length!==0) {
      setuserSeries(Object.values(data5.COST))
      setuserLables(Object.values(data5.USER))
    }
  }, [data5])


  const userhandleCost = ()=>{
    if (data5.length!==0) {
      setuserSeries(Object.values(data5.COST))
      setuserLables(Object.values(data5.USER))
    }
  }

  const userhandleTime = ()=>{
    if (data6.length!==0) {
      setuserSeries(Object.values(data6.TIME))
      setuserLables(Object.values(data6.USER))
    }
  }
  const chartData = {
    series: userseries.length!==0?userseries:[78, 20, 4],
    labels: userlabels.length!==0?userlabels:['John Lebriwske', 'Jean Andrew', 'Andre  Mern']
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
        <button onClick={userhandleCost}>Cost</button>
        <button onClick={userhandleTime}>Time</button>
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
