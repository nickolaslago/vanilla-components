import { Dimension, Measure } from '@embeddable.com/core';
import { DataResponse } from '@embeddable.com/react';
import { AreaChart, Card, Title } from '@tremor/react';
import React, { useEffect, useMemo, useRef } from 'react';

import useFont from '../../../hooks/useFont';
import { WarningIcon } from '../../../vanilla/icons';
import { Inputs } from './SmartifyAreaStaked.emb';

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
  title?: string;
  line: DataResponse[];
  metric: Measure;
  categories: string[];
  xAxis: string;
};


export default (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useFont();
  
  console.log(props.ds)

  return (
    <div className="h-full">
      <>
        <Card>
          <Title></Title>
          <AreaChart data={props.line} index={props.xAxis} categories={props.categories}></AreaChart>
        </Card>
      </>
    </div>
  );
};
