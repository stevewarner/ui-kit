import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button, ROLE } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'button-id',
    // @ts-expect-error: Allow custom data attribute
    'data-test': 'button-test',
    onClick: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: ROLE.PRIMARY,
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: ROLE.SECONDARY,
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: ROLE.TERTIARY,
    children: 'Tertiary Button',
  },
};


