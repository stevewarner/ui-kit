import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SearchInput } from './SearchInput';


const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'search-input-id',
    // @ts-expect-error: Allow custom data attribute
    'data-test': 'search-input-test',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <div>
      <SearchInput
        {...args}
        value={value}
        onChange={e => {
          setValue(e.target.value);
          if (args.onChange) args.onChange(e);
        }}
        onClear={() => {
          setValue('');
          if (args.onClear) args.onClear();
        }}
      />

      <div style={{ marginTop: '12px', background: 'rgba(0, 0, 0, 0.1)' }}>Search value: {value}</div>

      </div>
    );
  },
  args: {
    placeholder: 'Search Input',
  },
};
