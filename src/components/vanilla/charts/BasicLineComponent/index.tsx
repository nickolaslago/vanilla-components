import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';
import { Dimension, Measure, Dataset } from "@embeddable.com/core";
import { DataResponse } from "@embeddable.com/react";
import { COLORS, EMB_FONT, SMALL_FONT_SIZE, LIGHT_FONT } from '../../../constants';
import Title from '../../Title';
import ChartContainer from '../../ChartContainer'
import { truncateString } from '../../../util/utilFunctions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

//global chart settings
ChartJS.defaults.font.size = parseInt(SMALL_FONT_SIZE); 
ChartJS.defaults.color = LIGHT_FONT; 
ChartJS.defaults.font.family = EMB_FONT;
ChartJS.defaults.plugins.tooltip.enabled = true;

const chartOptions = (showLegend, showLabels, yAxisMin) => ({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
        left: 0,
        right: 0,
        top: showLabels ? 20 : 0, //Added so the highest data labels fits
        bottom: 0
    }
  },
  scale: {
    ticks: {
      precision: 0, //rounding for y-axis values
    },
  },
  scales: {
    y: {
      min: yAxisMin, 
      grace: '0%', //add percent to add numbers on the y-axis above and below the max and min values
      grid: {
        display: false, // display grid lines
      }
    },
    x: {
      grid: {
        display: false, // display grid lines
      }
    }
  },
  animation: {
    duration: 400,
    easing: 'linear',
  },
  plugins: {
    legend: {
      display: showLegend,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        boxHeight: 8
      }
    },
    datalabels: {
      align: 'top',
      display: showLabels ? 'auto' : false,
    }
  },
});

const chartData = (data, xAxis, metrics, applyFill) => {
  const labels = data?.map(d => format(d[xAxis.name]));
  return {
    labels,
    datasets: metrics.map((yAxis, i) =>
      ({
        label: yAxis.title,
        data: data?.map(d => d[yAxis.name]),
        backgroundColor: applyFill ? hexToRgb(COLORS[i % COLORS.length]) : COLORS[i % COLORS.length],
        borderColor: COLORS[i % COLORS.length],
        fill: applyFill,
        cubicInterpolationMode: 'monotone',
      })
    ),
  };
}


const format = text => {
  if(!text) {
    return text;
  }
  if (text.endsWith('T00:00:00.000')) {
    return new Intl.DateTimeFormat().format(new Date(text));
  }
  return new Date(text).toLocaleString();
}

//convert hex to rgb and add opacity. Used when a color-fill is applied beneath the chart line(s).
const hexToRgb = hex => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, 0.3)`
   : null;
}

type Props = {
  title?: string;
  showLegend?: boolean;
  ds?: Dataset;
  xAxis?: Dimension; // { name, title }
  metrics?: Measure; // [{ name, title }]
  results?: DataResponse; // { isLoading, error, data: [{ <name>: <value>, ... }] }
  applyFill?: boolean;
  showLabels?: boolean;
  yAxisMin?:number;
};

export default (props: Props) => {

  const { results, xAxis, metrics, title, showLegend, applyFill, showLabels, yAxisMin } = props;
  const { data } = results;

  return (

      <ChartContainer title={title} results={results}>
        <Line
          options={chartOptions(showLegend, showLabels, yAxisMin)} 
          data={chartData(data, xAxis, metrics, applyFill)} 
        />
      </ChartContainer>
  );
};
