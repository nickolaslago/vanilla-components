import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';

import Component from './index';

export const meta: EmbeddedComponentMeta = {
  name: 'MaterialDatePicker',
  label: 'Material Date Picker',
  inputs: [],
  events: [],
  variables: []
};

export type Inputs = {};

export default defineComponent<Inputs>(Component, meta, {
  props: (inputs) => ({
    ...inputs
  }),
  events: {}
});
