import { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent } from 'react';
import InputField from './Input';

const meta: Meta<typeof InputField> = {
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  render: () => (
    <InputField
      type={''}
      name={''}
      value={''}
      onChange={function (e: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      }}
      placeholder={''}
      error={undefined}
    />
  ),
};
