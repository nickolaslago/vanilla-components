import { Dataset, Dimension, Granularity, Measure, loadData } from '@embeddable.com/core';
import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';
import { Component } from 'react';

export const meta: EmbeddedComponentMeta = {
  name: 'SmartifyAreaStaked',
  label: 'Smartify_AreaStaked',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'Select the chart title'
    },
    {
      name: 'ds',
      type: 'dataset',
      label: 'Dataset',
      description: 'Dataset',
      defaultValue: false,
      category: 'Configure chart'
    },
    {
      name: 'xAxis',
      type: 'dimension',
      label: 'X-Axis',
      config: {
        dataset: 'ds',
        supportedTypes: ['time']
      },
      category: 'Configure chart'
    },
    {
      name: 'categories',
      type: 'dimension',
      label: 'Categories',
      config: {
        dataset: 'ds'
      },
      category: 'Configure chart'
    },
    {
      name: 'metrics',
      type: 'measure',
      label: 'Metrics',
      config: {
        dataset: 'ds'
      },
      category: 'Configure chart'
    }
  ],
  events: []
};

export type Inputs = {
  title?: string;
  ds: Dataset;
  xAxis: Dimension;
  granularity: Granularity;
  metrics: Measure[];
};

export default defineComponent<Inputs>(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs,
      line: loadData({
        from: inputs.ds,
        timeDimensions: [
          {
            dimension: inputs.xAxis?.name,
            granularity: inputs.granularity
          }
        ],
        measures: inputs.metrics
      })
    };
  }
});
