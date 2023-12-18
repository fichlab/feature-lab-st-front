import type { Meta, StoryObj } from '@storybook/react';
import { CrossIcon } from './CrossIcon';

const meta: Meta<typeof CrossIcon> = {
  title: 'ui/icons/CrossIcon',
  component: CrossIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CrossIcon>;

export const Basic: Story = {
  args: {},
};
