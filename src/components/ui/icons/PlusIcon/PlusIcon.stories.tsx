import type { Meta, StoryObj } from '@storybook/react';
import { PlusIcon } from './PlusIcon';

const meta: Meta<typeof PlusIcon> = {
  title: 'ui/icons/PlusIcon',
  component: PlusIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlusIcon>;

export const Basic: Story = {
  args: {},
};
