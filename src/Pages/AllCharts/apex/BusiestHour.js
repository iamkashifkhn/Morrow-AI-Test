import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// import generateData from './HolidayService'; 

export const generateData = (count, { min, max }) => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const value = Math.floor(Math.random() * (max - min + 1) + min);
      if(value > 80){
          data.push(value);
      } else{
        data.push(0)
      }
    }
    return data;
  };

const BusiestHour = () => {
  const [state, setState] = useState({
    series: [
      { name: '12:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '02:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '04:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '06:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '08:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '10:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '12:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '14:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '16:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '18:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '20:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '22:00', data: generateData(30, { min: 0, max: 90 }) },
      { name: '00:00', data: generateData(30, { min: 0, max: 90 }) },
    ],
    options: {
      chart: {
        height: 450,
        type: 'heatmap',
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        heatmap: {
          radius: 30,
          enableShades: false,
          colorScale: {
            ranges: [
              { from: 0, to: 50, color: 'transparent'},
              { from: 51, to: 100, color: '#00E396' },
            ],
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff'],
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "2023-01-01", "2023-01-02", "2023-01-03", "2023-01-04", "2023-01-05",
          "2023-01-06", "2023-01-07", "2023-01-08", "2023-01-09", "2023-01-10",
          "2023-01-11", "2023-01-12", "2023-01-13", "2023-01-14", "2023-01-15",
          "2023-01-16", "2023-01-17", "2023-01-18", "2023-01-19", "2023-01-20",
          "2023-01-21", "2023-01-22", "2023-01-23", "2023-01-24", "2023-01-25",
          "2023-01-26", "2023-01-27", "2023-01-28", "2023-01-29", "2023-01-30",
        ],
        title: { text: "Date" },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="heatmap" height={550} />
    </div>
  );
};

export default BusiestHour