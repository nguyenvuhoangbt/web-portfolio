import { AppPropsWithLayout } from './app';
import Provider from '@/src/hooks/useProvider';
import '@/public/globals.css';
import 'windi.css';
import { StyledEngineProvider } from '@mui/material';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <StyledEngineProvider injectFirst>
      <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
    </StyledEngineProvider>
  );
}

export default MyApp;
