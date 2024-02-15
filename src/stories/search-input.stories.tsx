import type { Meta, StoryObj } from "@storybook/react";

import { SearchInput } from "_/components/ui/search-input";

const meta = {
  title: "Components/Search Input",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
