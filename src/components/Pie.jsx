import React from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "Total answer assessment",
  pieHole: 0.6,
  is3D: false,
};

function Pie({ data }) {
  const { mainSections } = data;
  const total_wrong_answer = mainSections && mainSections.total_wrong_answer && mainSections.total_wrong_answer.score || 0;
  const total_right_answer = mainSections && mainSections.total_right_answer && mainSections.total_right_answer.score || 0;

  const chartData = [
    ["Task", "Total answers"],
    ["Right answer", total_right_answer],
    ["Wrong Answers", total_wrong_answer],
  ];

  return (
    <div className="">
      <div className="rounded-tl-fullborder-double"></div>
      <Chart
        chartType="PieChart"
        width="68.5%"
        height="270px"
        data={chartData}
        options={options}
      />
    </div>
  );
}

export default Pie;