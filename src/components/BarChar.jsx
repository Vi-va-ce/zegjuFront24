import React from "react";
import { Chart } from "react-google-charts";

const dataOld = [
  ["Name", "Popularity"],
  ["Eric", 8200],
];

const dataNew = [
  ["Name", "Popularity"],
  ["Eric", 1500],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export const options = {
  legend: { position: "top" },
  backgroundColor: "transparent",
  bar: { groupWidth: "80%" },
  chartArea: {
    left: "10%",
    top: "10%",
    width: "80%",
    height: "80%",
  },
  curveType: "function",
  isStacked: true,
};

function BarChar() {
  return (
    <div style={{ borderRadius: "10px", overflow: "hidden" }}>
      <Chart
        chartType="BarChart"
        width="100%"
        height="100%"
        diffdata={diffdata}
        options={options}
      />
    </div>
  );
}

export default BarChar;