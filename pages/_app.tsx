import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { ChakraProvider } from '@chakra-ui/react';

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
