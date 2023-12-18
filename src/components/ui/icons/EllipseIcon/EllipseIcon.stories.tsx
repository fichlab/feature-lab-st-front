import type { Meta, StoryObj } from '@storybook/react';
import { EllipseIcon } from './EllipseIcon';

const meta: Meta<typeof EllipseIcon> = {
  title: 'ui/icons/EllipseIcon',
  component: EllipseIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EllipseIcon>;

export const Basic: Story = {
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
