import { ComponentMeta } from "@storybook/react";
import { FC } from "react";

import { Profile } from "../index";

export default {
  title: "Profile",
  component: Profile,
  parameters: {},
} as ComponentMeta<typeof Profile>;

const Template: FC = () => <Profile />;

export const Default = Template.bind({});
