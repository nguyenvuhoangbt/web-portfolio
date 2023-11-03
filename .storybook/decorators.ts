import { theme } from '../src/theme/MyTheme';

export const decorators = [
  (Story) =>
    ((<ThemeProvider>theme) = { theme } > <Story>/>/ < /ThemeProvider>/),
];
