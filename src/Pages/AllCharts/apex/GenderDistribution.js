// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import { Spinner } from "reactstrap";

// // const GenderDistribution = ({ data, loading }) => {
// const GenderDistribution = ({loading}) => {


//   let data = []
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
//         categories: [], // Dynamic labels will be added here
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
//     if (!loading) {
//       // Map the received data to the chart format
//       const mappedData = data?.genderTrendLast7Hours.map((entry) => ({
//         hour: entry.hour,
//         male: entry.total_male,
//         female: entry.total_female,
//         kids: entry.total_kids,
//       }));

//       // Extract data for each gender type
//       // const maleData = mappedData.map((entry) => entry.male);
//       // const femaleData = mappedData.map((entry) => entry.female);
//       // const kidsData = mappedData.map((entry) => entry.kids);

//       const maleData = [24, 38 , 44, 36 , 29 , 41 , 55]
//       const femaleData = [19, 8 , 13, 7 , 12 , 14 ,15];
//       const kidsData = [1 , 0  , 4 , 5, 3 , 6 , 9]

//       // Extract hours for x-axis labels
//       const hoursWithAMPM = mappedData.map((entry) => {
//         const hour = [6 , 7 , 8 , 9 , 10 , 11 , 12 , 13]
//         const formattedHour = hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
//         return formattedHour;
//       });

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
//             categories: hoursWithAMPM,
//           },
//         },
//       });
//     }
//   }, [data]);

//   if (!data) {
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

const GenderDistribution = ({ loading }) => {
  const [chartData, setChartData] = useState({
    series: [
      { name: "Male", data: [] },
      { name: "Female", data: [] },
      { name: "Children", data: [] },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
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
    if (!loading) {
      // Dummy data for 7 hours
      const dummyData = [
        { hour: 6, male: 24, female: 19, kids: 1 },
        { hour: 7, male: 38, female: 8, kids: 0 },
        { hour: 8, male: 44, female: 13, kids: 4 },
        { hour: 9, male: 36, female: 7, kids: 5 },
        { hour: 10, male: 29, female: 12, kids: 3 },
        { hour: 11, male: 41, female: 14, kids: 6 },
        { hour: 12, male: 55, female: 15, kids: 9 },
      ];

      // Extract hours for x-axis labels
      const hoursWithAMPM = dummyData.map(
        (entry) => `${entry.hour} ${entry.hour < 12 ? "AM" : "PM"}`
      );

      // Extract data for each gender type
      const maleData = dummyData.map((entry) => entry.male);
      const femaleData = dummyData.map((entry) => entry.female);
      const kidsData = dummyData.map((entry) => entry.kids);

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
  }, [loading]);

  if (loading) {
    return (
      <div className="page-content" style={{ display: "flex", justifyContent: "center" }}>
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
