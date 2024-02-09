// import React from 'react';
// import Chart from 'react-apexcharts';
// import { Spinner } from 'reactstrap';

// const HeatmapChart = ({ data}) => {
  
//   if (!data) {
//     return (
//       <div className="page-content" style={{ display: 'flex', justifyContent: 'center' }}>
//         <Spinner className="m-5" color="primary">
//           Loading...
//         </Spinner>
//       </div>
//     );
//   }

//   // Remove the first index from the x-axis categories and y-axis data
//   const categories = Object.keys(data).slice(1);
//   // const yData = Object.keys(data[categories[0]]).map((entry) => entry.hour).slice(1);
// //   const xData = categories.map((date) =>
// //   data[date].map((entry) => entry.hour)
// // );
// const xData = [3, 4 , 5, 6 , 7 , 8 ]

// // const flattenedXData = [].concat(...xData);

// // console.log(xData)

//   const options = {
//     chart: {
//       type: 'heatmap',
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     colors: ['#008FFB'],
//     xaxis: {
//       type: 'category',
//       title: {
//         text: 'Hours',
//       },
//       categories: xData[0],
//     },
//     yaxis: {
//       title: {
//         text: 'Date',
//       },
//       categories: categories,
//     },
//     plotOptions: {
//       heatmap: {
//         radius: 30,
//       },
//     },
//   };

//   // Remove the first index from the series data
//   const series = categories.map((date) => ({
//     name: date,
//     data: data[date].map((entry) => ({
//       x: xData[0],
//       y: `${entry.visits} visits`,
//     })).slice(1),
//   }));

//   return (
//     <div>
//       <Chart options={options} series={series} type="heatmap" height="400" />
//     </div>
//   );
// };

// export default HeatmapChart;


import React from 'react';
import Chart from 'react-apexcharts';
import { Spinner } from 'reactstrap';

const HeatmapChart = ({ data }) => {
  // Dummy data for 7 days and 24 hours
  const dummyData = {
    '2024-02-05': Array.from({ length: 24 }, (_, i) => ({ hour: i, visits: Math.floor(Math.random() * 50) })),
    '2024-02-06': Array.from({ length: 24 }, (_, i) => ({ hour: i, visits: Math.floor(Math.random() * 50) })),
    '2024-02-07': Array.from({ length: 24 }, (_, i) => ({ hour: i, visits: Math.floor(Math.random() * 50) })),
    '2024-02-08': Array.from({ length: 24 }, (_, i) => ({ hour: i, visits: Math.floor(Math.random() * 50) })),
    '2024-02-09': Array.from({ length: 24 }, (_, i) => ({ hour: i, visits: Math.floor(Math.random() * 50) })),
    '2024-02-10': Array.from({ length: 24 }, (_, i) => ({ hour: i, visits: Math.floor(Math.random() * 50) })),
    '2024-02-11': Array.from({ length: 24 }, (_, i) => ({ hour: i, visits: Math.floor(Math.random() * 50) }))
  };

  // Use dummy data if no data is provided
  if (!data) {
    data = dummyData;
  }

  const xData = Array.from({ length: 24 }, (_, i) => i);

  const options = {
    chart: {
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#008FFB'],
    xaxis: {
      type: 'category',
      title: {
        text: 'Hours',
      },
      categories: xData,
    },
    yaxis: {
      title: {
        text: 'Date',
      },
      categories: Object.keys(data),
    },
    plotOptions: {
      heatmap: {
        radius: 30,
      },
    },
  };

  const categories = Object.keys(data);

  const series = categories.map((date) => ({
    name: date,
    data: data[date].map((entry) => ({
      x: entry.hour,
      y: entry.visits,
    })),
  }));

  return (
    <div>
      <Chart options={options} series={series} type="heatmap" height="400" />
    </div>
  );
};

export default HeatmapChart;
