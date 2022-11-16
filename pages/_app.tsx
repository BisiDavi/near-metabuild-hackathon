import type { AppProps } from 'next/app';

import Providerlayout from '@/layout/ProviderLayout';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providerlayout>
      <Component {...pageProps} />
    </Providerlayout>
  );
}

export default MyApp;
