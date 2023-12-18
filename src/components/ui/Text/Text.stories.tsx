import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'ui/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'ФИЧЛАБ',
  },
};

export const TEXT_1: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'text-1',
  },
};

export const TEXT_1_WITH_LINE: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'text-1',
    line: true,
  },
};

export const TEXT_2: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'text-2',
  },
};

export const TEXT_2_WITH_LINE: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'text-2',
    line: true,
  },
};

export const TITLE_1_MOLOT_OUTLINED: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'title-molot-1',
    outlined: true,
  },
};

export const TITLE_1_MOLOT: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'title-molot-1',
  },
};

export const TITLE_2_MOLOT: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'title-molot-2',
  },
};

export const TITLE_3_MOLOT: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'title-molot-3',
  },
};

export const TITLE_4_MOLOT: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'title-molot-4',
  },
};

export const TITLE_1: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'title-1',
  },
};

export const TITLE_2: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'title-2',
  },
};

export const TITLE_3: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'title-3',
  },
};

export const TITLE_4: Story = {
  args: {
    children: 'ФИЧЛАБ',
    view: 'title-4',
  },
};
