import { DataResponse } from '@embeddable.com/react';
import React, { useMemo, useRef } from 'react';
import Chart from 'react-apexcharts';

import { COLORS, EMB_FONT, SMALL_FONT_SIZE } from '../../../constants';
import useFont from '../../../hooks/useFont';
import useResize from '../../../hooks/useResize';
import Spinner from '../../Spinner';
import Title from '../../Title';
import { WarningIcon } from '../../icons';
import '../../index.css';
import { Inputs } from './DonutChart.emb';

type Props = Inputs & {
  donut: DataResponse;
};

export default (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width] = useResize(ref);

  useFont();

  const { labels, series } = useMemo(() => {
    const labels =
      props.donut.data
        ?.sort((a, b) => b[props.metric?.name || ''] - a[props.metric?.name || ''])
        .map((record) => record[props.segments.name]) || [];

    const series =
      props.donut.data
        ?.sort((a, b) => b[props.metric?.name || ''] - a[props.metric?.name || ''])
        .map((record) => parseInt(`${record[props.metric?.name || '']}`, 10)) || [];

    const length = props.donut.data?.length || 0;

    const maxLength = props.maxSegments || length;

    if (length <= maxLength) return { labels, series };

    return {
      labels: labels.reduce((memo, label, i) => {
        if (i >= maxLength) return memo;

        memo.push(i < maxLength - 1 ? label : 'Other');

        return memo;
      }, []),
      series: series.reduce((memo: number[], s, i) => {
        if (i < maxLength - 1) {
          memo.push(s);
          return memo;
        }

        memo[maxLength - 1] = memo[maxLength - 1] || 0;

        memo[maxLength - 1] += s;

        return memo;
      }, [])
    };
  }, [props]);

  if (props.donut?.error) {
    return (
      <div className="h-full flex items-center justify-center font-embeddable text-sm">
        <WarningIcon />
        <div className="whitespace-pre-wrap p-4 max-w-sm text-xs">{props.donut?.error}</div>
      </div>
    );
  }

  return (
    <div className="h-full relative font-embeddable text-sm flex flex-col">
      <Title title={props.title} />
      <div className="relative grow" ref={ref}>
        <Chart
          className="donut-chart"
          options={{
            colors: COLORS,
            chart: {
              type: 'donut',
              parentHeightOffset: 0,
              fontFamily: EMB_FONT
            },
            grid: {
              show: true,
              padding: { left: 0, right: 0, top: 0, bottom: 0 }
            },
            tooltip: {
              custom: ({ series, seriesIndex, w }) => {
                const left = w.globals.clientX - 50;
                const top = w.globals.clientY - 120;
                const color = w.config.colors[seriesIndex];
                const label = labels[seriesIndex] || '';
                const value = props.showPercentages
                  ? `${Math.round(
                      (100 * series[seriesIndex]) / series.reduce((t, n) => t + n, 0)
                    )}%`
                  : series[seriesIndex];
                const offsets = w.globals.dom.baseEl.getBoundingClientRect();

                return `<div style="font-size: ${SMALL_FONT_SIZE}; left: ${
                  left - offsets.left
                }px; top: ${top - offsets.top}px;" class="chart-tooltip">
                <strong>${props.metric?.title || ''}: ${value}</strong>
                <div><b style="background-color:${color}"></b>${label}</div>
              </div>`;
              },
              style: {
                fontSize: '9px'
              }
            },
            labels,
            legend: {
              show: !!props.showLegend,
              showForSingleSeries: true,
              position: 'bottom',
              itemMargin: {
                horizontal: 10,
                vertical: 5
              },
              fontSize: SMALL_FONT_SIZE
            },
            dataLabels: {
              enabled: !!props.showLabels,
              dropShadow: { enabled: false },
              background: {
                enabled: true,
                borderRadius: 10,
                padding: 4
              },
              style: { fontSize: SMALL_FONT_SIZE },
              ...(props.showPercentages
                ? {}
                : {
                    formatter: (val, props) => props.w.config.series[props.seriesIndex]
                  })
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '45%'
                }
              }
            }
          }}
          height="100%"
          width={width}
          series={series}
          type="donut"
        />

        {props.donut?.isLoading && !props.donut?.data?.length && (
          <div className="absolute left-0 top-0 w-full h-full z-10 skeleton-box bg-gray-300 overflow-hidden rounded" />
        )}
        <Spinner show={props.donut?.isLoading} />
      </div>
    </div>
  );
};
