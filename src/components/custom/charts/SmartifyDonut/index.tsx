import { DataResponse } from '@embeddable.com/react';
import { Card, DonutChart, Title } from '@tremor/react';
import React, { useMemo } from 'react';

import useFont from '../../../hooks/useFont';
import { WarningIcon } from '../../../vanilla/icons';
import { Inputs } from './SmartifyDonut.emb';
import Spinner from '../../../vanilla/Spinner';

type Props = Inputs & {
  donut: DataResponse;
};

export default (props: Props) => {
  useFont();

  const formattedValue = useMemo(() => {
    if (!props.donut?.data?.length) return;

    if (!props.metric?.name) return;

    const donut = props.donut.data[0][props.metric.name];
    const num = parseFloat(donut);

    if (donut !== `${num}`) return donut;

    const formatter = new Intl.NumberFormat('us');
    return formatter.format(num);
  }, [props.donut, props.metric]);

  if (props.donut?.error) {
    return (
      <div className="h-full flex items-center justify-center font-embeddable text-sm">
        <WarningIcon />
        <div className="whitespace-pre-wrap p-4 max-w-sm text-xs">{props.donut?.error}</div>
      </div>
    );
  }

  return (
    <div style={{ boxShadow: '0 1px 4px #1c1c2133', borderRadius: '5px' }}>
      <Card>
        <Title></Title>
        <DonutChart
          data={props.donut.data}
          category={props.metric.name}
          index={props.segments.name}
          valueFormatter={formattedValue}
        ></DonutChart>
      </Card>
      {props.donut?.isLoading && !props.donut?.data?.length && (
        <div className="absolute left-0 top-0 w-full h-full z-10 skeleton-box bg-gray-300 overflow-hidden rounded" />
      )}
      <Spinner show={props.donut?.isLoading} />
    </div>
  );
};
