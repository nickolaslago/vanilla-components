import { Measure } from '@embeddable.com/core';
import { DataResponse } from '@embeddable.com/react';
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';
import React, { useMemo } from 'react';

import useFont from '../../../hooks/useFont';
import { WarningIcon } from '../../../vanilla/icons';
import { Inputs } from './SmartifyKPI.emb';

type Props = Inputs & {
  title?: string;
  value: DataResponse;
  metric: Measure;
};

export default (props: Props) => {
  useFont();

  const formattedValue = useMemo(() => {
    if (!props.value?.data?.length) return;

    if (!props.metric?.name) return;

    const value = props.value.data[0][props.metric.name];
    const num = parseFloat(value);

    if (value !== `${num}`) return value;

    const formatter = new Intl.NumberFormat();
    return formatter.format(num);
  }, [props.value, props.metric]);

  if (props.value?.error) {
    return (
      <div className="h-full flex items-center justify-center font-embeddable text-sm">
        <WarningIcon />
        <div className="whitespace-pre-wrap p-4 max-w-sm text-xs">{props.value?.error}</div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <Card decoration="top" color="yellow" className='w-full'>
        <Text className="text-2xl">{props.title}</Text>
        <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
          <Metric>{formattedValue}</Metric>
          <Text className="truncate">from {props.measurePrev}</Text>
        </Flex>
        <Flex justifyContent="start" className="space-x-2 mt-4">
          <BadgeDelta deltaType={props.deltaType}>{props.delta}</BadgeDelta>
          <Text className="truncate">from previous period</Text>
        </Flex>
      </Card>
    </div>
  );
};
