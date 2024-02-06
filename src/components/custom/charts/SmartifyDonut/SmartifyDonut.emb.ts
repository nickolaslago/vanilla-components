import { Dataset, Dimension, Measure, loadData } from '@embeddable.com/core';
import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';

import Component from './index';

export const meta: EmbeddedComponentMeta = {
  name: 'SmartifyDonut',
  label: 'Smartify Donut Chart',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Chart title',
      description: 'The title for the chart',
      category: 'Configure chart'
    },
    {
      name: 'ds',
      type: 'dataset',
      label: 'Dataset',
      description: 'Dataset',
      category: 'Configure chart'
    },
    {
      name: 'segments',
      type: 'dimension',
      label: 'Segments',
      config: {
        dataset: 'ds'
      },
      category: 'Configure chart'
    },
    {
      name: 'metric',
      type: 'measure',
      label: 'Metric',
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
    segments: Dimension;
    metric: Measure;
};

export default defineComponent<Inputs>(Component, meta, {
    props: (inputs) => {
        return {
            ...inputs,
            donut: loadData({
                from: inputs.ds,
                dimensions: [inputs.segments],
                measures: [inputs.metric]
            })
        };
    }
});