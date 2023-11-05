import { StoryFn, Meta } from '@storybook/react';
import Footer, { IFooter } from './Footer';
import { StyledEngineProvider } from '@mui/material';

export default {
  title: 'navigation/Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => (
  <StyledEngineProvider injectFirst>
    <Footer {...args} />
  </StyledEngineProvider>
);

export const Base = Template.bind({});
Base.args = {} as IFooter;
