import Image from 'next/image';
import DSCF3895 from '../../content/photos/DSCF3895.jpg';
import DSCF3992 from '../../content/photos/DSCF3992.jpg';
import DSCF4145 from '../../content/photos/DSCF4145.jpg';
import DSCF4195 from '../../content/photos/DSCF4195.jpg';

import Head from 'next/head';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import { Box, Container } from '@chakra-ui/layout';

export default function Photos(): JSX.Element {
  return (
    <>
      <Head>
        <title>Photo Portfolio | LitenApe</title>
        <meta name="description" content="Son Thanh Vo's blog" />
      </Head>
      <Container as="main" maxW="container.lg">
        <VisuallyHidden>Photo Portfolio</VisuallyHidden>
        <Container id="image-grid" maxW="container.lg">
          <Box>
            <Image
              src={DSCF4195}
              alt="sunrise over the opera building"
              placeholder="blur"
            />
            <Image
              src={DSCF4145}
              alt="autumn at kistefoss, the twist"
              placeholder="blur"
            />
          </Box>
          <Box>
            <Image
              src={DSCF3895}
              alt="summerday at nordmarka, Oslo"
              placeholder="blur"
            />
            <Image src={DSCF3992} alt="cloudy afternoon" placeholder="blur" />
          </Box>
        </Container>
      </Container>
    </>
  );
}
