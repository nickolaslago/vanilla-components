import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';

import Component from './index';

export const meta: EmbeddedComponentMeta = {
  name: 'SmartifyTitle',
  label: 'Smartify Title',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'title'
    }
  ]
};

type Inputs = {
    title: string;
}

export default defineComponent<Inputs>(Component, meta, {
    props: (inputs) => {
        return {
            title: inputs.title
        }
    }
})