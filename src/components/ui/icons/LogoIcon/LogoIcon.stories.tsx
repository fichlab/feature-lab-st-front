import type { Meta, StoryObj } from '@storybook/react';
import { LogoIcon } from './LogoIcon';

const meta: Meta<typeof LogoIcon> = {
  title: 'ui/icons/LogoIcon',
  component: LogoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LogoIcon>;

export const Basic: Story = {
  args: {},
};
