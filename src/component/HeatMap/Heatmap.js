import React, { useState, useEffect } from "react";
import heatmap from '../../assets/images/heatmap.png'
import ReactApexChart from "react-apexcharts";
import "./style.css"

function Heatmap() {


  let months = [
    "February",
    "January",
    "December",
    "November",
    "October",
    "September",
    "August",
    "July"
  ]

  let generateData = (count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = months[i];
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    console.log("series", series)
    return series;
  }



  const [series, setSeries] = useState([{
    name: '31',
    data: generateData(8, {
      min: 0,
      max: 90,
    })

  },
  {
    name: '30',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '29',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '28',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '27',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '26',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '25',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '24',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '23',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '22',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '21',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '20',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '19',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '18',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '17',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '16',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '15',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '14',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '13',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '12',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '11',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '10',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '09',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '08',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '07',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '06',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '05',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '04',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '03',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '02',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: '01',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  }
  ]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    // title: {
    //   text: 'HeatMap Chart (Single color)'
    // },
  });


  return (
    <div className='mult-contenttab'>
      <div className="heading-bar-top mt-3"><h2 className="title-main-wgt">Cost & time by Day and month</h2></div>
      <div className='image-chart-date'>
        {/* <div className='card' style={{overflow:'hidden'}}><img src={heatmap} alt=''  /></div> */}
        <ReactApexChart options={options} series={series} type="heatmap" height={1000} />

      </div>
    </div>
  )
}

export default Heatmap