import { Meta, StoryObj } from '@storybook/react';
import signinForm from './signinForm';

const meta: Meta<typeof signinForm> = {
  component: signinForm,
};

export default meta;
type Story = StoryObj<typeof signinForm>;

export const Primary: Story = {
  render: () => <div></div>,
};
