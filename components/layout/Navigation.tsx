import Link from 'next/link';
import { Box, Link as ChakraLink, HStack } from '@chakra-ui/react';
import { Routes } from '../../utils/routes';

export function Navigation() {
  return (
    <Box as="nav" mx={4} my={3}>
      <HStack as="ul" style={{ listStyle: 'none' }}>
        <ChakraLink as="li">
          <Link href={Routes.INDEX}>Home</Link>
        </ChakraLink>
        <ChakraLink as="li">
          <Link href={Routes.POSTS}>Posts</Link>
        </ChakraLink>
        <ChakraLink as="li">
          <Link href={Routes.DRAFTS}>Drafts</Link>
        </ChakraLink>
      </HStack>
    </Box>
  );
}
