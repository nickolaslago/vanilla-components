import { DataResponse } from '@embeddable.com/react';
import { format, parseJSON } from 'date-fns';
import React, { useEffect, useMemo, useRef } from 'react';
import Chart from 'react-apexcharts';

import { COLORS, EMB_FONT, SMALL_FONT_SIZE } from '../../../constants';
import useFont from '../../../hooks/useFont';
import Spinner from '../../Spinner';
import Title from '../../Title';
import { WarningIcon } from '../../icons';
import '../../index.css';
import { Inputs } from './LineChart.emb';

const granularityFormats = {
  second: 'hh:mm.ss d MMM',
  minute: 'hh:mm d MMM',
  hour: 'hh:mm d MMM',
  day: 'd MMM',
  week: 'd MMM',
  month: 'LLL yy',
  quarter: 'qqq yy',
  year: 'yy'
};

type Props = Inputs & {
  line: DataResponse;
};

export default (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useFont();

  useEffect(() => {
    console.log('LineChart props', props);
  }, [props]);

  const { labels, series } = useMemo(() => {
    type Memo = {
      labels: string[];
      grouped: { [a: string]: { [b: string]: number } };
    };

    if (!props.line?.data || !props.metrics?.length || !props.xAxis?.name) {
      return { labels: [], series: [] };
    }

    const { grouped, labels } = props.line.data.reduce(
      (memo: Memo, record) => {
        const date = record[props.xAxis?.name || ''] as string;

        if (!date) return memo;

        const formatted = format(parseJSON(date), granularityFormats[props.granularity || 'day']);

        props.metrics.forEach((m) => {
          memo.grouped[m.name] = memo.grouped[m.name] || {};

          memo.grouped[m.name][formatted] = parseInt(`${record[m.name] || 0}`, 10);
        });

        if (!memo.labels.includes(formatted)) memo.labels.push(formatted);

        return memo;
      },
      { labels: [], grouped: {} }
    );

    const series = Object.keys(grouped).map((name) => ({
      name: props.metrics.find((m) => m.name === name)?.title || '',
      data: labels.map((label) => grouped[name][label] || 0)
    }));

    return { labels, series };
  }, [props]);

  if (props.line?.error) {
    return (
      <div className="h-full flex items-center justify-center font-embeddable text-sm">
        <WarningIcon />
        <div className="whitespace-pre-wrap p-4 max-w-sm text-xs">{props.line?.error}</div>
      </div>
    );
  }

  return (
    <div className="h-full relative font-embeddable text-sm flex flex-col">
      <Title title={props.title} />
      <div className="relative grow" ref={ref}>
        <Chart
          className="line-chart"
          height="100%"
          options={{
            colors: COLORS,
            chart: {
              type: 'line',
              toolbar: {
                show: false
              },
              zoom: {
                enabled: false
              },
              parentHeightOffset: 0,
              fontFamily: EMB_FONT
            },
            grid: {
              show: false,
              padding: { left: 0, right: 0, top: 0, bottom: 0 }
            },
            xaxis: {
              type: 'category',
              categories: labels,
              title: { text: props.xAxisTitle, style: { color: '#333942' } },
              labels: {
                style: { fontSize: SMALL_FONT_SIZE, colors: ['#959CA8'] },
                hideOverlappingLabels: true
              },
              overwriteCategories: labels,
              crosshairs: { show: false }
            },
            yaxis: {
              title: { text: props.yAxisTitle, style: { color: '#333942' } },
              crosshairs: { show: false },
              labels: { style: { fontSize: SMALL_FONT_SIZE, colors: ['#959CA8'] } }
            },
            tooltip: {
              custom: (opt) => {
                const left = opt.w.globals.clientX - 50;
                const top = opt.w.globals.clientY - 120;
                const color = opt.w.config.colors[opt.seriesIndex];
                const label = series[opt.seriesIndex]?.name || '';
                const value = opt.series[opt.seriesIndex][opt.dataPointIndex];
                const offsets = opt.w.globals.dom.baseEl.getBoundingClientRect();

                return `<div style="font-size: ${SMALL_FONT_SIZE}; left: ${
                  left - offsets.left
                }px; top: ${top - offsets.top}px;" class="chart-tooltip">
                  <strong>${value}</strong>
                  <div><b style="background-color:${color}"></b>${label}</div>
                </div>`;
              },
              style: {
                fontSize: '9px'
              }
            },
            legend: {
              show: !!props.showLegend,
              showForSingleSeries: true,
              position: 'bottom',
              markers: {
                radius: 100
              },
              itemMargin: {
                horizontal: 10,
                vertical: 5
              },
              fontSize: SMALL_FONT_SIZE
            },
            dataLabels: {
              enabled: !!props.showLabels,
              dropShadow: { enabled: false },
              background: { enabled: false },
              offsetY: -6,
              style: { colors: ['##333942'], fontSize: SMALL_FONT_SIZE }
            },
            stroke: {
              show: true,
              width: 3,
              curve: 'smooth'
            },
            plotOptions: {
              bar: {
                borderRadius: 5,
                columnWidth: 22
              }
            }
          }}
          series={series}
          type="line"
        />
        {props.line?.isLoading && !props.line?.data?.length && (
          <div className="absolute left-0 top-0 w-full h-full z-10 skeleton-box bg-gray-300 overflow-hidden rounded" />
        )}
        <Spinner show={props.line?.isLoading} />
      </div>
    </div>
  );
};
