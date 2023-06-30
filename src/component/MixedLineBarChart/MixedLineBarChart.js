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

      colors: ['#FF0000', '#FFC0CB'], // Specify the colors for columns and curves

      xaxis: {

        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],

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

          columnWidth: '10%', // Adjust the column width here

          startingShape: 'flat', // Set the starting shape to flat

          endingShape: 'flat', // Set the ending shape to flat

          horizontal: false, // Set horizontal to false for vertical columns

        },

      },

    },

    series: [

      {

        name: 'Column Series',

        type: 'column',

        data: [44, 55, 41, 67, 22],

      },

      {

        name: 'Curve Series',

        type: 'line',

        data: [30, 40, 35, 50, 49],

      },

      {

        name: 'Series',

        type: 'line',

        data: [35, 45, 37, 58, 52],

      },

    ],

  };




  return (

    <Chart

      options={chartOptions.options}

      series={chartOptions.series}

      type="line"

      height={500}


      width={1000}

    />

  );

};




export default MixedLineBarChart;