import {ComponentMeta} from '@storybook/react';
import {FC} from 'react';

import {Footer} from '../components/Footer';

export default {
  title: 'Footer',
  component: Footer,
  parameters: {},
} as ComponentMeta<typeof Footer>;

const Template: FC = () => <Footer />;

export const Default = Template.bind({});
