import React from "react";
import ReactApexChart from "react-apexcharts";
import { Spinner } from "reactstrap";

const LineColumnArea = ({ chartType, data, loading }) => {
  const dailyAverages = data?.avgDailyVisits?.map((day) => Object?.values(day)[0]) || [];
  const hourlyAverages = data?.avgHourlyVisits?.map((hour) => hour?.average_visitors) || [];

  const dailyData = {
    series: [
      { name: "Visits", data: dailyAverages  },
    ],
    options: {
      chart: { zoom: { enabled: false }, toolbar: { show: true } },
      colors: ["rgb(13, 180, 214)"],
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
        formatter: function (val) {
          return val?.toFixed(2);
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        }
      },
      xaxis: {
        categories: ["Sun" ,"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        title: { text: "Days" },
      },
      yaxis: {
        title: { text: "Number of Visitors" },
        min: 0,
        max: Math?.max(...hourlyAverages) + 10,
        labels: {
          formatter: function (value) {
            return value?.toFixed(2);
          },
        },
      },
      responsive: [
        {
          breakpoint: 600,
          options: { chart: { toolbar: { show: false } }, legend: { show: false } },
        },
      ],
    },
  };

  const hourlyData = {
    series: [
      { name: "Visits", data: hourlyAverages },
    ],
    options: {
      chart: { zoom: { enabled: false }, toolbar: { show: true } },
      colors: ["rgb(13, 180, 214)"],
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        }
      },
      xaxis: {
        categories: [
          "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM",
          "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
          "12 PM", "1 PM", "2 PM", "3 PM", "4 PM" , "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
        ],
        title: { text: "Hours" },
      },
      yaxis: {
        title: { text: "Number of Visitors" },
        min: 0,
        max: Math.max(...dailyAverages) + 10,
        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          },
        },
      },
      legend: {
        position: "bottom",
        // horizontalAlign: "center",
        floating: true,
        offsetY: 0,
        offsetX: 0,
      },
      responsive: [
        {
          breakpoint: 600,
          options: { chart: { toolbar: { show: false } }, legend: { show: false } },
        },
      ],
    },
  };

  const chartData = chartType === "day" ? dailyData : hourlyData;

  if (loading) {
    return (
      <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height="380"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default LineColumnArea;
