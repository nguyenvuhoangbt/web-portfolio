import MenuButton from './Menu';
import { MyButtonProps } from './MyButton';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { mockMenuButtonProps } from './Menu.mocks';
import { StyledEngineProvider } from '@mui/material/styles';

const meta = {
  title: 'Button/Menu',
  component: MenuButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof MenuButton>;

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MenuButton> = (args) => (
  <StyledEngineProvider injectFirst>
    <MenuButton {...args} />
  </StyledEngineProvider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMenuButtonProps.base,
} as MyButtonProps;

// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     variant: 'contained',
//   },
// };
