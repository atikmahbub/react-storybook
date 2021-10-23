import React from "react";
import Header from "./Header";

export default {
  title: "Header/title",
  component: Header,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: "Primary Header",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Header",
};
