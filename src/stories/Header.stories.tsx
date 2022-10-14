import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Header } from '../components/Header';

export default {
  title: 'Header',
  component: Header,
  parameters: {
  },
} as ComponentMeta<typeof Header>;

const Template = () => <Header />;

export const HeaderTemplate = Template.bind({});