import { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

const meta: Meta<typeof BaseTemplate> = {
  component: BaseTemplate,
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

export const Primary: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  } as IBaseTemplate,
};
