import { Heart } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";

import { AnimatedIconButton } from "_/components/ui/animated-icon-button";

const meta = {
  title: "Components/Animated Icon Button",
  component: AnimatedIconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof AnimatedIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (isActive) => (
      <Heart
        className={`w-6 h-6 ${
          isActive ? "text-red-500 fill-red-500" : "text-gray-500"
        }`}
      />
    ),
  },
};
