import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useMediaQuery } from 'react-responsive';

function FirstGraph({ questionData }) {
  const chartRef = useRef(null);

  // Define media queries for responsiveness
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' }); // Adjust the max-width as needed

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        type: 'category',
        data: isMobile ? [] : ['Command of evidence', 'Words in context', 'Expression of ideas', 'Total']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            questionData?.second_section?.command_of_evidence?.right_answer,
            questionData?.second_section?.words_in_context?.right_answer,
            questionData?.second_section?.expression_of_Ideas?.right_answer,
            questionData?.second_section?.average?.right_answer,
          ],
          type: 'bar',
          itemStyle: {
            color: function (params) {
              var colorList = ['#031621', '#C23FCD ', '#0DB28B', '#035C57'];
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

export default FirstGraph;
