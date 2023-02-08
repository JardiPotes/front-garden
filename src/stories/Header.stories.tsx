import { ComponentMeta } from "@storybook/react";
import { FC } from "react";

import { Header } from "../components/Header";

export default {
  title: "Header",
  component: Header,
  parameters: {},
} as ComponentMeta<typeof Header>;

const Template: FC = () => <Header />;

export const Default = Template.bind({});
