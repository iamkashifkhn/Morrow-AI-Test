import React from "react";
import { Spinner } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const CustomerGenderDistributionChart = ({data, loading , selectedOption}) => {
  // const series = [data?.todayMaleCount, data?.todayFemaleCount, data?.todayKidsCount];
  // const getSeriesData = () => {
  //   switch (selectedOption) {
  //     case "Day":
  //       return [data?.total_m_f_k_24h?.total_male, data?.total_m_f_k_24h?.total_female, data?.total_m_f_k_24h?.total_kids];
  //     case "Week":
  //       return [data?.total_m_f_k_7d?.total_male,  data?.total_m_f_k_7d?.total_female, data?.total_m_f_k_7d?.total_kids];
  //     case "Month":
  //       return [data?.total_m_f_k_30d?.total_male, data?.total_m_f_k_30d?.total_female, data?.total_m_f_k_30d?.total_kids];
  //     default:
  //       return [0, 0, 0]; 
  //   }
  // };

  const getSeriesData = () => {
    switch (selectedOption) {
      case "Day":
        return [217, 50, 8];
      case "Week":
        return [998,  405, 134];
      case "Month":
        return [3452, 1805, 700];
      default:
        return [0, 0, 0]; 
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
        // width="450"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default CustomerGenderDistributionChart;
