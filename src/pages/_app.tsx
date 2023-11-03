import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';
import { AuthProvider } from '@/src/state/auth/AuthContext';
import { MyThemeProvider } from '@/src/theme/MyThemeProvider';
import '@/public/globals.css';
import 'windi.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MyThemeProvider>
      {<AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>}
    </MyThemeProvider>
  );
}

export default MyApp;
