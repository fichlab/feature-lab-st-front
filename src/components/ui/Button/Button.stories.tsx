import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BlueTheme: Story = {
  args: {
    theme: 'blue',
  },
};

export const PromoTheme: Story = {
  args: {
    theme: 'promo',
  },
};

export const WhiteTheme: Story = {
  args: {
    theme: 'white',
  },
};
