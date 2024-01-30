import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
// import { Theme } from '../src/theme/MyTheme';
import '@/public/globals.css';

export const decorators = [
  withThemeFromJSXProvider({
    // themes: {
    //   myTheme: Theme,
    // },
    // defaultTheme: 'myTheme',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    expanded: true,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
