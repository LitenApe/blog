import { Link as ChakraLink, Container, HStack } from '@chakra-ui/react';

import Link from 'next/link';
import { Routes } from '../../utils/routes';

export function Navigation() {
  return (
    <Container as="nav" maxW="container.lg">
      <HStack as="ul" my={3} mx={4} style={{ listStyle: 'none' }}>
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
