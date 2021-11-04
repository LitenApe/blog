import { Box, Container, Link, Text } from '@chakra-ui/layout';

export function Footer() {
  return (
    <Box as="footer" my={8}>
      <Container>
        <Text fontSize="md" my={4}>
          The site is built using <Link href="https://nextjs.org/">nextjs</Link>{' '}
          and <Link href="https://chakra-ui.com">chakra ui</Link> with no effort
          whatsoever to the design. I did not want to waste time on choosing
          colours, fonts and spacing so everything is built with out of the box
          configurations.
        </Text>
      </Container>
    </Box>
  );
}
