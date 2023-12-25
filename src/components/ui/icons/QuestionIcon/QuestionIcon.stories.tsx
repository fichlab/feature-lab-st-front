import type { Meta, StoryObj } from '@storybook/react';
import { QuestionIcon } from './QuestionIcon';

const meta: Meta<typeof QuestionIcon> = {
  title: 'ui/icons/QuestionIcon',
  component: QuestionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuestionIcon>;

export const Basic: Story = {
  args: {},
};
