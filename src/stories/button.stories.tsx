import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "_/components/ui/button";
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      control: { type: "radio" },
      description: "Define o estilo do botão.",
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
      description: "Define o tamanho do botão.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};
