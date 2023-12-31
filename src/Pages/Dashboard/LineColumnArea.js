import React from "react";
import ReactApexChart from "react-apexcharts";
import { Spinner } from "reactstrap";

const LineColumnArea = ({ chartType, data, loading }) => {
  if (!data) {
    return (
      <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
      </div>
    );
  }

  const dailyAverages = Object?.values(data?.daily_visits_7_days)?.slice(1) || [];
  const hourlyAverages = data?.hourlyVisits?.map((entry) => entry.total_traffic);
  

  const dailyData = {
    series: [
      { name: "Visits", data: dailyAverages.map(entry => entry.total_visits)  },
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
          return val?.toFixed(0);
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
        categories: data?.daily_visits_7_days?.slice(1).map(entry => {
          const date = new Date(entry.date);
          const options = { weekday: 'short' };
          return new Intl.DateTimeFormat('en-US', options).format(date);
        }),
        
        title: { text: "Days" },
      },
      yaxis: {
        title: { text: "Number of Visitors" },
        min: 0,
        max: Math?.max(...data?.daily_visits_7_days?.slice(1).map(entry => entry.total_visits)) + 100,
        labels: {
          formatter: function (value) {
            return value?.toFixed(0);
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
        categories: data?.hourlyVisits?.map(entry => entry.hour.toString()) || [],
        title: { text: "Hours" },
      },
      yaxis: {
        title: { text: "Number of Visitors" },
        min: 0,
        max: Math.max(...hourlyAverages) + 10,
        labels: {
          formatter: function (value) {
            return value.toFixed(0);
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
