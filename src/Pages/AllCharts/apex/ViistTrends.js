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
  
  const dummyMaleData = data?.genderTrend30Days?.map(entry => entry.total_male)
  const dummyFemaleData = data?.genderTrend30Days?.map(entry => entry.total_female) || [];
  const dummyKidsData = data?.genderTrend30Days?.map(entry => entry.total_kids) || [];
  const dummyDateLabels = data?.genderTrend30Days?.map(entry => entry.date) || [];

  const additionalDates = ['2024-01-31','2024-02-01','2024-02-02','2024-02-03','2024-02-04','2024-02-05','2024-02-06','2024-02-07','2024-02-08','2024-02-09','2024-02-10','2024-02-11']

  const maleData = [...dummyMaleData, 75, 64, 85, 94, 141, 65 ,69 , 88 , 101 , 87 , 75, 79 ] || [];
  const femaleData = [...dummyFemaleData, 25, 44, 41, 24, 55, 40 ,29 , 38 , 19 , 27 , 20, 29] || [];
  const kidsData = [...dummyKidsData, 5, 4, 9, 14, 22, 15 ,9 , 8 , 2 , 4 , 12, 7] || [];
  const dateLabels = [...dummyDateLabels, ...additionalDates ] || [];


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
