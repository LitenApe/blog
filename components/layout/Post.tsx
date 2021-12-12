import { Box, Heading, Link } from '@chakra-ui/layout';

import { Frontmatter } from '../../types/page';
import { Paragraph } from '../layout/Paragraph';
import { Routes } from '../../utils/routes';
import { useRouter } from 'next/dist/client/router';

interface Props extends Frontmatter {
  readonly slug: string;
}

export function Post(props: Props) {
  const { slug, title, excerpt } = props;
  const router = useRouter();

  return (
    <Box as="article" onClick={() => router.push(`${Routes.POSTS}/${slug}`)}>
      <Heading>
        <Link href={`${Routes.POSTS}/${slug}`}>{title}</Link>
      </Heading>
      <Paragraph>{excerpt}</Paragraph>
    </Box>
  );
}
