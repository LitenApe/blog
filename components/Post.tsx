import { Box, Link, Text } from '@chakra-ui/layout';

import { Page } from '../types/page';
import { Paragraph } from './layout/Paragraph';
import { Routes } from '../utils/routes';
import { useRouter } from 'next/dist/client/router';

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
      <Paragraph mb={0} mt={2}>
        {frontmatter.excerpt}
      </Paragraph>
      <Text
        as="time"
        dateTime={new Date(created_at).toISOString()}
        fontSize="xs"
      >
        {frontmatter.date}
      </Text>
    </Box>
  );
}
