import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Spinner } from 'reactstrap';

const MonthlyAverageVisits = ({ data }) => {
  // console.log(data, "HELLO")
  if (!data) {
    return (
      <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
      <Spinner className="m-5" color="primary">
        Loading...
      </Spinner>
      </div>
    );
  }

  // let months = ["February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]
  let months = ["April", "May", "June", "July", "August", "September", "October", "November"]

  let emptyData = [0,0,0,0,0,0,0,0, 1474, 2730, 1205, 1859]
  const monthlyData = {
    series: [
      {
        name: "Visits",
        // data: [...emptyData, ...(data?.totalVisitsLast12Months?.map(month => month.total_visitors) || [])],
        data: [...emptyData],
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
      // Math?.max(...data?.daily_visits_7_days?.map(entry => entry.total_visits)) + 100,
      plotOptions: {
        bar: {
          borderRadius: 10, 
          dataLabels: {
            position: 'top',
          },
        },
      },
      xaxis: {
        // categories: [...months , ...data?.totalVisitsLast12Months?.map(month => `${month.year}-${month.month}`)] || [],
        categories: [...months , "December", "January", "February", "March"] || [],
        title: { text: "Months" },
      },
      yaxis: { title: { text: "Number of Visitors" }, 
      min: 0, 
      // max: Math?.max(...data?.totalVisitsLast12Months?.map(entry => entry.total_visitors)) + 100,
      max: 3000,
    },
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
