import React from "react";
import { Spinner } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const CustomerGenderDistributionChart = ({data, loading , selectedOption}) => {
  // const series = [data?.todayMaleCount, data?.todayFemaleCount, data?.todayKidsCount];
  const getSeriesData = () => {
    switch (selectedOption) {
      case "Day":
        return [data?.todayMaleCount, data?.todayFemaleCount, data?.todayKidsCount];
      case "Week":
        return [data?.weekMaleCount, data?.weekFemaleCount, data?.weekKidsCount];
      case "Month":
        return [data?.monthMaleCount, data?.monthFemaleCount, data?.monthKidsCount];
      default:
        return [0, 0, 0]; // Default data if selectedOption is not recognized
    }
  };

  const series = getSeriesData();

  const options = {
    chart: {
      height: 350,
      type: "pie",
    },

    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return `${opts.w.globals.series[opts.seriesIndex]}%`;
          },
          style: {
            fontSize: "20px",
          },
        },
      },

    },
    legend : {
      show: false,
    },
    labels: ["Male", "Female", "Children"],
    colors: ["#4CAEC9", "#61E1E6", "#569294"],
  };


  if (loading) {
    return (
      <div style={{height:'350px', display:'flex', justifyContent:'center'}}>
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height="350"
        width="450"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default CustomerGenderDistributionChart;
