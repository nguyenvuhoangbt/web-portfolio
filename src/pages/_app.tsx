// States & Hooks
import Provider from '@/src/hooks/useProvider';

// Libraries
import '@/public/globals.css';
import 'windi.css';
import { StyledEngineProvider } from '@mui/material';
import { StrictMode } from 'react';
import { AppPropsWithLayout } from './app';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
      </StyledEngineProvider>
    </StrictMode>
  );
}

export default MyApp;
