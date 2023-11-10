import ViewButton from './IButton';
import { IButton } from './IButton';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { mockViewButtonProps } from './View.mocks';
import { StyledEngineProvider } from '@mui/material/styles';

const meta = {
  title: 'Button/ScrollDown',
  component: ViewButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ViewButton>;

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ViewButton> = () => (
  <StyledEngineProvider injectFirst>
    <ViewButton />
  </StyledEngineProvider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockViewButtonProps.base,
} as IButton;

// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     variant: 'contained',
//   },
// };
