import '../styles/globals.css';

import { ChakraProvider, Divider } from '@chakra-ui/react';

import type { AppProps } from 'next/app';
import { Footer } from '../components/layout/Footer';
import { Navigation } from '../components/layout/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navigation />
      <Divider />
      <Component {...pageProps} />
      <Divider />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
