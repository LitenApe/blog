import '../styles/index.scss';
import 'normalize.css';

import { ChakraProvider } from '@chakra-ui/react';

import type { AppProps } from 'next/app';
import { Footer } from '../components/layout/Footer';
import { Navigation } from '../components/layout/Navigation';

import { ColorModeScript } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="system" />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
