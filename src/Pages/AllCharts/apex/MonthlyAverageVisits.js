import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Spinner } from 'reactstrap';

const MonthlyAverageVisits = ({ data, loading }) => {
  const monthlyData = {
    series: [
      {
        name: "Visits",
        data: data?.totalVisitsLast12Months?.map(month => month.total_visitors) || [],
      },
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
        },
      },
      xaxis: {
        categories: data?.totalVisitsLast12Months?.map(month => `${month.year}-${month.month}`) || [],
        title: { text: "Months" },
      },
      yaxis: { title: { text: "Number of Visitors" }, min: 0, max: 5000 },
      legend: {
        position: 'top',
        offsetY: 30,
      },
      responsive: [
        {
          breakpoint: 600,
          options: { chart: { toolbar: { show: false } }, legend: { show: false } },
        },
      ],
    },
  };

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
        options={monthlyData.options}
        series={monthlyData.series}
        type="bar"
        height="380"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default MonthlyAverageVisits;
