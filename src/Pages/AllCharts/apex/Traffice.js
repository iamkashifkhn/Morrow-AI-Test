import React from "react"
import ReactApexChart from "react-apexcharts"

const ColumnWithDataLabelsData = {
  series: [
    {
      name: "Traffic",
      data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%"
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    colors: ["rgba(13, 180, 214, 0.85)"],
    grid: {
      borderColor: "#f1f1f1",
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      position: "bottom",
      labels: {
        show: true,
        offsetY: -4,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
        offsetY: -35,
      },
    },
    fill: {
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100],
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val + "%"
        },
      },
    },
    title: {
      text: "Traffic Per Day",
      floating: true,
      offsetY: 0,
      align: "right",
      style: {
        color: "#444",
      },
    },
  },
}

const ColumnWithDataLabels = () => {
  return(
    <React.Fragment>
        <ReactApexChart
          options={ColumnWithDataLabelsData.options}
          series={ColumnWithDataLabelsData.series}
          type="bar"
          height={350}
          className="apex-charts"
        />
      </React.Fragment>
  )
}

export default ColumnWithDataLabels;