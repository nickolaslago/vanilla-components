import { Dataset, Measure, loadData } from "@embeddable.com/core";
import { EmbeddedComponentMeta, defineComponent } from "@embeddable.com/react";

import Component from './index';

export const meta: EmbeddedComponentMeta = {
    name: 'SmartifyKPI',
    label: 'Smartify_KPI',
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
            description: 'Dataset'
        },
        {
            name: 'metric',
            type: 'measure',
            label: 'Metric_KPI',
            config: {
                dataset: 'ds'
            }
        },
        {
            name: 'measurePrev',
            type: 'string',
            label: 'Previous_Measure_Value'
        },
        {
            name: 'delta',
            type: 'string',
            label: 'Delta'
        },
        {
            name: 'deltaType',
            type: 'string',
            label: 'Delta Type'
        },
    ],
    events: []
};

export type Inputs = {
    title?: string;
    ds: Dataset;
    metric: Measure;
    measurePrev: string;
    delta: string;
    deltaType: string;
};

export default defineComponent<Inputs>(Component, meta, {
    props: (inputs) => {
        return {
            ...inputs,
            value: loadData({
                from: inputs.ds,
                measures: [inputs.metric]
            })
        }
    }
})