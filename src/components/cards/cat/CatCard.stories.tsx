import { Meta, StoryFn } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';
import { StyledEngineProvider } from '@mui/material';

export default {
  title: 'cards/CatCard',
  component: CatCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof CatCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CatCard> = (args) => (
  <StyledEngineProvider injectFirst>
    <CatCard {...args} />
  </StyledEngineProvider>
);
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCatCardProps.base,
} as ICatCard;
