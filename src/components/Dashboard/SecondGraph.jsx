import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useMediaQuery } from 'react-responsive';

function SecondGraph({ questionData }) {
  const chartRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' }); // Adjust the max-width as needed

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        type: 'category',
        data: isMobile ? [] : ['Algebra', 'Problem Solving', 'Passport Advance', 'Total']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [questionData?.second_section?.heart_of_algebra?.right_answer, questionData?.second_section?.problem_solving_analysis?.right_answer,questionData?.second_section?.passport_advanced_math?.right_answer,questionData?.second_section?.average?.right_answer],
          type: 'bar',
          itemStyle: {
            color: function(params) {
              var colorList = ['#11A39A', '#00FF38 ', '#4D219A', '#035C57'];
              return colorList[params.dataIndex];
            }
          },
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };

    option && myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [questionData, isMobile]);

  return (
    <div>
      <div
        ref={chartRef}
        style={{
          width: isMobile ? '88%' : '85.5%',
          height: isMobile ? '204px' : '500px',
          background: 'white'
        }}
      />
    </div>
  );
}

export default SecondGraph;