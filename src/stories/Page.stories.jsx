import React from 'react';

import { Page } from './Page';

export default {
  title: 'Valtech/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args) => <Page {...args} />;
