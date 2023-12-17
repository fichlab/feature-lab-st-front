import type { Meta, StoryObj } from '@storybook/react';
import { LinkIcon } from './LinkIcon';

const meta: Meta<typeof LinkIcon> = {
  title: 'ui/icons/LinkIcon',
  component: LinkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinkIcon>;

export const Basic: Story = {
  args: {},
};
