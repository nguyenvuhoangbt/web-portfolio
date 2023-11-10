import { AppPropsWithLayout } from './app';
import Provider from '@/src/hooks/useProvider';
import '@/public/globals.css';
import 'windi.css';
import { StyledEngineProvider } from '@mui/material';
import { StrictMode } from 'react';

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
