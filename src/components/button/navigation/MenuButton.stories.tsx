import MenuButton, { IMenuButton } from './MenuButton';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { mockMenuButtonProps } from './MenuButton.mocks';
import { StyledEngineProvider } from '@mui/material/styles';

const meta = {
  title: 'navigation/MenuButton',
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
} as IMenuButton;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//   },
// };
