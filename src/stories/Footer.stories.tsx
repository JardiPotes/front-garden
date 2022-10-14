import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Footer } from '../components/Footer';

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
  },
} as ComponentMeta<typeof Footer>;

const Template = () => <Footer />;

export const Default = Template.bind({});