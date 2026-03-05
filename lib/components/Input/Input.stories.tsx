import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Input } from './Input';


const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'input-id',
    // @ts-expect-error: Allow custom data attribute
    'data-test': 'input-test',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <div>
      <Input
        {...args}
        value={value}
        onChange={e => {
          setValue(e.target.value);
          if (args.onChange) args.onChange(e);
        }}
      />

      <div style={{ marginTop: '12px', background: 'rgba(0, 0, 0, 0.1)' }}>Input value: {value}</div>

      </div>
    );
  },
  args: {
    placeholder: 'Bob',
    label: 'First name',
    showLabel: true
  },
};
