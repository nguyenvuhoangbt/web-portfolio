import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '@mui/material';
import { theme } from '../src/theme/MyTheme';
import '@/public/globals.css';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      myTheme: theme,
    },
    defaultTheme: 'myTheme',
    Provider: ThemeProvider,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
