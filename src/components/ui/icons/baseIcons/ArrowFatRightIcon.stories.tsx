import type { Meta, StoryObj } from '@storybook/react';
import { ArrowFatRightIcon } from './ArrowFatRightIcon';

const meta: Meta<typeof ArrowFatRightIcon> = {
  title: 'ui/icons/ArrowFatRightIcon',
  component: ArrowFatRightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArrowFatRightIcon>;

export const Basic: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};
