import React from 'react';
import Card from '../components/cards/Card';
import '../components/cards/cards.scss';

export default {
  title: 'Valtech/Cards',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args) => <Card {...args} />;