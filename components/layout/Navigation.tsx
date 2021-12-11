import { Link as ChakraLink, Container, HStack } from '@chakra-ui/react';

import Link from 'next/link';
import { Routes } from '../../utils/routes';

export function Navigation() {
  return (
    <Container as="nav" my={3}>
      <HStack as="ul" style={{ listStyle: 'none' }}>
        <ChakraLink as="li">
          <Link href={Routes.INDEX}>Home</Link>
        </ChakraLink>
        <ChakraLink as="li">
          <Link href={Routes.POSTS}>Thoughts</Link>
        </ChakraLink>
      </HStack>
    </Container>
  );
}
