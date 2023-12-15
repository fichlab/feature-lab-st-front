import type { Meta, StoryObj } from '@storybook/react';
import { WhatsupIcon } from './WhatsupIcon';

const meta: Meta<typeof WhatsupIcon> = {
  title: 'ui/icons/WhatsupIcon',
  component: WhatsupIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WhatsupIcon>;

export const Basic: Story = {
  args: {},
};
