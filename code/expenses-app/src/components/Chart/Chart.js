import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const totalMaximum = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));
  
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
