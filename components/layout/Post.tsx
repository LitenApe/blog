import { Box, Divider, Link, Text } from '@chakra-ui/layout';

import { Page } from '../../types/page';
import { Paragraph } from '../layout/Paragraph';
import { Routes } from '../../utils/routes';
import { useRouter } from 'next/dist/client/router';
import { When } from './When';

export function Post(props: Page) {
  const { slug, frontmatter, created_at } = props;
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
      <Text>Published: {frontmatter.date}</Text>
      <Paragraph mb={0} mt={2}>
        {frontmatter.excerpt}
      </Paragraph>
      <When
        condition={
          frontmatter.categories.length > 0 || frontmatter.tags.length > 0
        }
      >
        <Divider />
        <Text>
          {frontmatter.categories.join(', ')}{' '}
          <When
            condition={
              frontmatter.categories.length > 0 && frontmatter.tags.length > 0
            }
          >
            |
          </When>{' '}
          {frontmatter.tags.join(', ')}
        </Text>
      </When>
    </Box>
  );
}
