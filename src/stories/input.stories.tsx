import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "_/components/ui/input";
const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    placeholder: "Type something...",
  },
};
