import '../styles/index.scss';
import 'normalize.css';

import { ChakraProvider, Divider } from '@chakra-ui/react';

import type { AppProps } from 'next/app';
import { Footer } from '../components/layout/Footer';
import { Navigation } from '../components/layout/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
