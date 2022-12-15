import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <NextUIProvider>
        <Component {...pageProps} />;
      </NextUIProvider>
    </StoreProvider>
  );
}

export default MyApp;
