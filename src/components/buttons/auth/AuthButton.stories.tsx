import { Meta, StoryFn } from '@storybook/react';
import AuthButton, { IAuthButton } from './AuthButton';
import { mockAuthButtonProps } from './AuthButton.mocks';

export default {
  title: 'buttons/AuthButton',
  component: AuthButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof AuthButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AuthButton> = (args) => <AuthButton {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAuthButtonProps.base,
} as IAuthButton;
