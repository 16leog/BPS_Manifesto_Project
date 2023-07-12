import { Meta, StoryObj } from '@storybook/react';
import NoOne from './NoOne';

const meta: Meta<typeof NoOne> = {
  component: NoOne,
};

export default meta;
type Story = StoryObj<typeof NoOne>;

export const Primary: Story = {
  render: () => <NoOne />,
};
