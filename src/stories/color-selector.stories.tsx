import type { Meta, StoryObj } from "@storybook/react";

import { ColorSelector } from "_/components/ui/color-selector";

const meta = {
  title: "Components/Color Selector",
  component: ColorSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    colorOptions: {
      control: {
        type: "inline-check",
        options: ["primary", "success", "warning", "danger", "info"],
      },
    },
  },
} satisfies Meta<typeof ColorSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorOptions: ["primary", "success", "warning", "danger", "info"],
  },
};
