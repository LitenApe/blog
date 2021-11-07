import { Container, Link, Text } from '@chakra-ui/layout';

export function Footer() {
  return (
    <Container as="footer" my={8}>
      <Text fontSize="md" my={4}>
        The site is built using <Link href="https://nextjs.org/">nextjs</Link>{' '}
        and <Link href="https://chakra-ui.com">chakra ui</Link> with no effort
        whatsoever to the design. The entire site can be found on{' '}
        <Link href="https://github.com/LitenApe/blog">github</Link> if you are
        curious about how the site was created and configured.
      </Text>
    </Container>
  );
}
