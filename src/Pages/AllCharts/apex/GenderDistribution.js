// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import { Spinner } from "reactstrap";

// const GenderDistribution = ({ data, loading }) => {
//   const [chartData, setChartData] = useState({
//     series: [
//       { name: "Male", data: [] },
//       { name: "Female", data: [] },
//       { name: "Children", data: [] },
//     ],
//     options: {
//       chart: {
//         type: 'bar',
//         height: 350,
//         stacked: true,
//         stackType: '100%'
//       },
//       dataLabels: {
//         style: {
//           fontSize: "12px",
//           colors: ["white", "white", "white"],
//         },
//       },
//       colors: ["#569294", "#4CAEC9", "#61E1E6"],
//       grid: {
//         borderColor: "#f1f1f1",
//       },
//       xaxis: {
//         categories: [],
//       },


//       plotOptions: {
//         bar: {
//           horizontal: false,
//           borderRadius: 10,
//           dataLabels: {
//             total: {
//               enabled: true,
//               style: {
//                 fontSize: "13px",
//                 fontWeight: 900,
//               },
//             },
//           },
//         },
//       },
//       legend: {
//         position: "top",
//         offsetY: -20,
//       },
//     },
//   });
//   useEffect(() => {
//     if (data && data?.genderTrendLast7Hours) {
//       // Map the received data to the chart format
//       const mappedData = data?.genderTrendLast7Hours.map((entry) => ({
//         hour: entry.hour,
//         male: entry.total_male,
//         female: entry.total_female,
//         kids: entry.total_kids,
//       }));

//       // Extract data for each gender type
//       const maleData = mappedData.map((entry) => entry.male);
//       const femaleData = mappedData.map((entry) => entry.female);
//       const kidsData = mappedData.map((entry) => entry.kids);
//       const hours = mappedData.map((entry) => entry.hour);
//       setChartData({
//         ...chartData,
//         series: [
//           { name: "Male", data: maleData },
//           { name: "Female", data: femaleData },
//           { name: "Children", data: kidsData },
//         ],
//         options: {
//           ...chartData.options,
//           xaxis: {
//             ...chartData.options.xaxis,
//             categories: hours,
//           },
//         },
//       });
//     }
//   }, [data]);

//   if (loading) {
//     return (
//       <div className="page-content" style={{ display:'flex', justifyContent:'center'}}>
//       <Spinner className="m-5" color="primary">
//         Loading...
//       </Spinner>
//       </div>
//     );
//   }

//   return (
//     <React.Fragment>
//       <ReactApexChart
//         options={chartData.options}
//         series={chartData.series}
//         type="bar"
//         height={350}
//         className="apex-charts gender-distribution-chart"
//       />
//     </React.Fragment>
//   );
// };

// export default GenderDistribution;


import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Spinner } from "reactstrap";

const GenderDistribution = ({ data, loading }) => {
  const [chartData, setChartData] = useState({
    series: [
      { name: "Male", data: [] },
      { name: "Female", data: [] },
      { name: "Children", data: [] },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%'
      },
      dataLabels: {
        style: {
          fontSize: "12px",
          colors: ["white", "white", "white"],
        },
      },
      colors: ["#569294", "#4CAEC9", "#61E1E6"],
      grid: {
        borderColor: "#f1f1f1",
      },
      xaxis: {
        categories: [], // Dynamic labels will be added here
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      legend: {
        position: "top",
        offsetY: -20,
      },
    },
  });

  useEffect(() => {
    if (data && data?.genderTrendLast7Hours) {
      // Map the received data to the chart format
      const mappedData = data?.genderTrendLast7Hours.map((entry) => ({
        hour: entry.hour,
        male: entry.total_male,
        female: entry.total_female,
        kids: entry.total_kids,
      }));

      // Extract data for each gender type
      const maleData = mappedData.map((entry) => entry.male);
      const femaleData = mappedData.map((entry) => entry.female);
      const kidsData = mappedData.map((entry) => entry.kids);

      // Extract hours for x-axis labels
      const hoursWithAMPM = mappedData.map((entry) => {
        const hour = entry.hour;
        const formattedHour = hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
        return formattedHour;
      });

      setChartData({
        ...chartData,
        series: [
          { name: "Male", data: maleData },
          { name: "Female", data: femaleData },
          { name: "Children", data: kidsData },
        ],
        options: {
          ...chartData.options,
          xaxis: {
            ...chartData.options.xaxis,
            categories: hoursWithAMPM,
          },
        },
      });
    }
  }, [data]);

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
        height={350}
        className="apex-charts gender-distribution-chart"
      />
    </React.Fragment>
  );
};

export default GenderDistribution;
