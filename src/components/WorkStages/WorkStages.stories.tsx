import type { Meta, StoryObj } from '@storybook/react';
import { WorkStages } from './WorkStages';
import { workStages } from '../../_mockData/workStagesMockData';

const meta: Meta<typeof WorkStages> = {
  title: 'components/WorkStages',
  component: WorkStages,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WorkStages>;

export const Normal: Story = {
  args: {
    stages: workStages,
  },
};
