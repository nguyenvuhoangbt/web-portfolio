import { ReactNode, createContext, useMemo, useState } from 'react';
import { colors } from 'windi.config.color';
import {
  CssBaseline,
  PaletteMode,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material';

// Consts
import { fontQuicksand } from '@/src/components/layouts/primary/PrimaryLayout';

interface IDarkModeContext {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const defaultValue: IDarkModeContext = {
  mode: 'light',
  toggleColorMode: () => undefined,
};

interface DarkModeProviderProps {
  children: ReactNode;
}

const DarkModeContext = createContext<IDarkModeContext>(defaultValue);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        if (mode === 'light') {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    [mode]
  );

  const getDesignTokens = (mode: PaletteMode) =>
    ({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              primary: {
                main: colors.primary,
              },
            }
          : {
              // palette values for dark mode
              primary: {
                main: colors.primary,
              },
            }),
      },
      typography: {
        fontFamily: [
          fontQuicksand.style.fontFamily,
          '-apple-system',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    } as ThemeOptions);

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <DarkModeContext.Provider value={{ ...colorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline> {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
