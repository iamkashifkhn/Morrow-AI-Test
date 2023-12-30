// import React from "react";
// import Chart from "react-apexcharts";
// import { Spinner } from "reactstrap";

// const HeatmapChart = ({data, loading}) => {
//   if (!data) {
//     return (
//       <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
//       <Spinner className="m-5" color="primary">
//         Loading...
//       </Spinner>
//       </div>
//     );
//   }

//   const chartData = {
//     series: [
//       {
//         name: "Visitors",
//         data: data?.map((entry) => ({
//           x: `${entry.hour * 2} Hrs`,
//           // y: entry.total_average_visitors * Math.floor(Math.random() * 20),
//           y: Math.abs(entry.total_average_visitors * Math.floor(Math.random() * 20)),
//         })),
//       },
//     ],
//     options: {
//       chart: {
//         type: "heatmap",
//       },
//       xaxis: {
//         type: "category",
//         title: { text: "2 Hours Interval" },
//       },
//     },
//   };

//   // if (loading) {
//   //   return (
//   //     <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
//   //     <Spinner className="m-5" color="primary">
//   //       Loading...
//   //     </Spinner>
//   //     </div>
//   //   );
//   // }


//   return (
//     <div>
//       <Chart
//         options={chartData.options}
//         series={chartData.series}
//         type="heatmap"
//         height={350}
//       />
//     </div>
//   );
// };

// export default HeatmapChart;

import React from 'react';
import Chart from 'react-apexcharts';
import { Spinner } from 'reactstrap';

const HeatmapChart = ({ data }) => {
  if (!data) {
    return (
      <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
      </div>
    );
  }
  

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
      title : {
        text: "Hours"
      }
      // categories: Object?.keys(data),
    },
    yaxis: {
      title: {
        text: 'Date',
        // categories: Object.keys(data[Object.keys(data)[0]]).map(entry => entry.hour),
      },
    },
    plotOptions: {
      heatmap: {
        radius: 30,
      },
    },
  };

  const series = Object.keys(data).map((date) => ({
    name: date,
    data: data[date].map((entry) => ({
      x: entry.hour,
      y: entry.visits,
      // value: entry.visits,
    })),
  }));

  return (
    <div>
      <Chart options={options} series={series} type="heatmap" height="400" />
    </div>
  );
};

export default HeatmapChart;
