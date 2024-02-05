import React from "react";
import ReactApexChart from "react-apexcharts";
import { Spinner } from "reactstrap";

const BusiestHoursChart = ({ data, loading }) => {

  if (!data) {
    return (
      <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
      </div>
    );
  }

  const maleData = data?.genderTrend30Days?.map(entry => entry.total_male) || [];
  const femaleData = data?.genderTrend30Days?.map(entry => entry.total_female) || [];
  const kidsData = data?.genderTrend30Days?.map(entry => entry.total_kids) || [];
  const dateLabels = data?.genderTrend30Days?.map(entry => entry.date) || [];


  const busiestHoursData = {
    series: [
      {
        name: "Male",
        data: maleData,
      },
      {
        name: "Female",
        data: femaleData,
      },
      {
        name: "Children",
        data: kidsData,
      },
      
      
    ],
    options: {
      chart: { zoom: { enabled: false }, toolbar: { show: true } },
      colors: ["rgb(13, 180, 214)", "#0dd696"],
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#333", "#333"],
        },
        background: {
          enabled: true,
          foreColor: "#fff",
        },
      },
      stroke: { width: [3, 3], curve: "smooth" },
      // title: { text: "Daily Visit Trends by Gender", align: "left" },
      grid: {
        row: { colors: ["transparent", "transparent"], opacity: 0.2 },
        borderColor: "#f1f1f1",
      },
      markers: { style: "inverted", size: 6, colors: ["rgb(13, 180, 214)", "#0dd696"] },
      xaxis: {
        categories: dateLabels,
        title: { text: "Date" },
      },
      yaxis: { title: { text: "Number of Visitors" }, min: 0, max: Math.max(...maleData, ...femaleData, ...kidsData) + 150 },
      legend: {
        show: true,
        position: "top",
        floating: true,
        offsetY: -20,
        offsetX: 0,
      },
      responsive: [
        {
          breakpoint: 600,
          options: { chart: { toolbar: { show: false } }, legend: { show: true } },
        },
      ],
    },
  };

  // if (loading) {
  //   return (
  //     <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
  //     <Spinner className="m-5" color="primary">
  //       Loading...
  //     </Spinner>
  //     </div>
  //   );
  // }

  return (
    <React.Fragment>
      <ReactApexChart
        options={busiestHoursData.options}
        series={busiestHoursData.series}
        type="line"
        height="420"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default BusiestHoursChart;
