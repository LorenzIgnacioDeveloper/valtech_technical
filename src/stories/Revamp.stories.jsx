import React from 'react';
import Revamp from '../components/revampBanner/Revamp';
import '../components/revampBanner/revamp.scss';

export default {
  title: 'Valtech/BannerV2',
  component: Revamp,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args) => <Revamp {...args} />;