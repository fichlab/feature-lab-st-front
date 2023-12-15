import type { Meta, StoryObj } from '@storybook/react';
import { Stage } from './Stage';

const meta: Meta<typeof Stage> = {
  title: 'ui/Stage',
  component: Stage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stage>;

export const Default: Story = {
  args: {},
};

export const Done: Story = {
  args: {
    done: true,
  },
};

export const Now: Story = {
  args: {
    now: true,
  },
};
