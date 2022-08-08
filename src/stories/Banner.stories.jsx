import React from 'react';
import Banner from '../components/banner/Banner';
import '../components/banner/banner.scss';

export default {
  title: 'Valtech/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args) => <Banner {...args} />;