import { Link as ChakraLink, Container, HStack } from '@chakra-ui/layout';

import Link from 'next/link';
import { Routes } from '../../utils/routes';

export function Navigation() {
  return (
    <Container id="main-nav" as="nav" maxW="container.lg" mt={4} mb={8}>
      <HStack as="ul" my={3} mx={4} style={{ listStyle: 'none' }}>
        <li>
          <ChakraLink as={Link} href={Routes.INDEX}>
            Home
          </ChakraLink>
        </li>
        <li>
          <ChakraLink as={Link} href={Routes.POSTS}>
            Thoughts
          </ChakraLink>
        </li>
      </HStack>
    </Container>
  );
}
