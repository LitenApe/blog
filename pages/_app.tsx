import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { MDXProvider } from '@mdx-js/react';
import { Footer } from '../components/layout/footer';
import { Navigation } from '../components/layout/navigation';

const components = {
  p: (props) => <Text fontSize="md" my={4} {...props} />,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MDXProvider components={components}>
        <Navigation />
        <Divider />
        <Component {...pageProps} />
        <Divider />
        <Footer />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
