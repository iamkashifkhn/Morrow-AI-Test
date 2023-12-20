// // import React from "react"
// // import ReactApexChart from "react-apexcharts"

// // const chartapexData = {
// //   series: [
// //     { name: "High - 2018", data: [26, 24, 32, 36, 33, 31, 33] },
// //     // { name: "Low - 2018", data: [14, 11, 16, 12, 17, 13, 12] },
// //   ],
// //   options: {
// //     chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
// //     colors: ["rgb(13, 180, 214)", "rgb(241, 180, 76)"],
// //     dataLabels: { enabled: !0 },
// //     stroke: { width: [3, 3], curve: "straight" },
// //     title: { text: "Average High & Low Temperature", align: "left" },
// //     grid: {
// //       row: { colors: ["transparent", "transparent"], opacity: 0.2 },
// //       borderColor: "#f1f1f1",
// //     },
// //     markers: { style: "inverted", size: 6 },
// //     xaxis: {
// //       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
// //       title: { text: "Month" },
// //     },
// //     yaxis: { title: { text: "Temperature" }, min: 5, max: 40 },
// //     legend: {
// //       position: "top",
// //       horizontalAlign: "right",
// //       floating: !0,
// //       offsetY: -25,
// //       offsetX: -5,
// //     },
// //     responsive: [
// //       {
// //         breakpoint: 600,
// //         options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
// //       },
// //     ],
// //   },
// // }


// // const chartapex = () => {
// //   return(
// //     <React.Fragment>
// //         <ReactApexChart
// //           options={chartapexData.options}
// //           series={chartapexData.series}
// //           type="line"
// //           height="380"
// //           className="apex-charts"
// //         />
// //       </React.Fragment>
// //   )
// // }

// // export default chartapex;

import React from "react";
import ReactApexChart from "react-apexcharts";

const busiestHoursData = {
  series: [
    { name: "Visits", data: [450, 200, 300, 400, 500, 600, 700, 680, 650, 800, 700, 600, 500, 400, 300, 200, 150] },
  ],
  options: {
    chart: { zoom: { enabled: false }, toolbar: { show: true } },
    colors: ["rgb(13, 180, 214)"],
    dataLabels: { enabled: true },
    stroke: { width: [3], curve: "smooth" },
    title: { text: "Busiest Hours of the Day", align: "left" },
    grid: {
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#f1f1f1",
    },
    markers: { style: "inverted", size: 6 },
    xaxis: {
      categories: [
        "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM",
        "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
        "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"
      ],
      title: { text: "Hour of the Day" },
    },
    yaxis: { title: { text: "Number of Visitors" }, min: 0, max: 1000 },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { toolbar: { show: false } }, legend: { show: false } },
      },
    ],
  },
};

const BusiestHoursChart = () => {
  return (
    <React.Fragment>
      <ReactApexChart
        options={busiestHoursData.options}
        series={busiestHoursData.series}
        type="line"
        height="380"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default BusiestHoursChart


