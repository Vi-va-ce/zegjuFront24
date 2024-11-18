import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PassingProbability = ({ dat }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 2,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 10,
              fontWeight: ''
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {
              value: dat,
              name: 'passing probability',
              itemStyle: {
                color: 'rgba(255, 58, 247, 0.76)' // Color for the first data point
              }
            },
            {
              value: 100 - dat,
              name: '',
              itemStyle: {
                color: '#D9D9D9' // Color for the second data point
              }
            }
          ]
        }
      ]
    };

    option && myChart.setOption(option);

    return () => {
      // Clean up the chart when the component is unmounted
      myChart.dispose();
    };
  }, [dat]);

  return <div ref={chartRef} style={{ width: '100%', height: '188px' }} />;
};

export default PassingProbability;