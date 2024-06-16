import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
  data: {
    classes: string[];
    confidences: number[];
    colors: string[];
  };
}

interface ChartData {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    chart: {
      type: string;
      toolbar: {
        show: boolean;
      };
    };
    colors?: string[];
    plotOptions: {
      bar: {
        borderRadius: number;
        horizontal: boolean;
        columnWidth: string;
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    grid: {
      show: boolean;
    };
    stroke: {
      colors: string[];
      width: number;
    };
    xaxis: {
      categories: string[];
      labels: {
        show: boolean;
      };
    };
    yaxis: {
      title: {
        text: string;
      };
      categories: string[];
    };
    fill: {
      opacity: number;
    };
    legend: {
      position: string;
      horizontalAlign: string;
    };
    tooltip: {
      y: {
        formatter: (val: number) => string;
      };
    };
  };
}

const ApexChart: React.FC<ChartProps> = ({ data }) => {
  console.log("data", data);

  const [chartData, setChartData] = useState<ChartData>({
    series: [
      ...data.classes.map((name, index) => ({
        name,
        data: [data.confidences[index]],
      })),
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      colors: data.colors,
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
          columnWidth: "55%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      stroke: {
        colors: ["transparent"],
        width: 4,
      },
      xaxis: {
        categories: data.classes,
        labels: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: "Confidence",
        },
        categories: data.classes,
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "right",
      },
      tooltip: {
        y: {
          formatter(val: number) {
            return val.toFixed(2);
          },
        },
      },
    },
  });

  console.log("chartData", chartData);

  // useEffect(() => {
  //   setChartData((prevState) => ({
  //     ...prevState,
  //     series: [
  //       {
  //         ...prevState.series[0],
  //         data: data.confidences,
  //       },
  //     ],
  //     options: {
  //       ...prevState.options,
  //       xaxis: {
  //         ...prevState.options.xaxis,
  //         categories: data.classes,
  //       },
  //       yaxis: {
  //         ...prevState.options.yaxis,
  //         categories: data.classes,
  //       },
  //       chart: {
  //         type: "bar",
  //         toolbar: {
  //           show: false,
  //         },
  //       },
  //       colors: data.colors,
  //       plotOptions: {
  //         bar: {
  //           borderRadius: 4,
  //           horizontal: false,
  //           columnWidth: "55%",
  //         },
  //       },
  //       dataLabels: {
  //         enabled: false,
  //       },
  //       grid: {
  //         show: false,
  //       },
  //       stroke: {
  //         colors: ["transparent"],
  //         width: 4,
  //       },
  //     },
  //   }));
  // }, [data]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
