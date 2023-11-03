import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { theme } from './MyTheme';

interface MyThemeProviderProps {
  children: ReactNode;
}

export const MyThemeProvider: React.FC<MyThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
