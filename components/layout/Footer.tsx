import { Container, Link, Text } from '@chakra-ui/layout';

export function Footer() {
  return (
    <Container as="footer" my={8}>
      <Text fontSize="md" my={4}>
        The site is built using <Link href="https://nextjs.org/">nextjs</Link>{' '}
        and <Link href="https://chakra-ui.com">chakra ui</Link> with no effort
        whatsoever to the design. I did not want to waste time on choosing
        colours, fonts and spacing so everything is built with &quot;out of the
        box&quot; configurations.
      </Text>
    </Container>
  );
}
