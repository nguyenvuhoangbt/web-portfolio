import MenuButton, { IMenuButton } from './MenuButton';
import { Meta, StoryFn } from '@storybook/react';
import { mockMenuButtonProps } from './MenuButton.mocks';

export default {
  title: 'navigation/MenuButton',
  component: MenuButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof MenuButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MenuButton> = (args) => <MenuButton {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMenuButtonProps.base,
} as IMenuButton;
