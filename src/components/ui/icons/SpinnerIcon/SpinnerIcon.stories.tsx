import type { Meta, StoryObj } from '@storybook/react';
import { SpinnerIcon } from './SpinnerIcon';

const meta: Meta<typeof SpinnerIcon> = {
  title: 'ui/icons/SpinnerIcon',
  component: SpinnerIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SpinnerIcon>;

export const DefaultTheme: Story = {
  args: {},
};

export const WhiteTheme: Story = {
  args: {
    theme: 'white',
  },
};
