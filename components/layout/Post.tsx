import { Box, Link } from '@chakra-ui/layout';
import { Frontmatter, Page } from '../../types/page';

import { Paragraph } from '../layout/Paragraph';
import { Routes } from '../../utils/routes';
import { Timestamp } from './Timstamp';
import { When } from '../utility/When';
import { useRouter } from 'next/dist/client/router';

export function Post(props: Page) {
  const { slug, frontmatter, created_at, last_modified } = props;
  const router = useRouter();

  return (
    <Box
      as="article"
      p={4}
      border="solid"
      borderWidth="thin"
      borderRadius="sm"
      boxShadow="xl"
      borderColor="gray.300"
      cursor="pointer"
      onClick={() => router.push(`${Routes.POSTS}/${slug}`)}
    >
      <header>
        <Link href={`${Routes.POSTS}/${slug}`} fontSize="2xl">
          {frontmatter.title}
        </Link>
      </header>
      <Timestamp leadingText="Published" time={created_at} />
      <Paragraph mb={0} mt={2}>
        {frontmatter.excerpt}
      </Paragraph>
    </Box>
  );
}
