import type { Meta, StoryObj } from "@storybook/react";

import { Rating } from "_/components/ui/rating";
const meta = {
  title: "Components/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "range", min: 0, max: 5, step: 1 },
      description: "Define a nota de avaliação.",
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    rating: 3,
  },
};
