import React from 'react';

import Chart from 'react-apexcharts';




const MixedLineBarChart = () => {

  const chartOptions = {

    options: {

      chart: {

        id: 'combo-chart',
        toolbar: {
            show: false, // Set show property to false
          },
      },

      colors: ['#DF96A3', '#C5C533','#2A952A','#9C8F9B'], // Specify the colors for columns and curves

      xaxis: {

        categories: ['1 jan 2022', '4 jan 2022', '6 jan 2022', '1 jan 2022', '1 jan 2022','1 jan 2022', '1 jan 2022', '1 jan 2022', '1 jan 2022', '1 jan 2022', '1 jan 2022', '1 jan 2022'],

        labels: {

            style: {

                fontSize: '12px', // Adjust label font size

              },

          },

      },

      stroke: {

                    // width: [0, 4],

                    curve: 'smooth'

       

                  },

      plotOptions: {

        bar: {

          columnWidth: '15%', // Adjust the column width here

          startingShape: 'flat', // Set the starting shape to flat

          endingShape: 'flat', // Set the ending shape to flat

          horizontal: false, // Set horizontal to false for vertical columns

        },

      },

    },

    series: [

      {

        name: '21D MA',

        type: 'column',

        data: [44, 55, 41, 67, 22,79,98,56,34,12,90,107],

      },

      {

        name: '14D MA',

        type: 'line',

        data: [30, 40, 35, 50, 49,55,48,31,85,61,1,50],

      },
      {

        name: '7D MA',

        type: 'line',

        data: [30, 40, 45, 40, 79,98,67,54,9,32,88,10],

      },
      {

        name: '7D MA',

        type: 'line',

        data: [30, 40, 45, 40, 65,46,98,34,87,60,40,40,40],

      },


    ],

  };




  return (

    <Chart

      options={chartOptions.options}

      series={chartOptions.series}

      type="line"

      height={400}


      width={600}

    />

  );

};




export default MixedLineBarChart;