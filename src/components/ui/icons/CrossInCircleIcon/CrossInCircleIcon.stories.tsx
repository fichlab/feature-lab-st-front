import type { Meta, StoryObj } from '@storybook/react';
import { CrossInCircleIcon } from './CrossInCircleIcon';

const meta: Meta<typeof CrossInCircleIcon> = {
  title: 'ui/icons/CrossInCircleIcon',
  component: CrossInCircleIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CrossInCircleIcon>;

export const Basic: Story = {
  args: {},
};
