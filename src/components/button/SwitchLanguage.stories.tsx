import SwitchLanguageButton from './SwitchLanguage';
import { MyButtonProps } from './MyButton';
import { Meta, StoryFn } from '@storybook/react';
import { mockSwitchLanguageButtonProps } from './SwitchLanguage.mocks';
import { StyledEngineProvider } from '@mui/material/styles';

const meta = {
  title: 'Button/ScrollDown',
  component: SwitchLanguageButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SwitchLanguageButton>;

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SwitchLanguageButton> = () => (
  <StyledEngineProvider injectFirst>
    <SwitchLanguageButton />
  </StyledEngineProvider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSwitchLanguageButtonProps.base,
} as MyButtonProps;

// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     variant: 'contained',
//   },
// };
