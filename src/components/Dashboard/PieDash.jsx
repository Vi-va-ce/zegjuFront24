import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useMediaQuery } from 'react-responsive';

const PieDash = ({questionData}) => {
  const chartRef = useRef(null);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' }); // Adjust the max-width as needed
  const sr= questionData?.science_score?.right_answer;

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);
    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: questionData?.science_score?.right_answer, name: 'right answer of science' },
            { value:questionData?.science_score?.wrong_answer, name: 'wrong answer of science' },
            { value: questionData?.history_score?.right_answer, name: 'right answer of history' },
            { value: questionData?.history_score?.wrong_answer, name: 'wrong answer of history' },
            
          ]
        }
      ]
    };
    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [questionData]);

  return <div ref={chartRef} style={{ width: isMobile ? '94%' : '270%', height: isMobile ? '454px' : '500px' }}></div>
      
    
  
}

export default PieDash;