import { AppPropsWithLayout } from './app';
import Provider from './provider';
import '@/public/globals.css';
import 'windi.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
}

export default MyApp;
